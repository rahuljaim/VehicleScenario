import React, { Component } from "react";
import { Box, Grid, Stack, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { rows } from "../mock/data";
import { direction } from "../mock/direction";

export class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenarioslist: "",
      directionVal: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div sx={{ color: "white" }}>
        <p>Vehicle / add</p>
        <h2>Add Vehicle</h2>
        <Box
          component="form"
          sx={{
            // width: 400,
            // height: 250,
            backgroundColor: "white",
            padding: 5,
            marginRight: 2,
            opacity: "inherit",
          }}
          //   noValidate
          //   autoComplete="off"
        >
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ paddingTop: 3 }}
          >
            <Grid md={4} lg={4} xl={4}>
              <FormControl fullWidth sx={{ paddingRight: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Scenarios List
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.scenarioslist}
                  label="Scenarios List"
                  name="scenarioslist"
                  onChange={this.handleChange}
                >
                  {rows.map((e, i) => (
                    <MenuItem value={e.id}>{e.scenarioname}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid md={4} lg={4} xl={4}>
              <TextField
                fullWidth
                label="Vehicle Name"
                id="fullWidth"
                sx={{ paddingRight: 2 }}
                placeholder="Target ABC"
              />
            </Grid>
            <Grid md={4} lg={4} xl={4}>
              <TextField
                fullWidth
                label="Speed"
                id="fullWidth"
                placeholder="10s"
              />
            </Grid>
            <Grid md={4} lg={4} xl={4} sx={{ paddingTop: 2 }}>
              <TextField
                fullWidth
                label="Position X"
                id="fullWidth"
                sx={{ paddingRight: 2 }}
                placeholder="100"
              />
            </Grid>
            <Grid md={4} lg={4} xl={4} sx={{ paddingTop: 2 }}>
              <TextField
                fullWidth
                label="Position Y"
                id="fullWidth"
                sx={{ paddingRight: 2 }}
                placeholder="50"
              />
            </Grid>
            <Grid md={4} lg={4} xl={4} sx={{ paddingTop: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label1">
                  Select Direction
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select"
                  value={this.state.directionVal}
                  label="Select Direction"
                  name="directionVal"
                  onChange={this.handleChange}
                >
                  {direction.map((ele, ind) => (
                    <MenuItem value={ind}>{ele}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Stack spacing={2} direction="row" paddingTop={2}>
          <Button variant="contained" color="success">
            Add
          </Button>
          <Button variant="contained" color="warning">
            Reset
          </Button>
          <Button variant="contained" color="primary">
            Go Back
          </Button>
        </Stack>
      </div>
    );
  }
}

export default AddVehicle;
