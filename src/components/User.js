import { useContext } from 'react'
import ArtToysStateContext from '../context/ArtToysStateContext'
const User = ()=>{
  const { data } = useContext(ArtToysStateContext)
  if(!data)return null

  const { firstName,imgUrl } = data.user
  return (
    <article className="User">
      <span>{firstName}</span>
      <img width="40" src={imgUrl} alt={firstName}/>
    </article>
  )
}
export default User
