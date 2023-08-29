import { Col, Row,Container,ListGroup,ListGroupItem } from "react-bootstrap";
import logo from './icons_assets/Logo .svg'

function Footer(props){
    return(<>
    <footer  className='overflow' >
        <div className='d-flex margins justify-content-between mt-5 'fixed="bottom">
            <Col className="col-4 d-flex  justify-content-start align-items-center ">
              
       
                    <img src={logo}  alt='little lemon logo' className="footerIMG" ></img>
                 
               
            </Col>
            <Col className="col-3 p-2 footer">
            <ListGroup variant="flush">
      <ListGroup.Item   className=' listItem text-muted'>Home</ListGroup.Item>
      <ListGroup.Item className=' listItem  text-muted'>About</ListGroup.Item>
      <ListGroup.Item  className=' listItem  text-muted'>Menu</ListGroup.Item>
      <ListGroup.Item  onClick={()=>props.setShowModel()}   className=' listItem text-muted'> Reservations</ListGroup.Item>
      <ListGroup.Item  className=' listItem text-muted'>Order Online</ListGroup.Item>
      <ListGroup.Item  className=' listItem text-muted'>Login</ListGroup.Item>

    </ListGroup>
            </Col>
           
            <Col className="col-2 p-2 footer">
            <ListGroup variant="flush">
      <ListGroup.Item  className=' listItem text-muted'>Address</ListGroup.Item>
      <ListGroup.Item  className=' listItem text-muted'>Phone Number</ListGroup.Item>
      <ListGroup.Item  className=' listItem text-muted'>Email</ListGroup.Item>
    

    </ListGroup>
            </Col>
            <Col className="col-2 p-2 footer">
            <ListGroup variant="flush">
      <ListGroup.Item className='listItem text-muted'>Facebook</ListGroup.Item>
      <ListGroup.Item className='listItem text-muted'>Instagram </ListGroup.Item>
      <ListGroup.Item className=' listItem text-muted'>Gmail</ListGroup.Item>
    

    </ListGroup>
            </Col>
        </div>
    </footer>
    </>)
}

export default Footer;