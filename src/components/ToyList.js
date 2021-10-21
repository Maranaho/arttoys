import { useContext,useEffect } from 'react'
import { useParams,Link } from "react-router-dom"
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'

const ToyList = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { data,basket } = useContext(ArtToysStateContext)
  const newQty = (toy,val) => {
    return {qtyToy:toy,qty:val}
  }
  return(
    <section className="ToyList">
      {basket.map(toy=>{
        const thatToy = data[1].toys[toy]
        const { name,imgurl,price } = thatToy
        const qty = thatToy.hasOwnProperty('qty')?thatToy.qty:1
        return (
          <article key={`basketItem${toy}`}>
            <div>
              <span>{name}</span>
              <span className="price">{price}</span>
              <div className="qtyCtn">
                <input
                  type="number"
                  min={10}
                  max={0}
                  value={qty}
                  onChange={e=>dispatch({type:'UPDATE_QTY',payload:newQty(toy,Number(e.target.value))})}/>

                <div className="changeQty">
                  <button disabled={qty >= 10} onClick={()=>dispatch({type:'UPDATE_QTY',payload:newQty(toy,qty+1)})}>
                    <i className="material-icons">expand_less</i>
                  </button>
                  <button
                    disabled={qty <= 0}
                    onClick={()=>dispatch({type:'UPDATE_QTY',payload:newQty(toy,qty-1)})}>
                    <i className="material-icons">expand_more</i>
                  </button>
                </div>
              </div>
            </div>
            <img src={imgurl} alt={name}/>
            <i onClick={()=>dispatch({type:'ADD_BASKET',payload:toy})}
              className="material-icons delete">delete_outline</i>
          </article>
        )
      })}
      {basket.length === 0&&(
        <section className="buyStuff">
          <p>Go get some toys!</p>
          <button className="artToyBtn primary">
            <Link to="/">Go buy stuff</Link>
          </button>
        </section>
      )}
    </section>
  )
}
export default ToyList
