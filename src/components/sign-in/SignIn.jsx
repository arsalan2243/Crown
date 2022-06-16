import React, { Component } from "react"
import "./sign-in.scss"
import FormInput from "../../components/form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ email: "", password: "" })
  }
  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}
