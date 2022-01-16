import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';
import WithSpinner from './components/with-spinner/with-spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
//import HomePage from './pages/homepage/homepage.component';

const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const SignInWrapper = ({ children, currentUser }) => {
   return currentUser ? <Navigate to="/" replace /> : children;
};

const App = () =>
{
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();    

  useEffect(() => {
      dispatch(checkUserSession())
  },[dispatch])

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <ErrorBoundary>
        <Suspense fallback={<WithSpinner/>}>
          <Routes>        
            <Route exact path="/" element={<HomePage />} /> 
            <Route path='checkout' element={<CheckoutPage/>} />
            <Route path='shop/*' element={<ShopPage/>} />
            <Route path='contact' element={<div>Pagina contatti</div>} />
            <Route path='signin' element={<SignInWrapper currentUser={currentUser}><SignInAndSignUpPage /></SignInWrapper>}/>   
          </Routes>
        </Suspense>                     
      </ErrorBoundary>
    </div>
  )
}

export default App;
