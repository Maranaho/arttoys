import { useParams } from "react-router-dom"
const Detail = ()=>{
  const { toyID } = useParams()
  return(
    <main className="Detail">
      <p>Detail</p>
      <p>{toyID}</p>
    </main>
  )
}
export default Detail
