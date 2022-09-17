import './header.css';
import { BsFacebook, BsPlusCircle, BsBellFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { BiSearchAlt2,BiMenu,BiMessageAltDetail } from "react-icons/bi";

export default function Header() {
  return (
    
      <div className='header'>

        <div className='headerLeft'>
          <div className='logo'>
            <BsFacebook />
          </div>
          <div className='search'>
            <BiSearchAlt2/>
          </div>
          <div className='menu'>
            <BiMenu/>
          </div>
        </div>
        <div className='headerRight'>
          <div className='plus'>
            <BsPlusCircle/>
          </div>
          <div className='msg'>
            <BiMessageAltDetail/>
          </div>
          <div className='bell'>
            <BsBellFill/>
          </div>
          <div className='arrow'>
            <BsFillArrowDownCircleFill/>
          </div>

        </div>
        
      </div>
  
  );
}


