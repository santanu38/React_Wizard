import React from "react";
import { Button, Typography, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/authSlice";
import { signOut } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    dispatch(logout()); // Clear user from Redux
    navigate("/login");
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "20px" }}>
      {user ? (
        <>
          <Typography variant="h4">Welcome, {user.displayName}</Typography>
          <img src={user.photoURL} alt="Profile" style={{ borderRadius: "50%", width: "100px", marginTop: "10px" }} />
          <Button variant="contained" color="secondary" onClick={handleSignOut} style={{ marginTop: "10px" }}>
            Sign Out
          </Button>
        </>
      ) : (
        <Typography variant="h5">No user logged in.</Typography>
      )}
    </Container>
  );
};

export default Dashboard;

