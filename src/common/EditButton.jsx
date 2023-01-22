import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export class EditButton extends Component {
  handleAdd = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <IconButton
        aria-label="Edit Scenario"
        onClick={(event) => this.handleAdd(event, this.props.cellValues)}
      >
        <EditIcon />
      </IconButton>
    );
  }
}

export default EditButton;
