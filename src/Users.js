import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import axios from "axios";
import { useState, useEffect } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get('http://localhost:3001/api/users')
        .then( response => {
           setUsers(response?.data?.response);
        })
        .catch( error => {
            console.log("axios error",error);
        });

    }
return (
    <Box 
        sx={{
            width: 'calc(100% - 100px)',
            margin:'auto', 
        }}
    >
        <UserForm/>
        <UsersTable rows={users}/>
    </Box>
        
);
}

export default Users;