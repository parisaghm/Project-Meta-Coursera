import logo from './icons_assets/Logo .svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useScreen } from "./providers/screenSize";
import { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import * as Icon from 'react-bootstrap-icons';
function Navigation(props){
    const { isSmallScreen} = useScreen();
    const [dropdown, setdropdow]=useState(false)
    const [isnavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isnavVisible);
        console.log(isnavVisible)
      };

      const showDropDown=() =>{
        setdropdow(!dropdown);
        console.log(dropdown)
      }
    return (<>

    <Navbar  className=' margin d-flex  justify-content-between overflow'>
      <img src={logo} alt='little lemon logo' className='lemonLogo' ></img>
      <div className=' 'fixed="top">


      <Nav className="smallNav">
      
            <Nav.Link   className='navLink'  >Home</Nav.Link>
            <Nav.Link className='navLink' >About</Nav.Link>
            <Nav.Link className='navLink'  >Menu</Nav.Link>
            <Nav.Link className='navLink' data-testid='reservationNav' onClick={()=>props.setShowModel()} >Reservations</Nav.Link>
            <Nav.Link className='navLink' >Order</Nav.Link>
            <Nav.Link className='navLink' >Login</Nav.Link>
        </Nav>
      

        </div>

        <DropdownButton  onToggle={toggleNav} className={  isSmallScreen? "  sideMenu dropdown-menu-right ":"d-none"} 
        title={<Icon.List ></Icon.List>} variant='Secondary'   size="lg">
        
        <Dropdown.Item   >Home</Dropdown.Item>
        <Dropdown.Item  >About</Dropdown.Item>
        <Dropdown.Item >Menu</Dropdown.Item>
        <Dropdown.Item   onClick={()=>props.setShowModel()}  >Reservations</Dropdown.Item>
        <Dropdown.Item >Order Online</Dropdown.Item>
        <Dropdown.Item  >Login</Dropdown.Item>

    </DropdownButton>
        {/* <button onClick={toggleNav} >
      <Icon.List></Icon.List>
      </button> */}

    </Navbar>
 


    </>
)

}
export default Navigation;