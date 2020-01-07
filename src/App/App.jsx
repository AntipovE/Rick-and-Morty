import React from "react";
import TopBar from "../topBar/topBar";
import Routes from "../rout";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./app.scss";

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <Container maxWidth="xl" className={classes.main}>
        <TopBar />
        <Routes />
      </Container>
    </Router>
  );
};

export default App;
