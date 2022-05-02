import Navbar from "./routes/Navbar";
import Homepage from "./routes/Homepage";
import Checkout from "./routes/Checkout";

import {Routes, Route} from 'react-router-dom';
import Menu from "./routes/Menu";
import pizzas from '../src/data';

function App() {
    
  return (
           
   <Routes>
     <Route path='/' element={<Navbar />}>
     <Route index element={<Homepage /> }/>
     <Route path='/menu' element={<Menu pizzas={pizzas} /> }/>
     <Route path='/checkout' element={<Checkout />} />
     </Route>
     
     
   </Routes>
   
  );
}

export default App;
