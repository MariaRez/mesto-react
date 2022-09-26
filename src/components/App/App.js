import React from "react";

function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="logo"
          src="<%=require('./images/Vector.svg')%>"
          alt="Логотоп Место Россия"
        />
      </header>
      <main>
        <section className="profile">
          <div className="profile__avatar">
            <img
              className="profile__avatar-image"
              src="<%=require('./images/image.jpg')%>"
              alt="Аватарка"
            />
          </div>
          <div className="profile__profile-info">
            <div className="profile__name-button">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                aria-label="Edit Profile"
                className="profile__edit-button"
                type="button"
              ></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button
            aria-label="Add card"
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="elements"></section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
      <div className="popup popup_place_avatar">
        <div className="popup__small-container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form name="formAvatar" className="form form_place_avatar" noValidate>
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
            name="formProfile"
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
          <form name="formPlace" className="form form_place_card" noValidate>
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
      <div className="popup popup_place_image">
        <div className="popup__image-container">
          <img className="popup__image" />
          <h4 className="popup__text"></h4>
          <button
            aria-label="Close"
            className="popup__close-button popup__close-button_place_image"
            type="button"
          ></button>
        </div>
      </div>
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
  );
}

export default App;