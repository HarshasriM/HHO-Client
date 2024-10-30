import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Event from './Pages/Event/Event';
import Transactions from './Pages/Transaction/TransactionPage';
import About from './Pages/About/AboutPage';
import Services from './Pages/Ourservices/OurservicesPage';
import Login from './Pages/Login/LoginPage';
import Footer from './components/footer';
import Dashbord from './Pages/Dashboard/DashboardPage';
import { useContext } from 'react';
import { AppContext } from './context/Context';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ProfileContainer from './Pages/Profile/ProfilePage';
import Chaitra from './components/Event/Chaitra';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function App() {
  const{handleClose,open,alertMsg,setAlertMsg} = useContext(AppContext);
  return (
    <>
      <Navbar />
      {
        <Snackbar
        open={open}
        autoHideDuration={3000} // Auto close after 3 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Position at the top-right corner
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {alertMsg}
        </Alert>
      </Snackbar>
      }
      <Routes>
        <Route  path='/' element={<Home />}/>
        
        <Route path='/events' element={<Event />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashbord />} />
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path='/chaitra' element={<Chaitra />} ></Route>
      </Routes>
    <Footer />

    </>
  );
}

export default App;
