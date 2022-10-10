import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { api } from "../../utils/Api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "../EditAvatarPopup/EditAvatarPopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
  });

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateAvatar(avatar) {
    api
      .editAvatar(avatar)
      .then((userAvatar) => {
        setCurrentUser(userAvatar);
        setEditAvatarPopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(data) {
    api
      .editProfile(data)
      .then((userData) => {
        setCurrentUser(userData);
        setEditProfilePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    console.log("Открыли попап для изменения аватара");
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    console.log("Открыли попап для изменения профиля");
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    console.log("Открыли попап для добавления новой карточки");
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    console.log("Открыли попап большой картинки");
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            name="card"
            title="Новое место"
            buttonText="Создать"
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}
          >
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
          </PopupWithForm>
          <PopupWithForm
            name="delete"
            title="Вы уверены?"
            buttonText="Да"
          ></PopupWithForm>
          <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;