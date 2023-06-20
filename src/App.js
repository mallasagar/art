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
import Myservice from './pages/service/service.component';
import {Admin} from './admin/index';



function App() {
  return (
  

<BrowserRouter>
        <Routes>
          <Route path="/" element ={<Mysharedcomponent/>}>
              <Route index element ={<Myhome></Myhome>}></Route>
              <Route path="/gallery" element={<Mygallery/>}></Route>
              <Route path="/packages" element={<Mypackage/>}></Route>
              <Route path="/services" element={<Myservice/>}></Route>
              <Route path="/about" element={<Myabout/>}></Route>
              <Route path="/contact" element={<Mycontact/>}></Route>
          </Route>
              
              <Route path='/login' element={<Mylogin/>}></Route>

              <Route path="/admin" element ={<Admin.AdminLayout/>}>
                  <Route index element ={<Admin.Admin_Dashboard/>}></Route>
                  <Route path="enquiry" element={<Admin.Admin_enquiry/>}></Route>
                  <Route path="service" element={<Admin.Admin_service/>}></Route>
                  <Route path="package" element={<Admin.Admin_package/>}></Route>
                  <Route path="gallery" element={<Admin.Admin_gallery/>}></Route>
                  <Route path="review" element={<Admin.Admin_review/>}></Route>
                  <Route path="other" element={<Admin.Admin_other/>}></Route>
              </Route>





              <Route path='*' element={<Myerror></Myerror>}></Route>
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
