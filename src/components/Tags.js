import { useContext } from 'react'
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'

const Tags = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const {  } = useContext(ArtToysStateContext)

  return (
      <section className="Tags">
        <h1>Categories</h1>
        <section>
          Tags
        </section>
      </section>
  )
}
export default Tags
