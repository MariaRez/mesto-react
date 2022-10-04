function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <img
        className="element__image"
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name}
      />
      <button
        aria-label="Delete card"
        className="element__trash"
        type="button"
      ></button>
      <div className="element__rectangle">
        <h3 className="element__text">{props.card.name}</h3>
        <div className="element__like-zone">
          <button
            aria-label="Like card"
            className="element__like"
            type="button"
          ></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;