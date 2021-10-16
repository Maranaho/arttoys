import { useReducer,useEffect } from 'react'
import ArtToysStateContext from './context/ArtToysStateContext'
import ArtToysDispatchContext from './context/ArtToysDispatchContext'
import ArtToysReducer, { initialArtToysState } from './reducers/ArtToysReducer'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import data from './arttoys.json'
import Nav from './components/Nav'
import Shop from './components/Shop'
import Basket from './components/Basket'
import Profile from './components/Profile'
import Detail from './components/Detail'

const App = ()=>{
  const [ state, dispatch ] = useReducer(ArtToysReducer, initialArtToysState)
  const readAPI = ()=> dispatch({type:'STORE_DATA',payload:data})
  useEffect(readAPI,[])
  return (
    <ArtToysDispatchContext.Provider value={dispatch}>
      <ArtToysStateContext.Provider value={state}>
        <Router>
          <main className={`ArtToys ${state.showMenu?'menuIsShown':''}`}>
            <Nav/>
            <div className="router">
            <Switch>
              <Route path="/detail/:toyID"><Detail/></Route>
              <Route path="/basket"><Basket/></Route>
              <Route path="/profile"><Profile/></Route>
              <Route path="/"><Shop/></Route>
            </Switch>
            </div>
          </main>
        </Router>
    </ArtToysStateContext.Provider>
    </ArtToysDispatchContext.Provider>
  )
}
export default App
