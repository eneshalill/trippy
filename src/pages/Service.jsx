import { useParams } from "react-router-dom";

const Service = () => {
  const params = useParams()
  return (
  <div>{params.id}</div>

  )
}

export default Service;
