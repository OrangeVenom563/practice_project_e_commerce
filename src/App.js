import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/singIn and signUp/signInUp.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import {serCurrentUser} from './redux/user/user.actions'

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
      serCurrentUser(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(serCurrentUser(user))
})

export default connect (null, mapDispatchToProps) (App);
