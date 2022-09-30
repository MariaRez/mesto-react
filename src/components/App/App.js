import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PopupWithImage from "../PopupWithImage/PopupWithImage";

function App() {
  return (
    <div className="body">
          <div className="page">
          <Header />
          <Main />
          <Footer />
      <div className="popup popup_place_avatar">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form name="form_avatar" className="form form_place_avatar" noValidate>
            <input
              type="url"
              placeholder="Ссылка на картинку"
              className="popup__field popup__field_type_avatarlink form__input"
              name="avatar"
              id="avatar"
              required
            />
            <span id="avatar-error" className="error form__input-error"></span>
            <button className="popup__button" type="submit">
              Сохранить
            </button>
            <button
              aria-label="Close"
              className="popup__close-button popup__close-button_place_profile"
              type="button"
            ></button>
          </form>
        </div>
      </div>
      <div className="popup popup_place_profile">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form
            name="form_profile"
            className="form form_place_profile"
            noValidate
          >
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
            <button
              aria-label="Close"
              className="popup__close-button popup__close-button_place_profile"
              type="button"
            ></button>
          </form>
        </div>
      </div>
      <div className="popup popup_place_card">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>
          <form name="form_card" className="form form_place_card" noValidate>
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
            <button
              aria-label="Close"
              className="popup__close-button popup__close-button_place_card"
              type="button"
            ></button>
          </form>
        </div>
      </div>
      <PopupWithImage />
      <div className="popup popup_place_delete">
        <div className="popup__delete-container">
          <h3 className="popup__small-title">Вы уверены?</h3>
          <form name="formDelete" className="form form_place_delete" noValidate>
            <button
              className="popup__button popup__button_place_delete"
              type="submit"
            >
              Да
            </button>
            <button
              aria-label="Close"
              className="popup__close-button popup__close-button_place_image"
              type="button"
            ></button>
          </form>
        </div>
      </div>
    </div>
    <template className="elements-template">
    <div className="element">
        <img className="element__image"/>
        <button aria-label="Delete card" className="element__trash" type="button"></button>
        <div className="element__rectangle">
         <h3 className="element__text"></h3>
         <div className="element__like-zone">
          <button aria-label="Like card" className="element__like" type="button"></button>
          <p className="element__like-counter">1</p>
         </div>
        </div>
    </div>
  </template>
    </div>
  );
}

export default App;