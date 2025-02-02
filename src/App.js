
import logo from './logo.svg'

import { Circles } from "react-loader-spinner";

import './App.css';
import React, {useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Event from './Pages/Event/Event';
import Transactions from './Pages/Transaction/TransactionPage';
import About from './Pages/About/AboutPage';
import Services from './Pages/Ourservices/OurservicesPage';
import Login from './Pages/Login/LoginPage';
import Footer from './components/footer';
import Dashbord from './Pages/Dashbord/Dashbord';
import { useContext } from 'react';
import { AppContext } from './context/Context';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ProfileContainer from './Pages/Profile/ProfilePage';
import Chaitra from './components/Event/Chaitra';
import NewTransaction from './components/Dashbord/Accountant/NewTransaction';
import PastTransactions from './components/Dashbord/Accountant/PastTransactions';
import NewTestimonial from './components/Dashbord/Admin/Testimonials/NewTestimonial';
import AllTestimonials from './components/Dashbord/Admin/Testimonials/AllTestimonials';
import NewActivity from './components/Dashbord/Admin/Activities/NewActivity';
import AllActivities from './components/Dashbord/Admin/Activities/AllActivities';
import AllUsers from './components/Dashbord/Admin/Users/AllUsers';
import { PrivateRoute } from './components/PrivateRoute';
// import EventAddLayout from './components/Dashbord/Core/EventAddLayout';
import NewEventDisplay from './components/Dashbord/core/NewEventDisplay';
import AllEventsDisplay from './components/Dashbord/core/AllEventsDisplay';
import PrivateRole from './components/PrivateRole';
import EventDescription from './components/Dashbord/core/EventDetails';
import { Switch } from '@mui/material';
import EventDetails from './components/Dashbord/core/EventDetails';
import NewDonation from './components/Dashbord/Accountant/NewDonation';
import AllDonations from './components/Dashbord/Accountant/AllDonations';
import DetailedEvent from './components/Event/DetailedEvent';
import NewUser from "./components/Dashbord/Admin/Users/NewUser";
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function App() {
  const{handleClose,open,alertMsg,errorOcc} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);
  useEffect(() => {
    // Detect slow network using `navigator.connection`
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      const { effectiveType } = connection; // e.g., "4g", "3g", "2g", "slow-2g"
      if (["2g", "slow-2g"].includes(effectiveType)) {
        const networking = setTimeout(()=>setIsSlowNetwork(true),1000);
        return () => clearTimeout(networking);
      }
    }
  },[])
  
  useEffect(() => {
    // Simulate slow loading (e.g., data fetching or large asset loading)
    const loadingTimeout = setTimeout(() => setIsLoading(false), 3000); // Show loader for 3 seconds

    return () => clearTimeout(loadingTimeout);
  }, []);
  if (isLoading || isSlowNetwork) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Circles
          height="80"
          width="80"
          color="#fa9a34"
          ariaLabel="loading"
        />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      {
        
        <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        // anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      >
        {
          errorOcc?<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {alertMsg}
        </Alert>:
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {alertMsg}
        </Alert>
        }
      </Snackbar>
      
    }
      <Routes>
        <Route  path='/' element={<Home />}/>
        
        <Route path='/events' element={<Event />} />
        <Route path="/events/:eventId" element={<DetailedEvent />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashbord /></PrivateRoute>}>
  {/* Accountant-Specific Routes */}
  <Route 
    path="new-transaction" 
    element={<PrivateRole><NewTransaction /></PrivateRole>} 
  />
  <Route 
    path="past-transactions" 
    element={<PrivateRole><PastTransactions /></PrivateRole>} 
  />
  <Route 
    path='new-donation'
    element={<PrivateRole><NewDonation /></PrivateRole>}
    />

  <Route 
    path='all-donations'
    element={<PrivateRole><AllDonations /></PrivateRole>}
    />

  {/* Admin-Specific Routes */}
  <Route 
    path="new-testimonial" 
    element={<PrivateRole><NewTestimonial /></PrivateRole>} 
  />
  <Route 
    path="all-testimonials" 
    element={<PrivateRole><AllTestimonials /></PrivateRole>} 
  />
  <Route 
    path="new-activity" 
    element={<PrivateRole><NewActivity /></PrivateRole>} 
  />
  <Route 
    path="all-activities" 
    element={<PrivateRole><AllActivities /></PrivateRole>} 
  />
  <Route 
    path="users" 
    element={<PrivateRole><AllUsers /></PrivateRole>} 
  />
  <Route 
    path="users/new" 
    element={<PrivateRole><NewUser /></PrivateRole>} 
  />

  {/* Core-Specific Routes */}
  <Route 
      path="events" 
      element={<PrivateRole><AllEventsDisplay /></PrivateRole>} 
    />
  <Route path="/dashboard/events/:eventId" element={<EventDetails/>} />
  
  <Route 
    path="new-event" 
    element={<PrivateRole><NewEventDisplay /></PrivateRole>} 
  />
  
</Route>
        <Route path='/profile' element={<PrivateRoute><ProfileContainer /></PrivateRoute>} />
        {/* <Route path='/profile' element={<ProfileContainer />} /> */}
        {/* <Route path='/chaitra' element={<Chaitra />} ></Route> */}
        <Route path='*' element={<Home />} />
      </Routes>
    <Footer />

    </>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Navbar from './components/Navbar';
