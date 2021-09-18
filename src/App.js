import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

//import { selectCollectionsForProview } from './redux/shop/shop.selectors'

class App extends Component
{
  unsubscriptFromAuth = null;

  componentDidMount(){

    //const { setCurrentUser, collectionsArray } = this.props;
    const { setCurrentUser } = this.props;

    this.unsubscriptFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userData = await createUserProfileDocument(userAuth);        
        setCurrentUser(userData);
      }else{
        setCurrentUser(userAuth);
      }          
    });
    /*
    addCollectionAndDocuments(
      'collections', 
      collectionsArray.map( ({title, items}) => ({title, items}) )
    )
    */
  }

  componentWillUnmount(){
    this.unsubscriptFromAuth();
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
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
