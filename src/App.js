import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component
{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscriptFromAuth = null;

  componentDidMount(){
    this.unsubscriptFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userData = await createUserProfileDocument(userAuth);
        
        this.setState({ currentUser: userData });
      }else{
        this.setState({ currentUser: userAuth });
      }          
    });
  }

  componentWillUnmount(){
    this.unsubscriptFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
    </div>
    )
  }   
}

export default App;
