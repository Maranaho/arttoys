import { useContext } from 'react'
import { Link } from "react-router-dom"
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'

const Menu = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { isAuth } = useContext(ArtToysStateContext)
  return (
      <section className="Menu">
        <button>Menu</button>
        {!isAuth&&<input placeholder="username" type="text"/>}
        <ul>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/basket">My Basket</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><button onClick={()=>dispatch({type:'SET_IS_AUTH',payload:!isAuth})}>{isAuth?'Logout':'Login'}</button></li>
        </ul>
      </section>
  )
}
export default Menu
