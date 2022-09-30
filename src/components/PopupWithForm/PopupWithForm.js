function PopupWithForm(props) {
  return (
    <div className={`popup popup_place_${props.name}` + (props.isOpen ? " popup_opened" : "")}>
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <form
          name={`form_${props.name}}`}
          className="form form_place_profile"
          noValidate
        >
          {props.children}
          <button
            onClick={props.onClose}
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

