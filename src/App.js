import './App.css';
import {  Container, Form } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import {Row,Col} from 'reactstrap'
import Header from './component/Header'
import List from './component/List';
import Home from './component/Home';
import AddCourse from './component/AddCourse'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Courses from './component/Courses';



function App() {
 
  return (
    <Container>
    <BrowserRouter> <Header/>
      <Row>
        <Col md={4}><List/></Col>
        <Col md={8}>
          <Routes> <Route path='/' Component={Home} exact></Route>
          <Route path='/add-course' Component={AddCourse} exact></Route>
          <Route path='/view-course' Component={Courses} exact></Route>
          </Routes>
         
        </Col>
      </Row></BrowserRouter>

   
    </Container>
    );
}

export default App;
