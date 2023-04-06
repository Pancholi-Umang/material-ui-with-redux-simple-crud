import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editUsers, updateUsers, loadUsers } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const { idElement } = useParams();
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const [getInput, setgetInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  
  const getEditData = useSelector((state) => state.users.user);
 
  useEffect(()=>{
    dispatch(editUsers(idElement))
  },[])

  useEffect(()=>{
    if(getEditData){
      setgetInput({...getEditData})
    }
  },[getEditData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setgetInput({ ...getInput, [name]: value });
  };
  const { firstname, lastname, email, password } = getInput;

  const updateUserData= (data) => {

    let updateValue = [];
    getEditData?.map((val)=>{
      if(val.id === data.id){
        updateValue.push(data)
      }else{
        updateValue.push(val);
      }
    })
    dispatch(updateUsers(updateValue));
    // navigate("/")
  }

  return (
    <Container sx={{ position: "relative", display: "flex", height: "100vh" }}>
      <Box
        component="form"
        className="WindowForm"
        sx={{ width: { xs: 250, md: 400 } }}
        autoComplete="off"
      >
        {/* {error && <Typography sx={{ color: "red" }}> {error} </Typography>} */}
        <TextField
          sx={{ width: { xs: 200, md: 300 } }}
          id="filled-First-Name"
          label="First Name"
          type="text"
          variant="filled"
          name="firstname"
          value={firstname || ""}
          onChange={handleChange}
        />

        <TextField
          sx={{ width: { xs: 200, md: 300 } }}
          id="filled-Last-Name"
          label="Last Name"
          type="text"
          variant="filled"
          name="lastname"
          onChange={handleChange}
          value={lastname || ""}
        />
        <TextField
          sx={{ width: { xs: 200, md: 300 } }}
          id="filled-Email"
          label="Email"
          type="email"
          variant="filled"
          name="email"
          onChange={handleChange}
          value={email || ""}
        />
        <TextField
          sx={{ width: { xs: 200, md: 300 } }}
          id="filled-Password"
          label="Password"
          type="password"
          variant="filled"
          name="password"
          onChange={handleChange}
          value={password || ""}
        />
        <Button onClick={()=>updateUserData(getInput)} variant="contained">
          Update User
        </Button>
      </Box>
    </Container>
  );
};

export default EditUser;
