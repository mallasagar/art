import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Mysharedcomponent from './components/sharedcomponent';
import Myabout from './pages/about/about.component';
import Mygallery from './pages/gallery/gallery.component';
import Myhome from './pages/home/home.component';
import Mypackage from './pages/package/package.component';
import Mycontact from './pages/contact/contact.component';
import Myerror from './components/common/error';
import Mylogin from './features/auth/login';

function App() {
  return (
  

<BrowserRouter>
        <Routes>
          <Route path="/" element ={<Mysharedcomponent/>}>
              <Route index element ={<Myhome></Myhome>}></Route>
              <Route path="/gallery" element={<Mygallery/>}></Route>
              <Route path="/packages" element={<Mypackage/>}></Route>
              <Route path="/about" element={<Myabout/>}></Route>
              <Route path="/contact" element={<Mycontact/>}></Route>
          </Route>
              
              <Route path='/login' element={<Mylogin/>}></Route>
              <Route path='/admin' element={<Myerror></Myerror>}></Route>
              <Route path='*' element={<Myerror></Myerror>}></Route>
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
