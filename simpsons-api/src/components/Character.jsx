import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

class Character extends Component {
  render() {
    const { character, quote, image, characterDirection, id, liked } =
      this.props.character;

    const { onDelete, onLike } = this.props;

    return (
      <div className="character">
        <div className="grid">
          <Name name={character} />
          <Quote quote={quote} />
          <Image
            image={image}
            alt={character}
            characterDirection={characterDirection}
          />
        </div>
        <div className="buttons">
          <LikeButton liked={liked} onLike={onLike} id={id} />
          <DeleteButton onDelete={onDelete} id={id} />
        </div>
      </div>
    );
  }
}

export default Character;
