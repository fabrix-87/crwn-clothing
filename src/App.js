import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

//import { selectCollectionsForProview } from './redux/shop/shop.selectors'

class App extends Component
{
  componentDidMount(){
    const {checkUserSession} = this.props;

    checkUserSession();
  }

  render() {  
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'>
            {
              this.props.currentUser ? (
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
