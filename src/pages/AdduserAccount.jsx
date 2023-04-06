import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomizedTables from "./CustomizedTables";
import { useDispatch } from "react-redux";
import { addUsers, loadUsers } from "../Redux/action";

function AdduserAccount() { 

  const initialvalue = {
    firstname:"",
    lastname:"",
    email:"",
    password:""
  }

  const dispatch = useDispatch();
  const [input, setinput] = React.useState(initialvalue)
  const [error, setError] = React.useState("");
  const {firstname, lastname, email, password} = input;

  const handleChange = (e) => {
    const {name,value} = e.target;
    setinput({...input, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!firstname || !lastname || !email || !password){
        setError("Please input all input field");
    }else{
      dispatch(addUsers(input));
      setinput(initialvalue);
      dispatch(loadUsers());
      setError("");
    }
  }

  return (
    <div>
      <Container className="App">
      <Typography sx={{ color: "#1de0e0", textAlign:"center", marginBottom:"15px"}} variant="h3"> Add User:- </Typography>
      <Box component="form" onSubmit={handleSubmit} className="WindowForm" sx={{ width: { xs: 250, md: 400 } }} autoComplete="off" >
        {error && <Typography sx={{ color: "red" }}> {error} </Typography>}
        <TextField
          sx={{ width: { xs: 200, md: 300 } }}
          id="filled-First-Name"
          label="First Name"
          type="text"
          variant="filled"
          name="firstname"
          onChange={handleChange}
          value={firstname}
          />
          
        <TextField
          sx={{ width: { xs: 200, md: 300 } }}
          id="filled-Last-Name"
          label="Last Name"
          type="text"
          variant="filled"
          name="lastname"
          onChange={handleChange}
          value={lastname}
          />
        <TextField
          sx={{ width: { xs: 200, md: 300 } }}
          id="filled-Email"
          label="Email"
          type="email"
          variant="filled"
          name="email"
          onChange={handleChange}
          value={email}
          />
        <TextField
          sx={{ width: { xs: 200, md: 300 } }}
          id="filled-Password"
          label="Password"
          type="password"
          variant="filled"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <Button type="submit" variant="contained">Add User</Button>
      </Box>
    </Container>
      <CustomizedTables />
    </div>
  );
}

export default AdduserAccount;
