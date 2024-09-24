import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Button } from 'reactstrap';
import Home from './component/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from './component/Course';
import Courses from './component/Courses';
import AddCourse from './component/AddCourse';
import { Fragment } from 'react';


function App() {
  const notify = () => toast("Wow so easy!");
 
  return (
    <Fragment>
    
    <Home/>
    <Courses/>
    <AddCourse/>
    </Fragment>

    );
}

export default App;
