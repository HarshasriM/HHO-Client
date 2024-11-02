import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import EditWindow from "./EditWindow.js";
import { AppContext } from '../../../../context/Context.js';
const AllUsers = () => {
    const [users,setUsers] = useState();
    const{token} = useContext(AppContext);
    useEffect(()=>{
       
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          };

        const getUserData = async()=>{
            try {
                await axios.get("http://localhost:8000/api/users/offUsers/",{headers}).then(res=>{
                    setUsers(res.data);
                    console.log(res.data);
                }).catch((err)=>{
                    console.log(err.message);
                })
            } catch (error) {
                console.log(error);
            }
        }
        getUserData();
    },[])
    const [editWindow,setEditWindow] = useState(false);
    const [selected,setSelected] = useState();
    const handleClose = ()=>{
        setEditWindow(false);
        setSelected(null);
    }
  return (
    <div>
        All Users
        {
            users && users.map(user=>{
                return <div style={{border:"1px solid black",marginBottom:"1vw",display:"flex",justifyContent:"space-between",padding:"1vw"}}>
                    <h5>{user.name}</h5>
                    <button className='btn btn-primary' onClick={()=>{
                        setSelected(user);
                        setEditWindow(true);
                    }}>Edit</button>
                </div>
            })
        }
        {
            editWindow && <EditWindow user={selected} onClose={handleClose}/>
        }
    </div>
  )
}

export default AllUsers
