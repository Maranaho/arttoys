import { Link } from "react-router-dom"
const Back = ()=>(
  <Link className="back" to="/">
    <i className="material-icons">chevron_left</i>
    <span>Back</span>
  </Link>
)
export default Back
