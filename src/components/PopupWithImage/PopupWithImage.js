function PopupWithImage () {
    return (
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
    );
}

export default PopupWithImage;