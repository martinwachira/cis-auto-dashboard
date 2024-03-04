import "../App.css";

import {
  Button,
  CardContent,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import CreateSubsService from "../CreateSubsService.js";

const secondaryColor = "#FFFFFF";

const SafaricomForm = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    startRange: "",
    endRange: "",
    offeringId: "",
    endPoint: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    CreateSubsService.create(
      formData.login,
      formData.password,
      formData.startRange,
      formData.endRange,
      formData.offeringId,
      formData.endPoint
    ).then(
      (response) => {
        setMessage(response.data.message);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
    // console.log("Form submitted:", formData);
  };

  return (
    <Container>
      <Paper style={{ borderRadius: "3rem" }}>
        <CardContent>
          <form onSubmit={handleSubmit} className="form-content">
            <Typography variant="h5" style={{ color: "#3cb553" }}>
              <strong>DASHBOARD TO CREATE CIRCUIT IDS</strong> <br />
              <span style={{ color: "grey", fontSize: "small" }}>
                use your encrypted credentials
              </span>
            </Typography>
            <div className="ranges">
              <FormControl fullWidth margin="normal">
                <TextField
                  id="login"
                  name="login"
                  label="Username"
                  value={formData.login}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: secondaryColor }}
                  variant="standard"
                />
              </FormControl>
              &nbsp;&nbsp;
              <FormControl fullWidth margin="normal">
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: secondaryColor }}
                  variant="standard"
                />
              </FormControl>
            </div>
            <div className="ranges">
              <FormControl margin="normal" fullWidth>
                <TextField
                  id="startRange"
                  name="startRange"
                  label="Start Range"
                  value={formData.startRange}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: secondaryColor }}
                  variant="standard"
                />
              </FormControl>
              &nbsp;&nbsp;
              <FormControl margin="normal" fullWidth>
                <TextField
                  id="endRange"
                  name="endRange"
                  label="End Range"
                  value={formData.endRange}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: secondaryColor }}
                  variant="standard"
                />
              </FormControl>
            </div>

            <FormControl fullWidth margin="normal">
              <TextField
                id="offeringId"
                name="offeringId"
                label="Offering ID"
                value={formData.offeringId}
                onChange={handleChange}
                required
                style={{ backgroundColor: secondaryColor }}
                variant="standard"
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <TextField
                id="endPoint"
                name="endPoint"
                label="Endpoint URL"
                value={formData.endPoint}
                onChange={handleChange}
                required
                style={{ backgroundColor: secondaryColor }}
                variant="standard"
              />
            </FormControl>
            <br />
            {message}
            <Button
              type="submit"
              variant="contained"
              style={{
                marginTop: 20,
                backgroundColor: "#ee454a",
                borderRadius: "1rem",
              }}
            >
              Create the CIs
            </Button>
          </form>
        </CardContent>
      </Paper>
    </Container>
  );
};

export default SafaricomForm;
