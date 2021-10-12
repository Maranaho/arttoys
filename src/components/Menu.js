import { Link } from "react-router-dom"
const Menu = ()=>(
    <section className="Menu">
      <button>Menu</button>
      <ul>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/basket">My Basket</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
        <li><button>Logout</button></li>
      </ul>
    </section>
)
export default Menu
