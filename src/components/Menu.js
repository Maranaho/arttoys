import { useContext  } from 'react'
import { useLocation } from 'react-router-dom'
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'
import { Link } from "react-router-dom"

const Menu = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { showMenu } = useContext(ArtToysStateContext)
  const currentPage = useLocation().pathname
  return (
      <section className="Menu">
        <ul onClick={()=>dispatch({type:'SHOW_MENU',payload:false})} className={showMenu?'show':''}>
          <li className={currentPage==='/'?'current':''}><Link to="/">Shop</Link></li>
          <li className={currentPage==='/basket'?'current':''}><Link to="/basket">My Basket</Link></li>
          <li className={currentPage==='/profile'?'current':''}><Link to="/profile">My Profile</Link></li>
          <li><button>Login</button></li>
        </ul>
        <button onClick={()=>dispatch({type:'SHOW_MENU',payload:!showMenu})}>
          <i className="material-icons menu">menu</i>
        </button>
      </section>
  )
}
export default Menu
