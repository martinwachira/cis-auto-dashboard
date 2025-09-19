import "../App.css";

import { Alert, LinearProgress } from "@mui/material";
import {
  Button,
  CardContent,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import CreateSubsService from "../CreateSubsService.js";
import ErrorIcon from "@mui/icons-material/Error";

const secondaryColor = "#FFFFFF";

const SafaricomForm = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    startRange: "",
    endRange: "",
    offeringId: "",
    BillCycleType: "01",
    endPoint: "",
  });
  const [loading, setLoading] = useState(false);
  const [succMessage, setSuccMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [showProgress, setShowProgress] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccMessage("");
    setLoading(true); //start loading
    CreateSubsService.create(
      formData.login,
      formData.password,
      formData.startRange,
      formData.endRange,
      formData.offeringId,
      formData.BillCycleType,
      formData.endPoint
    ).then(
      (response) => {
        setSuccMessage(response.data.succMessage);
        setLoading(false); //stop on promise resolve
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.errMessage) ||
          error.errMessage ||
          error.toString();

        setErrMessage(resMessage);
        setLoading(false); //stop on promise reject
      }
    );
  };

  useEffect(() => {
    if (succMessage || errMessage) {
      const timer = setTimeout(() => {
        setSuccMessage("");
        setErrMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [succMessage, errMessage]);
  useEffect(() => {
    if (succMessage || errMessage) {
      setShowProgress(true);
      const timer = setTimeout(() => {
        setSuccMessage("");
        setErrMessage("");
        setShowProgress(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [succMessage, errMessage]);
  return (
    <Container>
      <Paper style={{ borderRadius: "3rem" }}>
        <CardContent>
          {succMessage ? (
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              severity="success"
              style={{ borderRadius: "3rem" }}
            >
              {succMessage}
              {showProgress && <LinearProgress color="success" />}
            </Alert>
          ) : (
            ""
          )}
          {errMessage ? (
            <Alert
              icon={<ErrorIcon color="error" />}
              severity="error"
              style={{ borderRadius: "3rem" }}
            >
              {errMessage}
              {showProgress && <LinearProgress color="error" />}
            </Alert>
          ) : (
            ""
          )}

          <form onSubmit={handleSubmit} className="form-content">
            <Typography variant="h5" style={{ color: "#3cb553" }}>
              <strong>DASHBOARD TO CREATE CIRCUIT IDS</strong> <br />
              <span style={{ color: "grey", fontSize: "small" }}>
                use your encrypted credentials (password)
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

            <div className="ranges">
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
              &nbsp;&nbsp;
              <FormControl fullWidth margin="normal">
                <TextField
                  id="BillCycleType"
                  name="BillCycleType"
                  label="Bill Cycle Type (picks 01 by default)"
                  value={formData.BillCycleType}
                  onChange={handleChange}
                  style={{ backgroundColor: secondaryColor }}
                  variant="standard"
                />
              </FormControl>
            </div>

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
            {/* {message} */}
            <Button
              type="submit"
              variant="contained"
              style={{
                marginTop: 20,
                backgroundColor: "#ee454a",
                borderRadius: "1rem",
              }}
            >
              {loading ? (
                <CircularProgress color="success" />
              ) : (
                "Create the CIs"
              )}
            </Button>
          </form>
        </CardContent>
      </Paper>
    </Container>
  );
};

export default SafaricomForm;
