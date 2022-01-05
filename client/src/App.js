import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

//import { selectCollectionsForProview } from './redux/shop/shop.selectors'

//const App = ({checkUserSession,currentUser}) => // prima degli Hooks
const App = () =>
{
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();    

  useEffect(() => {
      // checkUserSession(); // prima degli hooks
      dispatch(checkUserSession())
  },[dispatch])

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin'>
          {
            currentUser ? (
              <Redirect to={{pathname: '/'}}/>
            ) : (
              <SignInAndSignUpPage></SignInAndSignUpPage>
            )
          }
        </Route>                    
      </Switch>
    </div>
  )
}

/* // prima degli hooks
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
*/

export default App;
//export default connect(mapStateToProps,mapDispatchToProps)(App); // prima degli Hooks
