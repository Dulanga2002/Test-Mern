import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import axios from "axios";
import { useState, useEffect } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [submited, setSubmited] = useState(false);
    const [isedit, setIsedit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
 

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

    const addUsers = (data) => {
        setSubmited(true);
        const payload = { id:data.id, name:data.name };
        axios.post('http://localhost:3001/api/createuser', payload)
     
        .then( () => {
           getUsers();
           setSubmited(false);
           setIsedit(false);
        })
        .catch( error => {
            console.log("axios error",error);
        });
    }

    const updateUsers = (data) => {
         setSubmited(true);
        const payload = { id:data.id, name:data.name };
        axios.put('http://localhost:3001/api/updateuser', payload)
        .then( () => {
           getUsers();
           setSubmited(false);
           setIsedit(false);

        })
        .catch( error => {
            console.log("axios error",error);
        });
    }

    const deleteUsers = (data) => {
        const payload = { id:data.id };
        axios.delete('http://localhost:3001/api/deleteuser', { data: payload })
        .then( () => {
           getUsers();

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
        <UserForm
            addUser={addUsers}
            updateUsers={updateUsers}
            submited={submited}
            data={selectedUser}
            isedit={isedit}



        />
        <UsersTable

             rows={users}
             selectedUser = {data => {
                setSelectedUser(data);
                setIsedit(true);
             }}
             deleteUsers = {data =>window.confirm("Are you sure to delete this user?") && deleteUsers(data)}
        
        />
    </Box>
        
);
}

export default Users;