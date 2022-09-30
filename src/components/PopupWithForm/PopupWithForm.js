function PopupWithForm (props) {
    return (
    <div className={`popup popup_place_${props.name}`}>
        <div className="popup__container">
            <h3 className="popup__title">{props.title}</h3>
            <form
            name={`form_${props.name}}`}
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
    );
}

export default PopupWithForm;