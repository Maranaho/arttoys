import { useState } from "react"
import { Link } from "react-router-dom"
const Menu = ()=>{
  const [ isAuth,setIsAuth] = useState(false)
  return (
      <section className="Menu">
        <button>Menu</button>
        {!isAuth&&<input placeholder="username" type="text"/>}
        <ul>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/basket">My Basket</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><button onClick={()=>setIsAuth(!isAuth)}>{isAuth?'Logout':'Login'}</button></li>
        </ul>
      </section>
  )
}
export default Menu
