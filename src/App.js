import React, { useEffect } from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import CheckOutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactPage from './pages/contact/contactpage.component';
import { checkUserSession } from './redux/user/user.action';
import './App.css';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/checkout" component={CheckOutPage} />
        <Route path="/signin" render={() =>
          currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)
        } />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { checkUserSession })(App);