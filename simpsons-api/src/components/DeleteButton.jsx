import React, { Component } from "react";
// import deleteIcon from "../assets/delete.svg";

class DeleteButton extends Component {
  render() {
    return (
      <button
        className="delete"
        onClick={() => this.props.onDelete(this.props.id)}
      >
        {/* <img className="deleteButton" alt="Delete Button" src={deleteIcon} /> */}
      </button>
    );
  }
}

export default DeleteButton;
