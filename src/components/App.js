// import logo from './logo.svg';
// import '../App.css';
import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithConfirmation from './PopupWithConfirmation';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState(null)

  const handleEditProfileClick = () => {
    console.log("Editar Funciona");
    setIsEditProfilePopupOpen(true)

  };

  const handleAddPlaceClick = () => {
    console.log("Funciona Agregar Tarjeta");
    setIsAddPlacePopupOpen(true);

  };

  const handleEditAvatarClick = () => {
    console.log("Avatar Funciona");
    setIsEditAvatarPopupOpen(true);
  };

  const handleConfirmationClick = () =>{
    console.log("Icono borrar funciona");
    setIsConfirmationPopupOpen(true);
  }

  const handleCardClick = (image) =>{
    console.log("Tarjeta seleccionada:", image);
    setSelectedCard(image);
  }

  const closeAllPopups = () =>{
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsConfirmationPopupOpen(false)
    setSelectedCard(null)
  }



  return (
    <div className="page">

      <Header></Header>

      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onConfirmationClick={handleConfirmationClick}
        onCardClick={handleCardClick}
      />

      <Footer/>

      <PopupWithForm
      name={"profile"}
      title={"Editar Perfil"}
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      >
        <label htmlFor="input-name" className="popup__label"></label>
            <input
              name="name"
              type="text"
              className="popup__input-name popup__input"
              id="input-name"
              required
              placeholder="Nombre"
              minLength="2"
              maxLength="40"
            />
            <span
              className="popup__error input-name-error"
              id="input-name-error"
            ></span>
            <label htmlFor="input-about" className="popup__label"></label>
            <input
              type="text"
              name="about"
              id="input-about"
              className="popup__input-about popup__input"
              required
              placeholder="Acerca de mí"
              minLength="2"
              maxLength="200"
            />
            <span
              className="popup__error input-about-error"
              id="input-about-error"
            ></span>
            <button
              className="popup__button"
              id="popup__button-profile"
              type="submit"
            >
              Guardar
            </button>
      </PopupWithForm>
      
      <PopupWithForm
        name={"cards"}
        title={"Nuevo Lugar"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label htmlFor="input-name" className="popup__label"></label>
            <input
              type="text"
              className="popup__input-name popup__input"
              id="input-name"
              required
              placeholder="Nombre"
              minLength="2"
              maxLength="30"
              name="name"
            />
            <span
              className="popup__error input-name-error"
              id="input-name-error"
            ></span>
            <label htmlFor="input-link" className="popup__label"></label>
            <input
              type="url"
              name="link"
              id="input-link"
              className="popup__input-about popup__input"
              required
              placeholder="Enlace a la imagen"
            />
            <span
              className="popup__error input-link-error"
              id="input-link-error"
            ></span>
            <button
              className="popup__button"
              id="popup__button-cards"
              type="submit"
            >
              Crear
            </button>
      </PopupWithForm>
      
    <PopupWithForm
    name={"avatar"}
    title={"Cambiar Foto De Perfil"}
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    >
       <label htmlFor="input-avatar" className="popup__label"></label>
            <input
              type="url"
              name="avatar"
              id="input-avatar"
              className="popup__input-about popup__input"
              required
              placeholder="Enlace a la imagen"
            />
            <span
              className="popup__error input-avatar-error"
              id="input-avatar-error"
            ></span>
            <button
              className="popup__button"
              id="popup__button-avatar"
              type="submit"
            >
              Guardar
            </button>

    </PopupWithForm>

    <PopupWithConfirmation
      name={"confirmation"}
      title={"¿Estás seguro/a?"}
      isOpen={isConfirmationPopupOpen}
      onClose={closeAllPopups}
    />

  {selectedCard && (
        <ImagePopup
          image={selectedCard}
          onClose={closeAllPopups}
        />
      )}
    
    </div>
  );
}

export default App;
