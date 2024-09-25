import './App.css';
import {  Container, Form } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import {Row,Col} from 'reactstrap'
import Header from './component/Header'
import List from './component/List';
import Home from './component/Home'



function App() {
 
  return (
    <Container>
    <Header/>
      <Row>
        <Col md={4}><List/></Col>
        <Col md={8}><Home/></Col>
      </Row>
    </Container>
    );
}

export default App;
