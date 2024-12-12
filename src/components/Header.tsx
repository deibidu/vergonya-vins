import "./Header.css";
import LogoHeader from "/images/vergonya_header_logo.svg";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <nav className={"nav d-flex-row"}>
        <div className={"nav_logo"}>
          <img src={LogoHeader} alt="Logo" />
        </div>
        <div>
          <div
            className={`nav_burger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav_ul ${isOpen ? "nav_ul-open" : ""}`}>
            <button className="close-menu" onClick={closeMenu}>
              ✕
            </button>
            <li className={"text"} onClick={closeMenu}>
              <a href="#historia">Història</a>
            </li>
            <li className={"text"} onClick={closeMenu}>
              <a href="#vins">Vins</a>
            </li>
            <li className={"text"} onClick={closeMenu}>
              <a href="#compromis">Compromís</a>
            </li>
            <li className={"text"} onClick={closeMenu}>
              <a href="#galeria">Galeria</a>
            </li>
            <a href="#contacte" onClick={closeMenu}>
              <button className="button-primary">Contacte</button>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};
