import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbars from './components/Navbars/Navbar';
import { Route, Routes } from 'react-router-dom/dist';
import Main from './components/Main/Main';
import Singlevideo from './components/Videoplayer/Singlevideo';
function App() {

  return (
    <div className='container-fluid'>
      <Navbars/>
<Routes>
  <Route path='/' element={<Main/>} />
  <Route path='/movie/:id' element={<Singlevideo/>} />
</Routes>
    </div>
  );
}

export default App;   
