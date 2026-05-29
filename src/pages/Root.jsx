import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import NavBar from "../components/NavBar/NavBar";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Outlet } from "react-router-dom";

const Root = () => {
    const items = [
      {
        icon: <FaHouseUser />,
        content: "Home",
        url:"/",
      },
      {
        icon: <BsFillInfoCircleFill />,
        content: "about",
        url:"/about",
  
      },
      {
        icon: <MdHomeRepairService />,
        content: "service",
        url:"/service",
  
      },
      {
        icon: <RiContactsBook3Fill />,
        content: "contact",
              url:"/contact",
  
      },
    ];
  return (
    <div>
        <NavBar logo="Trippy" items={items} btn="sign up" />
        <Outlet/>
  </div>)
  
}

export default Root