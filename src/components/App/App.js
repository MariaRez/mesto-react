import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithImage from "../PopupWithImage/PopupWithImage";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);

  function handleEditAvatarClick() {
    console.log("Открыли попап для изменения аватара");
    setEditAvatarPopupState(true);
  }
  function handleEditProfileClick() {
    console.log("Открыли попап для изменения профиля");
    setEditProfilePopupState(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupState(false);
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
  }
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
        <Footer />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          onClose = {closeAllPopups} isOpen={isEditAvatarPopupOpen}
          children={
            <>
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__field popup__field_type_avatarlink form__input"
                name="avatar"
                id="avatar"
                required
              />
              <span
                id="avatar-error"
                className="error form__input-error"
              ></span>
              <button className="popup__button" type="submit">
                Сохранить
              </button>
            </>
          }
        />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          onClose = {closeAllPopups} isOpen={isEditProfilePopupOpen}
          children={
            <>
              <input
                type="text"
                placeholder="Имя"
                className="popup__field popup__field_type_name form__input"
                name="name"
                id="name"
                required
                minLength="2"
                maxLength="40"
              />
              <span id="name-error" className="error form__input-error"></span>
              <input
                type="text"
                placeholder="О себе"
                className="popup__field popup__field_type_description form__input"
                name="about"
                id="about"
                required
                minLength="2"
                maxLength="200"
              />
              <span id="about-error" className="error form__input-error"></span>
              <button className="popup__button" type="submit">
                Сохранить
              </button>
            </>
          }
        />
        <PopupWithForm
          name="card"
          title="Новое место"
          onClose = {closeAllPopups} isOpen={isAddPlacePopupOpen}
          children={
            <>
              <input
                type="text"
                placeholder="Название"
                className="popup__field popup__field_type_placename form__input"
                name="name"
                id="name-card"
                required
                minLength="2"
                maxLength="30"
              />
              <span
                id="name-card-error"
                className="error form__input-error"
              ></span>
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__field popup__field_type_placelink form__input"
                name="link"
                id="link"
                required
              />
              <span id="link-error" className="error form__input-error"></span>
              <button
                className="popup__button popup__button_place_card"
                type="submit"
              >
                Создать
              </button>
            </>
          }
        />
        <PopupWithImage />
        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          children={
            <>
              <button
                className="popup__button popup__button_place_delete"
                type="submit"
              >
                Да
              </button>
            </>
          }
        />
      </div>
      <template className="elements-template">
        <div className="element">
          <img className="element__image" />
          <button
            aria-label="Delete card"
            className="element__trash"
            type="button"
          ></button>
          <div className="element__rectangle">
            <h3 className="element__text"></h3>
            <div className="element__like-zone">
              <button
                aria-label="Like card"
                className="element__like"
                type="button"
              ></button>
              <p className="element__like-counter">1</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;