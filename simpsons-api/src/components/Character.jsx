import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import LikeButton from "./LikeButton";

class Character extends Component {
  render() {
    const { character, quote, image, characterDirection, id, liked } =
      this.props.character;

    const { onDelete, onLike } = this.props;

    return (
      <div className="character">
        <Name name={character} />
        <Quote quote={quote} />
        <Image
          image={image}
          alt={character}
          characterDirection={characterDirection}
        />
        <div>
          <LikeButton liked={liked} onLike={onLike} id={id} />
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Character;
