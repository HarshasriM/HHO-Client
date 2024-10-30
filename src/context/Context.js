import React, { createContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
export const AppContext = createContext();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const[open,setOpen] = useState();
  const[user,setUser] = useState({});
  const[alertMsg,setAlertMsg] = useState("");
  const [msgType,setMsgType] = useState("success");
  // const handleLoginSuccess = () => {
  //   setOpen(true); // Open the Snackbar
  // };

  // Function to close the Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    // Close the Snackbar
  };
  return (
    <AppContext.Provider value={{token,setToken,user,setUser,open,setOpen,handleClose,alertMsg,setAlertMsg,setMsgType,msgType}}>
      {children}
    </AppContext.Provider>
  );
};