// import {Routes,Route} from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import Event from './Pages/Event/Event';
// import Transactions from './Pages/Transaction/TransactionPage';
// import About from './Pages/About/AboutPage';
// import Services from './Pages/Ourservices/OurservicesPage';
// import Login from './Pages/Login/LoginPage';
// import Footer from './components/footer';
// import Dashbord from './Pages/Dashbord/Dashbord';
// import { useContext } from 'react';
// import { AppContext } from './context/Context';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import ProfileContainer from './Pages/Profile/ProfilePage';
// import Chaitra from './components/Event/Chaitra';
// import NewTransaction from './components/Dashbord/Accountant/NewTransaction';
// import PastTransactions from './components/Dashbord/Accountant/PastTransactions';
// import NewTestimonial from './components/Dashbord/Admin/Testimonials/NewTestimonial';
// import AllTestimonials from './components/Dashbord/Admin/Testimonials/AllTestimonials';
// import NewActivity from './components/Dashbord/Admin/Activities/NewActivity';
// import AllActivities from './components/Dashbord/Admin/Activities/AllActivities';
// import AllUsers from './components/Dashbord/Admin/Users/AllUsers';
// import { PrivateRoute } from './components/PrivateRoute';
// import NewUser from "./components/Dashbord/Admin/Users/NewUser";
// import EventDetail from './components/Event/Chaitra';
// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
// function App() {
//   const{handleClose,open,alertMsg,errorOcc} = useContext(AppContext);
//   return (
//     <>
//       <Navbar />
//       {
        
//         <Snackbar
//         open={open}
//         autoHideDuration={3000}
//         onClose={handleClose}
//         // anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
//       >
//         {
//           errorOcc?<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
//           {alertMsg}
//         </Alert>:
//         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//           {alertMsg}
//         </Alert>
//         }
//       </Snackbar>
      
//     }
//       <Routes>
//         <Route  path='/' element={<Home />}/>
        
//         <Route path='/events' element={<Event />} />
//         <Route path="/events/:eventName" element={<EventDetail />} />
//         <Route path='/transactions' element={<Transactions />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/services' element={<Services />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/dashboard' element={<PrivateRoute><Dashbord /></PrivateRoute>} >
//         <Route path='new-transaction' element={<NewTransaction />} />
//         <Route path='past-transactions' element={<PastTransactions />} />
//         <Route path='new-testimonial' element={<NewTestimonial />} />
//         <Route path='all-testimonials' element={<AllTestimonials />} />
//         <Route path='new-activity'  element={<NewActivity />} />
//         <Route path='all-activities' element={<AllActivities />} />
//         <Route path='users' element={<AllUsers />} />
//         <Route path='users/new' element={<NewUser />} />
//         </Route>
//         <Route path='/profile' element={<PrivateRoute><ProfileContainer /></PrivateRoute>} />
//         <Route path='/chaitra' element={<Chaitra />} ></Route>
//         <Route path='*' element={<Home />} />
//         <Route path='/dashboard' element={<Dashbord />} />
//         <Route path='/profile' element={<ProfileContainer />} />
        
//       </Routes>
//     <Footer />

//     </>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import React, { useContext } from 'react';
// import Navbar from './components/Navbar';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import Event from './Pages/Event/Event';
// import Transactions from './Pages/Transaction/TransactionPage';
// import About from './Pages/About/AboutPage';
// import Services from './Pages/Ourservices/OurservicesPage';
// import Login from './Pages/Login/LoginPage';
// import Footer from './components/footer';
// import Dashbord from './Pages/Dashbord/Dashbord';
// import ProfileContainer from './Pages/Profile/ProfilePage';
// import Chaitra from './components/Event/Chaitra';
// import NewTransaction from './components/Dashbord/Accountant/NewTransaction';
// import PastTransactions from './components/Dashbord/Accountant/PastTransactions';
// import NewTestimonial from './components/Dashbord/Admin/Testimonials/NewTestimonial';
// import AllTestimonials from './components/Dashbord/Admin/Testimonials/AllTestimonials';
// import NewActivity from './components/Dashbord/Admin/Activities/NewActivity';
// import AllActivities from './components/Dashbord/Admin/Activities/AllActivities';
// import AllUsers from './components/Dashbord/Admin/Users/AllUsers';
// import { PrivateRoute } from './components/PrivateRoute';
// import NewUser from "./components/Dashbord/Admin/Users/NewUser";
// import EventDetail from './components/Event/Chaitra';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import { AppContext } from './context/Context';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// function App() {
//   const { handleClose, open, alertMsg, errorOcc } = useContext(AppContext);

//   return (
//     <>
//       <Navbar />
      
//       <Snackbar
//         open={open}
//         autoHideDuration={3000}
//         onClose={handleClose}
//       >
//         {errorOcc ? (
//           <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
//             {alertMsg}
//           </Alert>
//         ) : (
//           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//             {alertMsg}
//           </Alert>
//         )}
//       </Snackbar>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/events" element={<Event />} />
//         <Route path="/events/:eventName" element={<EventDetail />} />
//         <Route path="/transactions" element={<Transactions />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<PrivateRoute><Dashbord /></PrivateRoute>}>
//           <Route path="new-transaction" element={<NewTransaction />} />
//           <Route path="past-transactions" element={<PastTransactions />} />
//           <Route path="new-testimonial" element={<NewTestimonial />} />
//           <Route path="all-testimonials" element={<AllTestimonials />} />
//           <Route path="new-activity" element={<NewActivity />} />
//           <Route path="all-activities" element={<AllActivities />} />
//           <Route path="users" element={<AllUsers />} />
//           <Route path="users/new" element={<NewUser />} />
//         </Route>
//         <Route path="/profile" element={<PrivateRoute><ProfileContainer /></PrivateRoute>} />
//         <Route path="*" element={<Home />} />
//       </Routes>
      
//       <Footer />
//     </>
//   );
// }

// export default App;
