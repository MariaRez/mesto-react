import React from 'react';
import './Main.css';
import avatar from "../../images/image.jpg";

function Main () {
  function handleEditAvatarClick() {
    console.log("Открыли попап для изменения аватара");
    document.querySelector('.popup_place_avatar').classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    console.log("Открыли попап для изменения профиля");
    document.querySelector('.popup_place_profile').classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    console.log("Открыли попап для создании новой карточки");
    document.querySelector('.popup_place_card').classList.add('popup_opened');
  }
    return (
        <main>
        <section className="profile">
          <div className="profile__avatar" onClick={handleEditAvatarClick}>
            <img
              className="profile__avatar-image"
              src={avatar}
              alt="Аватарка"
            />
          </div>
          <div className="profile__profile-info">
            <div className="profile__name-button">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
              onClick={handleEditProfileClick}
                aria-label="Edit Profile"
                className="profile__edit-button"
                type="button"
              ></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button
          onClick={handleAddPlaceClick}
            aria-label="Add card"
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="elements"></section>
      </main>
    );
}

export default Main;