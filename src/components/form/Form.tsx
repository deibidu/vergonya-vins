import "./Form.css";
import "../../styles/styles.css";

export const Form = () => {
  return (
    <>
      <div className="form">
        <form action="/submit" className="form_container" method="POST">
          <div className="form_container_label d-flex-col">
            <label className="title-form" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form_container_label_input text"
              name="email"
              placeholder="example@email.com"
              required
            />
            <p className="text-error">Escriu un missatge d'error</p>
          </div>
          <div className="form_container_label d-flex-col">
            <label className="title-form" htmlFor="name">
              Nom i cognoms
            </label>
            <input
              type="text"
              className="form_container_label_input text"
              name="name"
              placeholder="Escriu ací..."
              required
            />
            <p className="text-error">Escriu un missatge d'error</p>
          </div>
          <div className="form_container_label d-flex-col">
            <label className="title-form" htmlFor="message">
              Cuestió
            </label>
            <textarea
              className="form_container_label_input text"
              name="message"
              placeholder="Escriu ací..."
              required
            ></textarea>
            <p className="text-error">Escriu un missatge d'error</p>
          </div>
        </form>
        <button className="button-secondary" type="submit">
          Enviar
        </button>
      </div>
    </>
  );
};
