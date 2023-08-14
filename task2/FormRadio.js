import React, { useState } from "react";
import {
  TextField,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import "./style.css";

function FormRadio() {
  const [formData, setFormData] = useState({
    contact: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Contact Method: ${formData.contact}, Email: ${formData.email}, Phone: ${formData.phone}`
    );
  };

  return (
    <Box className="container" sx={{ "&:hover": { boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" } }}>
      
      <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom textAlign="center" >
        Radio Form
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset" margin="normal">
              <RadioGroup row name="contact" value={formData.contact} onChange={handleChange}>
                <FormControlLabel value="email" control={<Radio />} label="Email" />
                <FormControlLabel value="phone" control={<Radio />} label="Phone" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {formData.contact === "email" && (
            <Grid item xs={6}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
          )}
          {formData.contact === "phone" && (
            <Grid item xs={6}>
              <TextField
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
          )}
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default FormRadio;
