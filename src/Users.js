import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    { id: 1, name: "Dulanga" },
    { id: 2, name: "Dasun" }, 
];


const Users = () => {
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