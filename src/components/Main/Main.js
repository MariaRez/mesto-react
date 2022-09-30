import React from "react";
import "./Main.css";
import avatar from "../../images/image.jpg";
import { api } from "../../utils/Api";
import Card from "../Card/Card";

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [userName, setUserName] = React.useState("Жак Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь океана");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      })
}, []);


  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img className="profile__avatar-image" src={userAvatar} alt="Аватарка" />
        </div>
        <div className="profile__profile-info">
          <div className="profile__name-button">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              aria-label="Edit Profile"
              className="profile__edit-button"
              type="button"
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          aria-label="Add card"
          className="profile__add-button"
          type="button"
        ></button>
      </section>
      <section className="elements">
        {
          cards.map(element =>
            <Card card={element} key={element._id}/>
            )
        }
      </section>
    </main>
  );
}

export default Main;