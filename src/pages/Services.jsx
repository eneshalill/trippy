import { Link, Outlet } from "react-router-dom"

const Services = () => {
  return (
    <div> 
      <Link to="/service/2/enes"> الخدمة الثانية </Link>
      <Link to="/service/1/halil">   الخدمة الاولى </Link>
      <Outlet/>
    </div>
  )
}

export default Services