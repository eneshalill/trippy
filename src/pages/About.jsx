import { FaHouseUser } from "react-icons/fa";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";

const About = () => {
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
      <Header >
        <Hero
          img="/assets/about.png"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          
        />
      </Header></div>
  )
}

export default About