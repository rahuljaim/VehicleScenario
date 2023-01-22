import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { allvehicle } from "../mock/allvehicle";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";
import { Box, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import { rows } from "../mock/data";
import "../App.css";
import Canvas from "../common/Canvas";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenarioslist: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const columns = [
      {
        field: "id",
        headerName: "Vehicle ID",
        width: 90,
        align: "center",
        headerClassName: "theader1",
      },
      {
        field: "vehicleName",
        headerName: "Vehicle Name",
        width: 150,
        editable: false,
        align: "center",
        headerClassName: "theader1",
      },
      {
        field: "positionX",
        headerName: "Position X",
        width: 100,
        type: "number",
        editable: false,
        align: "center",
        headerClassName: "theader1",
      },
      {
        field: "positionY",
        headerName: "Position Y",
        width: 100,
        type: "number",
        editable: false,
        align: "center",
        headerClassName: "theader1",
      },
      {
        field: "speed",
        headerName: "Speed",
        width: 100,
        editable: false,
        align: "center",
        headerClassName: "theader1",
      },
      {
        field: "direction",
        headerName: "Direction",
        width: 120,
        editable: false,
        align: "center",
        headerClassName: "theader1",
      },
      {
        field: "edit",
        headerName: "Edit",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        align: "center",
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
        align: "center",
        width: 100,
        headerClassName: "theader",
        renderCell: (cellValues) => {
          return <DeleteButton cellValues={cellValues} />;
        },
      },
    ];
    return (
      <div style={{ color: "white", paddingTop: 5 }}>
        <Box
          component="form"
          sx={{
            // width: 400,
            // height: 250,
            backgroundColor: "white",
            padding: 1,
            marginRight: 2,
            opacity: "inherit",
          }}
          //   noValidate
          //   autoComplete="off"
        >
          <FormControl
            sx={{ paddingRight: 2, m: 1, width: 300 }}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-label">
              Scenarios List
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.scenarioslist}
              label="Scenarios List"
              name="scenarioslist"
              color="grey"
              onChange={this.handleChange}
            >
              {rows.map((e, i) => (
                <MenuItem value={e.id}>{e.scenarioname}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            height: 400,
            width: "100%",
            padding: 1,
            // "& .theader": {
            //   backgroundColor: "#222111",
            // },
          }}
        >
          <DataGrid
            sx={{ bgcolor: "lightgrey" }}
            rows={allvehicle}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
        <Box
          sx={{
            height: 400,
            width: "100%",
            padding: 1,
          }}
        >
          <Canvas vehicle={allvehicle} />
        </Box>
      </div>
    );
  }
}

export default Home;
