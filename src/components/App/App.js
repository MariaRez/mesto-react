import React from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
    console.log("Открыли попап большой картинки")
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
        <Footer />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          card={selectedCard}
          onClose = {closeAllPopups} isOpen={isEditAvatarPopupOpen} >
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
          </PopupWithForm>
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          onClose = {closeAllPopups} isOpen={isEditProfilePopupOpen} >
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
        </PopupWithForm>
        <PopupWithForm
          name="card"
          title="Новое место"
          buttonText="Создать"
          onClose = {closeAllPopups} isOpen={isAddPlacePopupOpen} >
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
          buttonText="Да" >
        </PopupWithForm>
        <ImagePopup onClose = {closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;