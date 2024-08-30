
import profileImage from '../images/profile__image.jpg'
import editProfileIcon from '../images/edit__profile-icon.png'
import editButton from '../images/Edit_Button.png'
import closeButton from '../images/Close__Icon.png'
import deleteButton from '../images/element__trash.png'
import likeButton from '../images/elements__heart.png'

function Main(){
    return(
        <>
        <section className="profile">
        <div className="profile__container">
          <div className="profile__photo">
            <img
              className="profile__image"
              src={profileImage}
              alt="Profile Pic"
            />
            <img 
              className="profile__edit-icon"
              src={editProfileIcon} 
              alt="Edit Icon" 
            />
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">Jacques Cousteau</h1>
              <button className="profile__button-edit">
                <img
                  src={editButton}
                  alt="Edit Button"
                  className="profile__button-image"
                />
              </button>
            </div>
            <h2 className="profile__about">Explorador</h2>
          </div>

          <div className="profile__add">
            <button className="profile__button-add">+</button>
          </div>
        </div>
      </section>

      {/* Profile Popup */}
      <div className="popup" id="popup-profile">
        <form className="popup__form" noValidate>
          <div className="popup__container">
            <img
              className="popup__close-button"
              src={closeButton}
              alt="Close Button"
            />
            <p className="popup__title">Editar perfil</p>
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
          </div>
        </form>
      </div>

      
      <div className="popup" id="popup-cards">
        <form className="popup__form" noValidate>
          <div className="popup__container">
            <img
              className="popup__close-button"
              src={closeButton}
              alt="Close Button"
            />
            <p className="popup__title">Nuevo Lugar</p>
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
          </div>
        </form>
      </div>

      
      <div className="confirm" id="popup-confirmation">
        <form className="confirm__form" noValidate>
          <div className="confirm__container">
            <img
              className="confirm__close-button"
              src={closeButton}
              alt="Close Button"
            />
            <p className="confirm__title">¿Estás seguro/a?</p>
            <button
              className="confirm__button"
              id="confirm__button-delete"
              type="submit"
            >
              Sí
            </button>
          </div>
        </form>
      </div>

      
      <div className="popup" id="popup-avatar">
        <form className="popup__form" noValidate>
          <div className="popup__container">
            <img
              className="popup__close-button"
              src={closeButton}
              alt="Close Button"
            />
            <p className="popup__title">Cambiar Foto De Perfil</p>
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
          </div>
        </form>
      </div>

      
      <div className="viewer">
        <div className="viewer__container">
          <img
            src={closeButton}
            alt="Close Button"
            className="viewer__close"
          />
          <img src="#" alt="Viewer" className="viewer__image" />
          <p className="viewer__text"></p>
        </div>
      </div>

      <section className="elements"></section>

      
      <template className="element__template">
        <div className="element">
          <img
            src={deleteButton}
            alt="Delete Button"
            className="element__trash"
          />
          <div className="element__image-container">
            <img src="#" alt="Element" className="element__image" />
          </div>
          <div className="element__footer">
            <p className="element__text"></p>
            <button className="element__button">
              <img
                src={likeButton}
                alt="Like Button"
                className="element__heart"
              />
              <span className="element__likes-count"></span>
            </button>
          </div>
        </div>
      </template>
        </>
    )
}

export default Main;