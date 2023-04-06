import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { deleteUsers, loadUsers } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const getData = useSelector((state) => state.users.users);
  
  const handledeleteClick = (id) => {
    dispatch(deleteUsers(id));
  };

  const Navigate = useNavigate()

  return (
    <Container sx={{ paddingBottom: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getData?.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row?.firstname}
                </StyledTableCell>
                <StyledTableCell align="center">{row?.lastname}</StyledTableCell>
                <StyledTableCell align="center">{row?.email}</StyledTableCell>
                <StyledTableCell align="center">{row?.password}</StyledTableCell>
                <StyledTableCell align="center">
                  <ButtonGroup aria-label="outlined primary button group">
                    <Button
                      variant="contained"
                      onClick={() => handledeleteClick(row?.id)}
                      color="error"
                      sx={{ marginRight: "2px" }}
                    >
                      Delete
                    </Button>
                    <Button variant="contained" onClick={()=>Navigate(`edit/${row.id}`)}>Edit</Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
