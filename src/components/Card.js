import React from 'react';
import likeButtonIcon from '../images/elements__heart.png'

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleClick}
      />
      <div className="element__footer">
        <p className="element__text">{card.name}</p>
        <button className="element__button">
          <img
            src={likeButtonIcon}
            alt="Like Button"
            className="element__heart"
          />
          <span className="element__likes-count">{card.likes.length}</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
