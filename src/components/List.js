import { useContext,useEffect } from 'react'
import ArtToysStateContext from '../context/ArtToysStateContext'
import ArtToysDispatchContext from '../context/ArtToysDispatchContext'
import Toy from './Toy'

const List = ()=>{
  const dispatch = useContext(ArtToysDispatchContext)
  const { currentTags,data,toysPerPage,nbOfPages,pageRange,listFilter } = useContext(ArtToysStateContext)

  const getTags =()=>{
    if (data) {
      const { toys } = data[1]
      const getNbOfPages = Math.ceil(Object.keys(toys).length / toysPerPage)
      dispatch({type:'NB_OF_LIST_PAGES',payload:getNbOfPages})
    }
  }

  useEffect(getTags,[data])
  if(!data)return null
  const toys = data[1].toys
  const trimmedList = Object.keys(toys)
  .filter(toy=>toys[toy].name.toLowerCase().indexOf(listFilter.toLowerCase())!==-1)
  .filter(toy=>{
    if(currentTags.length) return currentTags.indexOf(toys[toy].type)!==-1
    else return true
  })
  .splice(0,toysPerPage*pageRange)

  return (
    <main className="List">
      <section>
        {trimmedList.map(toy=><Toy key={toy} toy={toy}/>)}
      </section>
      {listFilter===''&&(
        <div className="btnCtn">
          {toysPerPage*pageRange < toysPerPage*nbOfPages?(
            <button className="artToyBtn ghost" onClick={()=>dispatch({type:'LOAD_MORE_TOYS'})}>Load more toys</button>
          ):<p>No more toys 😭</p>}
        </div>
      )}
    </main>
  )
}
export default List
