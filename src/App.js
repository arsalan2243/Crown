import React from "react"
import "./App.css"
import Homepage from "./pages/homepage/Homepage"
import { Route, Switch } from "react-router-dom"
import Shop from "./pages/shop/Shop.jsx"
import Header from "./components/header/Header"
import SignInUp from "./pages/signin-signup/SignInUp"
import { auth } from "./firebase/firebase.utils"

class App extends React.Component {
  state = {
    currentUser: null,
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth = null
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    )
  }
}

export default App
