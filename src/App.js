import "./App.css"
import Homepage from "./pages/homepage/Homepage"
import { Route, Switch } from "react-router-dom"
import Shop from "./pages/shop/Shop.jsx"
import Header from "./components/header/Header"
import SignInUp from "./pages/signin-signup/SignInUp"
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInUp} />
      </Switch>
    </div>
  )
}

export default App
