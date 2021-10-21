import { useContext } from 'react'
import ArtToysStateContext from '../context/ArtToysStateContext'

const Total = ()=>{
  const { data,basket } = useContext(ArtToysStateContext)
  const getTotal = (acc,itm) =>{
    const toy = data[1].toys[itm]
    const thisQty = toy.hasOwnProperty('qty')?toy.qty:1
    const thisPrice = toy.price * thisQty
    acc.price = acc.price + thisPrice
    acc.qty = acc.qty+thisQty
    return acc
  }
  const bill = basket.reduce((acc,itm)=>getTotal(acc,itm),{qty:0,price:0})
  return(
    <section className="Total">
      <span>
        <strong>{bill.qty}</strong>
        <span>items</span>
      </span>
      <span className="price">{bill.price.toFixed(2)}</span>
    </section>
  )
}
export default Total
