import React, { useState, useEffect } from "react";
import { TextField, Container, Typography, Button, Paper } from "@mui/material";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const generateUserId = () => `user-${nanoid(10)}`;

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    userId: generateUserId(),
  });

  const [isFormEdited, setFormEdited] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

    const handleBeforeUnload = (event) => {
      if (isFormEdited) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isFormEdited]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormEdited(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setFormEdited(false);
    alert("User Data Saved Successfully!");
  };

  const handleClearData = () => {
    localStorage.removeItem("userData");
    setFormData({ name: "", address: "", email: "", phone: "", userId: generateUserId() });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h5" align="center" gutterBottom>
        User Data Form
      </Typography>
      
      <motion.div 
        style={{ display: "flex", gap: "20px" }} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {/* Left Side: Display User Data */}
        <Paper elevation={3} style={{ flex: 1, padding: 20 }}>
          <Typography variant="h6" gutterBottom>User Info</Typography>
          <Typography><strong>Name:</strong> {formData.name || "N/A"}</Typography>
          <Typography><strong>Address:</strong> {formData.address || "N/A"}</Typography>
          <Typography><strong>Email:</strong> {formData.email || "N/A"}</Typography>
          <Typography><strong>Phone:</strong> {formData.phone || "N/A"}</Typography>
          <Typography variant="subtitle2" style={{ marginTop: 10 }}>User ID: {formData.userId}</Typography>

          <Button 
            variant="contained" 
            color="secondary" 
            fullWidth 
            style={{ marginTop: 15 }} 
            onClick={handleClearData}
          >
            Clear Data
          </Button>
        </Paper>

        {/* Right Side: Form */}
        <Paper elevation={3} style={{ flex: 1, padding: 20 }}>
          <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" fullWidth margin="normal" value={formData.name} onChange={handleChange} required />
            <TextField label="Address" name="address" fullWidth margin="normal" value={formData.address} onChange={handleChange} required />
            <TextField label="Email" name="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} required />
            <TextField label="Phone" name="phone" fullWidth margin="normal" value={formData.phone} onChange={handleChange} required />
            
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
              Save Data
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default UserForm;
