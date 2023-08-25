import React, { Component } from "react";
import ralphImage from "../assets/Ralph_Wiggum.png";
import groundskeeper from "../assets/GroundskeeperWillie.png";

class Image extends Component {
  render() {
    const { image, alt, characterDirection } = this.props;
    return (
      <img
        src={
          alt === "Ralph Wiggum"
            ? ralphImage
            : alt === "Groundskeeper Willie"
            ? groundskeeper
            : image
        }
        alt={alt}
        className={characterDirection.toLowerCase()}
      ></img>
    );
  }
}

export default Image;
