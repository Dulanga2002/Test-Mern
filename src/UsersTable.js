import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows, selectedUser, deleteUsers}) => {

return (
<TableContainer component={'paper'}>

    <Table>
        <TableHead sx={{ backgroundColor: "#f8f9fa" }}>
            <TableCell sx={{ fontWeight: "bold", color: "#495057", fontSize: "16px", padding: "16px" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#495057", fontSize: "16px", padding: "16px" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#495057", fontSize: "16px", padding: "16px" }}>Action</TableCell>
        </TableHead>
        <TableBody>
            {
               rows.length > 0 ? rows.map(row => (
                    <TableRow key={'row.id'} sx={{'&:last-child td, &:last-child th' : { border: 0 }}}>
                        <TableCell component='th' scope="row">{row.id}</TableCell>
                        <TableCell component='th' scope="row">{row.name}</TableCell>
                        <TableCell>
                            <Button
                                sx={{ margin: "0px 10px" }}
                                onClick={ ()=> selectedUser({id:row.id,name:row.name})}
                            > Update 
                            </Button>

                            <Button
                                sx={{ margin: "0px 10px" }}
                                onClick={ () => deleteUsers({id:row.id})}
                            > Delete 
                            </Button>
                        </TableCell>
                    </TableRow>
                )) : (
                 
                     <TableRow  sx={{'&:last-child td, &:last-child th' : { border: 0 }}}>
                       <TableCell component='th' scope="row">No data</TableCell>
                     </TableRow>
                )
            }
        </TableBody>
        
    </Table>

</TableContainer>
)
}

export default UsersTable;