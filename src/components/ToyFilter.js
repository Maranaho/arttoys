import { useContext } from 'react'
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'

const ToyFilter = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { listFilter } = useContext(ArtToysStateContext)

  return (
      <article className="ToyFilter">
        <input
          type="text"
          placeholder="Find your toy..."
          value={listFilter}
          onChange={e=>dispatch({type:'SET_LIST_FILTER',payload:e.target.value})}/>
        <i className="material-icons search">search</i>
      </article>
  )
}
export default ToyFilter
