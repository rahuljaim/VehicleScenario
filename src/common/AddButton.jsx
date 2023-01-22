import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export class AddButton extends Component {
  handleAdd = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <IconButton
        aria-label="Add Scenario"
        onClick={(event) => this.handleAdd(event, this.props.cellValues)}
      >
        <AddCircleIcon />
      </IconButton>
    );
  }
}

export default AddButton;
