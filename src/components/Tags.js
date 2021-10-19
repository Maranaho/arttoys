import { useContext,useEffect } from 'react'
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'

const Tags = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { data,tags,currentTags } = useContext(ArtToysStateContext)
  const getTags = ()=>{
    if(data){
      const tagsDB = [...new Set(Object.keys(data[1].toys)
      .map(toy=>data[1].toys[toy].type))]
      dispatch({type:'TAGS',payload:tagsDB})
    }
  }
  const handleTagClick = e => {
    if(e.target.nodeName === 'LI' && !e.target.classList.contains('all'))dispatch({type:'SET_TAG_FILTER',payload:e.target.innerText})
  }

  useEffect(getTags,[data])
  if(!data)return null
  return (
      <section className="Tags">
        <h1>Categories</h1>
        <ul onClick={handleTagClick}>
          {tags&&tags.map(tag=>(
            <li
              className={currentTags.indexOf(tag)!==-1?'current':''}
              key={tag}>{tag}</li>
          ))}
          <li
            className="all"
            onClick={()=>dispatch({type:'ALL_TAGS'})}>All</li>
        </ul>
      </section>
  )
}
export default Tags
