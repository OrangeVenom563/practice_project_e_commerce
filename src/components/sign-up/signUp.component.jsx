import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./signUp.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password Not Matching");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(displayName)
      createUserProfileDocument(user, {displayName} );
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      console.log("Message " + error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I do not have an account</h2>
        <span>Sign-up with email and password</span>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
