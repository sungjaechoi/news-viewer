import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewList";

const NewPage = () => {
  const params = useParams()
  const category = params.category || 'all'

  return(
    <>
      <Categories/>
      <NewsList category={category}/>
    </>
  )
}

export default NewPage