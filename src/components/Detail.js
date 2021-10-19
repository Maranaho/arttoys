import { useContext,useEffect } from 'react'
import { useParams } from "react-router-dom"
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'
import Back from './Back'

const Detail = ()=>{
  const { toyID } = useParams()
  const dispatch = useContext(ArtToysDispatchContext)
  const { data,basket } = useContext(ArtToysStateContext)
  const isInBasket = basket.indexOf(toyID)!==-1
  if(!data)return null
  const { name,imgurl,price,type,description } = data[1].toys[toyID]
  return(
    <main className="Detail">
      <section>
        <header>
          <Back/>
          <span className="price">{price}</span>
          <h1>{name}</h1>
          <span>{type}</span>
        </header>
        <div className="imgCtn">
          <img src={imgurl} alt={name}/>
        </div>
      </section>
      <article>
        <p>{description}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolorum ab aliquid suscipit necessitatibus facere, deserunt mollitia inventore commodi! Inventore.</p>
        <button
          onClick={()=>dispatch({type:'ADD_BASKET',payload:toyID})}
          className={`artToyBtn ${isInBasket?'ghost':'primary'}`}>{isInBasket?'Remove from basket':'Add to basket'}</button>
      </article>

    </main>
  )
}
export default Detail
