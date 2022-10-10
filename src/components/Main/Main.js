import React from "react";
import "./Main.css";
import { api } from "../../utils/Api";
import Card from "../Card/Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.toggleLike(card._id, isLiked).then((newCard) => {
      setCards(cards.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards(cards.filter((c) => c._id !== card._id));
    });
  }

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([initialCards]) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <main>
        <section className="profile">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar-image"
              src={currentUser.avatar}
              alt="Аватарка"
            />
          </div>
          <div className="profile__profile-info">
            <div className="profile__name-button">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                onClick={props.onEditProfile}
                aria-label="Edit Profile"
                className="profile__edit-button"
                type="button"
              ></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button
            onClick={props.onAddPlace}
            aria-label="Add card"
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="elements">
          {cards.map((element) => (
            <Card
              card={element}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              key={element._id}
            />
          ))}
        </section>
      </main>
    </CurrentUserContext.Provider>
  );
}

export default Main;