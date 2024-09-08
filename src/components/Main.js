import React from "react";
import editProfileIcon from "../images/edit__profile-icon.png";
import editButton from "../images/Edit_Button.png";
import deleteButton from "../images/element__trash.png";
import likeButton from "../images/elements__heart.png";
import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onConfirmationClick,
  onCardClick,
}) {
  const [cards, setCards] = React.useState([]);

  const CurrentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === CurrentUser._id);

    const likeAction = isLiked
      ? api.removeLike(card._id)
      : api.addLike(card._id);

    likeAction
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.error("Error al obtener las tarjetas:", err);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__photo">
            <img
              className="profile__image"
              src={CurrentUser.avatar}
              alt="Profile Pic"
            />
            <img
              className="profile__edit-icon"
              src={editProfileIcon}
              alt="Edit Icon"
              onClick={onEditAvatarClick}
            />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">{CurrentUser.name}</h1>
              <button className="profile__button-edit">
                <img
                  src={editButton}
                  alt="Edit Button"
                  className="profile__button-image"
                  onClick={onEditProfileClick}
                />
              </button>
            </div>
            <h2 className="profile__about">{CurrentUser.about}</h2>
          </div>

          <div className="profile__add">
            <button className="profile__button-add" onClick={onAddPlaceClick}>
              +
            </button>
          </div>
        </div>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            onCardLike={handleCardLike}
            key={card._id}
            card={card}
            onCardClick={onCardClick}
          ></Card>
        ))}
      </section>
    </>
  );
}

export default Main;
