import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import EditWindow from "./EditWindow.js";
import { AppContext } from '../../../../context/Context.js';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const { token } = useContext(AppContext);
    const [editWindow, setEditWindow] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                };
                
                const response = await axios.get("http://localhost:8000/api/users/offUsers/", { headers });
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, [token]);

    const handleClose = () => {
        setEditWindow(false);
        setSelected(null);
    };

    return (
        <div>
            <h3>All Users</h3>
            {users.map(user => (
                <div 
                    key={user.id} 
                    style={{ border: "1px solid black", marginBottom: "1vw", display: "flex", justifyContent: "space-between", padding: "1vw" }}
                >
                    <h5>{user.name}</h5>
                    <button 
                        className="btn btn-primary" 
                        onClick={() => {
                            setSelected(user);
                            setEditWindow(true);
                        }}
                    >
                        Edit
                    </button>
                </div>
            ))}
            {editWindow && <EditWindow user={selected} onClose={handleClose} />}
        </div>
    );
};

export default AllUsers;
