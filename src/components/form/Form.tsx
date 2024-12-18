import "./Form.css";
import "../../styles/styles.css";
import { useState, FormEvent } from "react";
import Spinner from "./Spinner";

function LoadingModal(): JSX.Element {
  return (
    <div className="modal">
      <div className="d-flex-col">
        <Spinner />
        <h4 className="title">Enviant</h4>
      </div>
    </div>
  );
}

function SuccessModal({ onClose }: { onClose: () => void }): JSX.Element {
  return (
    <div className="modal">
      <div className="d-flex-col">
        <h4 className="title">Gràcies</h4>
        <p className="text">
          Ens posarem en contacte amb tu al més prompte possible.
        </p>
        <button onClick={onClose} className="button-secondary">
          Tancar
        </button>
      </div>
    </div>
  );
}

export function Form(): JSX.Element {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<{ [key: string]: string }>({});

  const formValidated = () => {
    const newErrors: { [key: string]: string } = {};

    if (!email) newErrors.email = "Ompli aquest camp";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email invalid";

    if (!name) newErrors.name = "Ompli aquest camp";

    if (!message) newErrors.message = "Ompli aquest camp";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formValidated()) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);

        setEmail("");
        setName("");
        setMessage("");
      }, 2000);
    }
  };

  const closeSuccessModal = () => {
    setIsSuccess(false);
  };

  return (
    <>
      {isLoading && <LoadingModal />}
      {isSuccess && <SuccessModal onClose={closeSuccessModal} />}
      <div className="form">
        <form
          action="/submit"
          onSubmit={handleSubmit}
          className="form_container"
          method="POST"
        >
          <div className="form_container_label d-flex-col">
            <label className="title-form" htmlFor="email">
              Email <span className="text-error">*</span>
            </label>
            <input
              type="email"
              className={`form_container_label_input text ${
                error.email ? "border-error" : ""
              }`}
              name="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error.email && <p className="text-error">{error.email}</p>}
          </div>
          <div className="form_container_label d-flex-col">
            <label className="title-form" htmlFor="name">
              Nom i cognoms <span className="text-error">*</span>
            </label>
            <input
              type="text"
              className={`form_container_label_input text ${
                error.name ? "border-error" : ""
              }`}
              name="name"
              placeholder="Escriu ací..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {error.name && <p className="text-error">{error.name}</p>}
          </div>
          <div className="form_container_label d-flex-col">
            <label className="title-form" htmlFor="message">
              Cuestió <span className="text-error">*</span>
            </label>
            <textarea
              className={`form_container_label_input text ${
                error.message ? "border-error" : ""
              }`}
              name="message"
              placeholder="Escriu ací..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {error.message && <p className="text-error">{error.message}</p>}
          </div>
          <button className="button-secondary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
