import React, { Component } from "react";

class Image extends Component {
  render() {
    const { image, alt, characterDirection } = this.props;
    return (
      <img
        src={image}
        alt={alt}
        className={characterDirection.toLowerCase()}
      ></img>
    );
  }
}

export default Image;
