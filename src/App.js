import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

class App extends Component
{
  unsubscriptFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscriptFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userData = await createUserProfileDocument(userAuth);        
        setCurrentUser(userData);
      }else{
        setCurrentUser(userAuth);
      }          
    });
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
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
    </div>
    )
  }   
}

const mapDipatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDipatchToProps)(App);
