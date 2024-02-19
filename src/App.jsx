import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <h1 style={{textAlign: "center", marginTop: "40px", marginBottom: "30px"}}>LIST OF ITEMS</h1>
      <div className='card-container'>
        <div className='flex gap-5 justify-between items-center '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dzgplbgdi/image/upload/v1708356851/reactjs%20checkpoint/image1_hzswku.png" className='image'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='flex gap-5 justify-between items-center '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dzgplbgdi/image/upload/v1708356850/reactjs%20checkpoint/image3_wo9zwh.png" className='image' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='flex gap-5 justify-between items-center '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dzgplbgdi/image/upload/v1708356849/reactjs%20checkpoint/image2_gfs4ww.png"className='image' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
