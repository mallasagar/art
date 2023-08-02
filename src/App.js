import './App.css';
import { BrowserRouter,Route,Routes , Navigate, useNavigate} from 'react-router-dom';
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
import { useEffect } from 'react';
import Myregister from './features/auth/register';



function Logout(){
  localStorage.clear();
  let navigate =useNavigate();
  useEffect(()=>{
    navigate('/login');
  })
  return(
    <>
    </>
  )
}


function Privaterouting({component: Component}){

// const is_logged_in=Boolean(localStorage.getItem('is_logged_in'));

const is_logged_in=JSON.parse(
  localStorage.getItem("is_logged_in")
)

console.log("is logged infrom private routing",is_logged_in)

  return is_logged_in===true?Component:<Navigate to='/login'></Navigate>
}



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


              <Route path='login' element={<Mylogin/>}></Route>
              <Route path='register' element={<Myregister/>}></Route>
              
              

              <Route path="/admin"  element={<Privaterouting component={<Admin.AdminLayout/>}></Privaterouting>}>
                      <Route index element ={<Admin.AdminDashboard/>}></Route>
                      <Route path="enquiry" element={<Admin.Adminenquiry/>}></Route>
                      <Route path="service" element={<Admin.Adminservice/>}></Route>
                      <Route path="package" element={<Admin.Adminpackage/>}></Route>
                      <Route path="gallery" element={<Admin.Admingallery/>}></Route>
                      <Route path="review" element={<Admin.Adminreview/>}></Route>
                      <Route path="other" element={<Admin.Adminother/>}></Route>
              </Route>

              <Route path='/logout' element={<Privaterouting component={<Logout></Logout>}></Privaterouting>}></Route>



              <Route path='*' element={<Myerror></Myerror>}></Route>
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
