import React, { useEffect } from "react";
import { auth, provider, signInWithRedirect, getRedirectResult } from "../FirebaseConfig";
import { Button, Typography, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Checking if user exists in Redux:", user); //  Debugging

    if (user) {
      console.log("User already exists, navigating to Dashboard");
      navigate("/"); // Redirect to Dashboard if already logged in
    } else {
      getRedirectResult(auth)
        .then((result) => {
          if (result?.user) {
            console.log("Redirect Login Successful, User:", result.user); //  Debugging
            dispatch(login(result.user)); // Store user in Redux
            navigate("/");
          } else {
            console.log("No user found in redirect result."); // Debugging
          }
        })
        .catch((error) => {
          console.error("Error during redirect sign-in:", error);
        });
    }
  }, [user, navigate, dispatch]);

  const handleSignIn = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h5">Google Authentication</Typography>
      <Button variant="contained" color="primary" onClick={handleSignIn} style={{ marginTop: "10px" }}>
        Sign In with Google
      </Button>
    </Container>
  );
};

export default Login;


