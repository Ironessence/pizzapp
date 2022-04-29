import Navbar from "./routes/Navbar";
import {useState} from 'react';
import Homepage from "./routes/Homepage";
import SignIn from "./routes/SignIn";
import Register from "./routes/Register";
import {Routes, Route} from 'react-router-dom';
import Menu from "./routes/Menu";
import pizzas from '../src/data';

function App() {

 
    
  return (
    
       
   <Routes>
     <Route path='/' element={<Navbar />}>
     <Route index element={<Homepage /> }/>
     <Route path='/menu' element={<Menu pizzas={pizzas} /> }/>
     <Route path='/auth' element={<SignIn /> }/>
     <Route path='/register' element={<Register /> }/>
     </Route>
     
   </Routes>
   
  );
}

export default App;
