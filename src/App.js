import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Nav from './components/Nav'
import Shop from './components/Shop'
import Basket from './components/Basket'
import Profile from './components/Profile'
import Detail from './components/Detail'
const App = ()=>(
  <Router>
    <main className="ArtToys">
      <Nav/>
      <Switch>
        <Route path="/detail/:toyID"><Detail/></Route>
        <Route path="/basket"><Basket/></Route>
        <Route path="/profile"><Profile/></Route>
        <Route path="/"><Shop/></Route>
      </Switch>
    </main>
  </Router>
)
export default App
