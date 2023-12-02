
import './App.css';
import {Nav,Navbar,NavDropdown,Container,Row,Col,Image,Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>


      <main>
      <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
        <Image src="https://picsum.photos/id/208/620/400" fluid rounded className=''/>
        </Col>

        <Col sm={5}>
          <h1 className='font-weigh-light'>Tagline</h1>
          <p className='mt-4'>
The major difference between NPM and Yarn comes in terms of security performance. While NPM installs packages sequentially, Yarn performs parallel installation resulting in better speed and performance. NPM has tried to fix vulnerabilities, but still, Yarn is considered more secure than NPM. Yarn also comes with advanced features like PlugPlay and Zero-Install. 

</p>
<Button>this Button</Button>
        </Col>
      </Row>
      <Row>
      <Card className='text-center bg-secondary text-white my-5 py-4'>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
      </Row>

      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/201/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/203/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/206/320/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

      </Row>
    </Container>
      </main>

      <footer className='py-5 my-5 bg-dark'>
        <Container className='px-4'>
          <p className="text-center text-white">  copyright &copy : Your website 2021</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
