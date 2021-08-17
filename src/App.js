import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkoutpage/checkout-page.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/singIn and signUp/signInUp.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
         userRef.onSnapshot((snapshot) => {
         setCurrentUser({
          id: snapshot.id,
          ...snapshot.data(),
         })
        });
      }
      setCurrentUser(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.props;
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=>
            currentUser ? <Redirect to='/'/> :
            <SignInSignUp/>
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect (mapStateToProps, mapDispatchToProps) (App);