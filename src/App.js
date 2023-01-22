import React, { Component, Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddScenario from "./components/AddScenario";
import AddVehicle from "./components/AddVehicle";
import AllScenario from "./components/AllScenario";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
// import ListItemText from "@mui/material/ListItemText";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
            <Grid item lg={2}>
              <MenuList dense style={{ paddingTop: "60px" }}>
                <MenuItem>
                  <Link to="/">Home</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <Link to="/addscenario">Add Scenario</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <Link to="/allscenario">All Scenarios</Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <Link to="/addvehicle">Add Vehicle</Link>
                </MenuItem>
              </MenuList>
            </Grid>
            <Grid item lg={10} bgcolor={"black"} sx={{ height: "100vh" }}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/addscenario" element={<AddScenario />} />
                <Route path="/addvehicle" element={<AddVehicle />} />
                <Route path="/allscenario" element={<AllScenario />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default App;
