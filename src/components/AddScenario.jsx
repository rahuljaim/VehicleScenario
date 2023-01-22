import React, { Component } from "react";
import { Box, Grid, Stack, TextField, Button } from "@mui/material";

export class AddScenario extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <p>Scenario / add</p>
        <h2>Add Scenario</h2>
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
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid md={6} lg={6} xl={6}>
              <TextField
                fullWidth
                label="Scenario Name"
                id="fullWidth"
                sx={{ paddingRight: 2 }}
                placeholder="Test scenario"
              />
            </Grid>
            <Grid md={6} lg={6} xl={6}>
              <TextField
                fullWidth
                label="Scenario Time (seconds)"
                id="fullWidth"
                placeholder="10s"
              />
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

export default AddScenario;
