
import editProfileIcon from "../images/edit__profile-icon.png";
import editButton from "../images/Edit_Button.png";
import deleteButton from "../images/element__trash.png";
import likeButton from "../images/elements__heart.png";
import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({onEditAvatarClick, onEditProfileClick,onAddPlaceClick,onConfirmationClick,onCardClick}) {

  const [userName,setUserName] = React.useState('')

  const [userDescription,setUserDescription] = React.useState('');

  const [userAvatar,setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.error('Error al obtener la información del usuario:', err);
      });

    api
      .getInitialCards()
      .then((initialCards) => {
      setCards(initialCards);
      })
      .catch((err) => {
      console.error('Error al obtener las tarjetas:', err);
      });
  }, []);






  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__photo">
            <img
              className="profile__image"
              src={userAvatar}
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
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__button-edit">
                <img
                  src={editButton}
                  alt="Edit Button"
                  className="profile__button-image"
                  onClick={onEditProfileClick}
                />
              </button>
            </div>
            <h2 className="profile__about">{userDescription}</h2>
          </div>

          <div className="profile__add">
            <button
              className="profile__button-add"
              onClick={onAddPlaceClick}
            >
              +
            </button>
          </div>
        </div>
      </section>


      <section className="elements">
        {cards.map((card) =>(
          <Card key={card._id} card={card} onCardClick={onCardClick}></Card>
        ))}
      </section>

    
    </>
  );
}

export default Main;
