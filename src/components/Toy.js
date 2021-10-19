import { useContext,useEffect } from 'react'
import { Link } from "react-router-dom"
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'

const Toy = ({toy})=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { data } = useContext(ArtToysStateContext)
  const { toys } = data[1]
  const { name,imgurl,price } = toys[toy]
  const idx = Object.keys(toys).indexOf(toy)
  const hasFav = toys[toy].hasOwnProperty('fav')
  const isFav = hasFav?toys[toy].fav:false

  const handleFav = ()=>{
    if(hasFav)dispatch({type:'SET_FAV',payload:{toy,fav:!toys[toy].fav}})
    else dispatch({type:'SET_FAV',payload:{toy,fav:true}})
  }

  return (
    <article>
      <Link to={`/detail/${toy}`}>
        <img src={imgurl} alt={name}/>
      </Link>
      <span className="price"><strong>$</strong>{price}</span>
      <span className="name">{name}</span>
      <i onClick={handleFav} className={`material-icons fav ${isFav?'isFav':''}`}>{isFav?'favorite':'favorite_border'}</i>
    </article>
  )
}
export default Toy
