import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Button } from 'reactstrap';
import Home from './component/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const notify = () => toast("Wow so easy!");
 
  return (
    <div>
    
    <Header name="anish"/>
    <Home/>

    <Button color='warning'  onClick={notify}>Click me pls</Button>
   


    <h2>This is app compnent</h2></div>
  );
}

export default App;
