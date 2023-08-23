import React, { Component } from "react";
import likedButton from "../assets/liked.svg";
import unlikedButton from "../assets/unliked.svg";

class LikeButton extends Component {
  render() {
    return (
      <button className="like" onClick={() => this.props.onLike(this.props.id)}>
        <img
          className="likeButton"
          alt="Like Button"
          src={this.props.liked ? likedButton : unlikedButton}
        />
      </button>
    );
  }
}

export default LikeButton;
