import React from 'react';
import './Main.css';
import avatar from "../../images/image.jpg";

function Main () {
    return (
        <main>
        <section className="profile">
          <div className="profile__avatar">
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
    );
}

export default Main;