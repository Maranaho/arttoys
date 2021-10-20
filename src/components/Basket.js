import { useContext,useEffect } from 'react'
import { useParams,Link } from "react-router-dom"
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'
import Back from './Back'

const Basket = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { data,basket } = useContext(ArtToysStateContext)
  if(!data)return null
  return(
    <main className="Basket">
      <Back/>
      <section>
        {basket.map(toy=>{
          const thatToy = data[1].toys[toy]
          const { name,imgurl,price } = thatToy
          const qty = thatToy.hasOwnProperty('qty')?thatToy.qty:1
          return (
            <article key={`basketItem${toy}`}>
              <div>
                <span>{name}</span>
                <span className="price">{price}</span>
                <input
                  type="number"
                  value={qty}
                  onChange={e=>dispatch({type:'UPDATE_QTY',payload:{qtyToy:toy,qty:Number(e.target.value)}})}/>
              </div>
              <img src={imgurl} alt={name}/>
              <i onClick={()=>dispatch({type:'ADD_BASKET',payload:toy})}
                className="material-icons">delete_outline</i>
            </article>
          )
        })}
      </section>
      {basket.length === 0&&(
        <div>
          <p>Go get some toys!</p>
          <button className="artToyBtn primary">
            <Link to="/">Go buy stuff</Link>
          </button>
        </div>
      )}


    </main>
  )
}
export default Basket
