import React, { Component } from "react";
import { Stack, Button, Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../mock/data";
import AddButton from "../common/AddButton";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";

export class AllScenario extends Component {
  render() {
    const columns = [
      {
        field: "id",
        headerName: "Scenario ID",
        width: 90,
        align: "center",
        headerClassName: "theader",
      },
      {
        field: "scenarioname",
        headerName: "Scenario Name",
        width: 180,
        editable: false,
        headerClassName: "theader",
      },
      {
        field: "scenariotime",
        headerName: "Scenario Time",
        width: 150,
        editable: false,
        headerClassName: "theader",
      },
      {
        field: "noofvehicles",
        headerName: "Number of Vehicles",
        type: "number",
        width: 150,
        align: "center",
        editable: false,
        headerClassName: "theader",
      },
      {
        field: "addvehicle",
        headerName: "Add Vehicle",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 120,
        headerClassName: "theader",
        renderCell: (cellValues) => {
          return <AddButton cellValues={cellValues} />;
        },
      },
      {
        field: "edit",
        headerName: "Edit",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 100,
        headerClassName: "theader",
        renderCell: (cellValues) => {
          return <EditButton cellValues={cellValues} />;
        },
      },
      {
        field: "delete",
        headerName: "Delete",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 100,
        headerClassName: "theader",
        renderCell: (cellValues) => {
          return <DeleteButton cellValues={cellValues} />;
        },
      },
    ];

    return (
      <div style={{ color: "white" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} padding={3}>
            <Grid md={6} lg={6} xl={6}>
              <p>All Scenarios</p>
            </Grid>
            <Grid md={6} lg={6} xl={6}>
              <Stack
                spacing={2}
                direction="row"
                paddingTop={2}
                alignContent={"end"}
              >
                <Button variant="contained" color="primary">
                  New Scenarios
                </Button>
                <Button variant="contained" color="success">
                  Add Vehicle
                </Button>
                <Button variant="contained" color="warning">
                  Delete All
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            height: 400,
            width: "100%",
            paddingRight: 2,
            // "& .theader": {
            //   backgroundColor: "#222111",
            // },
          }}
        >
          <DataGrid
            sx={{ bgcolor: "lightgrey" }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    );
  }
}

export default AllScenario;
