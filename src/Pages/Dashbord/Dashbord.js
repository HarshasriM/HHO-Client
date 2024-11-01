import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/Context';
import AcctDashbord from '../../components/Dashbord/Accountant/AcctDashbord';
import AdminDashbord from '../../components/Dashbord/Admin/AdminDashbord';
import CoreDashbord from '../../components/Dashbord/Core/CoreDashbord';


function Dashbord() {
  const navigate = useNavigate();
  const{role} = useContext(AppContext);
  console.log(role);
  console.log(role);
  return (
    <>
      {role=='admin' && <AdminDashbord />}
      {role=='core' && <CoreDashbord />}
      {role=='accountant' && <AcctDashbord />}
    </>
  )
}

export default Dashbord
