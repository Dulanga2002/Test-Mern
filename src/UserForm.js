import { Grid, Typography, Input, Button } from "@mui/material";

const UserForm = (props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffffff",
        marginbottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "#000000" }}>
          UserForm
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex"}}>
        <Typography 
            component={'label'}
            htmlFor="id" 
            sx={{ color: "#000000", 
                  marginRight: "20px",
                  fontzize: "40px",
                  width: "100px",
                  display: "block" 
                }}>
            ID:
        </Typography>
        <Input 
            type="number"
            id="id"
            name="id"
            sx={{ width: "400px" }}
            value={''}
            onAbort={ e => {}}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex"}}>
        <Typography 
            component={'label'}
            htmlFor="id" 
            sx={{ color: "#000000", 
                  marginRight: "20px",
                  fontzize: "20px",
                  width: "100px",
                  display: "block" 
                }}>
            Name:
        </Typography>
        <Input 
            type="text"
            id="name"
            name="name"
            sx={{ width: "400px" }}
            value={''}
            onAbort={ e => {}}
        />
      </Grid>
      <Button 
        sx={{
            margin:'auto',
            marginbottom: "20px",
            backgroundColor: "#00c6e6",
            color: "#000000",
            marginleft:'15px',
            marginTop:'20px',
            '&:hover': { 
                        opacity:'0.7',
                        backgroundColor: "#00c6e6" 

                    }
        }}
      >Submit</Button>
    </Grid>
  );
};
export default UserForm;
