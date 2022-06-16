import "./App.css"
import Homepage from "./pages/homepage/Homepage"
import { Route, Switch } from "react-router-dom"
import shop from "./pages/shop/Shop.jsx"
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={shop} />
      </Switch>
    </div>
  )
}

export default App
