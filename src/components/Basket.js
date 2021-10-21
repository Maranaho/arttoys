import { useContext } from 'react'
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'
import Back from './Back'
import ToyList from './ToyList'
import Total from './Total'

const Basket = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { data,basket } = useContext(ArtToysStateContext)
  if(!data)return null
  return(
    <main className="Basket">
      <header>
        <Back/>
        <h1>My Favs</h1>
        <h2>Check and pay your toys</h2>
      </header>
      <section className="list">
        {basket.length > 0&&(
          <div className="clear">
            <button onClick={()=>dispatch({type:'CLEAR'})}>
              <span>Clear</span>
              <i className="material-icons">close</i>
            </button>
          </div>
        )}
        <ToyList/>
      </section>
      <Total/>
      <button disabled={basket.length === 0} className="artToyBtn primary">Checkout</button>
    </main>
  )
}
export default Basket
