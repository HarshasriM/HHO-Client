import React from 'react';
import AdminDashboard from './Admin/adminDashboard'
function DashboardPage(props) {
    return (
        <div style={{zIndex:20,height:"auto",width:"100vwv",minHeight:"100vh"}}>
      <AdminDashboard/>
    </div>
    );
}

export default DashboardPage;