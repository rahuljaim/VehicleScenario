import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export class DeleteButton extends Component {
  handleAdd = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <IconButton
        aria-label="Delete Scenario"
        onClick={(event) => this.handleAdd(event, this.props.cellValues)}
      >
        <DeleteIcon />
      </IconButton>
    );
  }
}

export default DeleteButton;
