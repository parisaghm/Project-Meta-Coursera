import { Container, Row, Col, Button } from "react-bootstrap";
import mainImage from "./icons_assets/restauranfood.jpg"
import greek from "./icons_assets/greek salad.jpg"
import bruchetta from "./icons_assets/bruchetta.svg"
import lemonD from "./icons_assets/lemon dessert.jpg"
import { useScreen } from "./providers/screenSize";
import Dishes from "./dishes";
import BookingForm from "./bookingForm";

function Main(props) {
  const dishesArray=[
    {
      image:greek,
      title:"Greek Salad",
      price:"$12.99",
      txt:"The famous greek salad of crispy lettuce, peppers, olivies and ourChicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
      image:bruchetta,
      title:"Bruchetta",
      price:"$5.99",
      txt:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"
    },
    {
      image:lemonD,
      title:"Lemon Dessert",
      price:"$5.00",
      txt:"This comes straight from grandma's recipe book, every last ingridient has been sourced and is as authentic as can be imagined."
    }
  ]
  const { isSmallScreen} = useScreen();

  return (
    <main className='overflow '>
      <div className=" mainContainer ">
        <div className=" d-flex justify-content-center overflow-visible margin ">
          <Col className={  isSmallScreen? "col-12 center ":'col-12  '}>
            <h1  className="title mt-4 ">Little Lemon</h1>
            <h2  className="subtitle">Chicago</h2>
            <p className="subText " >We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <button className="mb-3 primary rounded button"  onClick={()=>props.setShowModel()} >Reserve a table</button>
          </Col>

          </div>
        
       
          <div className={  isSmallScreen? "imageContainer":'imageContainer'}
          ></div>
        
      </div>
      <div className="margin">
        <div className='weeks  ' >
          <Col className='col-8'>
            <h1 id="weekTitle">This Weeks Specials!</h1>

          </Col>
          <Col className='col-4  '>
            <button className="float-end primary rounded button"  >Online Menu</button>{' '}

          </Col>
        </div>
       <Dishes dishesArray={dishesArray}/>

      
      </div>

    </main>
  )

}

export default Main;