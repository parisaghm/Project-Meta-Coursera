import deliveryIcon from './icons_assets/basket .svg'
import Card from 'react-bootstrap/Card';

function Dishes(props){
    const dishesArray=props.dishesArray



return(
    <div className='cards'key='cards' >
    {dishesArray.map((src,index)=>{
      return (
        <Card className=' card m-2 ' key={index}>
        <Card.Img variant="top" className="cardImg" src={src.image} />
        <Card.Body  style={{backgroundColor:"#EDEFEE"}} >
          <Card.Title  > 
            <div className="d-flex ">
            <p className="cardTitle">{src.title}</p>
            <p className="cardPrice">{src.price}</p>

          </div></Card.Title>
          <Card.Text className="cardText">
          {src.txt}
          </Card.Text>
          <Card.Text className="cardText fw-bold ">
            Order a delivery <img src={deliveryIcon} width='10%' style={{ marginLeft: '5%' }}></img>
          </Card.Text>
        </Card.Body>
      </Card>
      )
    }

    )}
      


  
  

  </div>
)

}

export default Dishes