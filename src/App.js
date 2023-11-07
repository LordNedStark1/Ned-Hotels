import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/components/Home";
import Bookings from "./pages/Bookings/components/bookings";
import Navbar from "./pages/Navbar/components/navbar";
import About from "./pages/About/components/about";
import Contacts from "./pages/Contacts/components/contact";
import Rooms from "./pages/Rooms/components/rooms";
import Footer from './pages/Footer/components/footer';


function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/Bookings'} element={<Bookings/>}/>
        <Route path={'/About'} element={<About/>}/>
        <Route path={'/Rooms'} element={<Rooms/>}/>
        <Route path={'/Contacts'} element={<Contacts/>}/>
      
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
