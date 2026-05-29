import { NavLink, useNavigate } from "react-router-dom";
import "./navBar.css";

const NavBar = ({ logo, items, btn }) => {
  const navigate = useNavigate()
const changeUrl = () =>{
navigate("/auth")
}
  return (
    <nav>
      <h1>{logo}</h1>
      <div>
        <ul>
          {items?.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item?.url}
                className={({ isActive})=> 
                  isActive ? "active" : " "
                }  >
                  {item?.icon}
                  {item?.content}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button onClick={()=>changeUrl()}>{btn}</button>
        {/* <button onClick={changeUrl}>{btn}</button>     كلا الشكلين جائز في ريلكت فق */}
      </div>
    </nav>
  );
};

export default NavBar;
