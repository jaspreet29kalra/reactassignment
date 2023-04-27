import React from "react";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function StudentLogin() {
  const navigate= useNavigate();
 const gostud=()=>{
  navigate('/Student');
 }
  
  const avatarStyle={backgroundColor:"rgb(41, 246, 174)"}
  const btnstyle={margin:'10px 0'}
  return (
<>
    <h1 className="logheading">Student Login</h1>
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align='center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <h2>Log in </h2>
        </Grid>
        <TextField label="username"  variant="standard" placeholder="Enter username" fullWidth required> </TextField>
        <TextField label="password"  variant="standard" placeholder="Enter password"type="password" fullWidth required> </TextField>
        <FormControlLabel control={<Checkbox  name="checked" color="primary"/>}label="Remember me" />
        <Button type="submit" onClick={gostud} color="primary" variant="contained" style={btnstyle} fullWidth>Log in</Button>
        <Typography>
        <Link href="#">Forgot password</Link>
        </Typography>
        <Typography>Do you have an account ?
        <Link href="#">Sign up </Link>
        </Typography>
        
      </Paper>
    </Grid>
        
</>
  );
}

export default StudentLogin;
