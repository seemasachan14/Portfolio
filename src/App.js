import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';

function App() {


  // to render the popver of sidebar items

  
  useEffect(()=>{
    window.scroll(0,0);
  },[])


  return (
    <div className="App">
      
      <Navbar/>
      
      <Homepage />

    
    



      
    </div>
  );
}

export default App;
