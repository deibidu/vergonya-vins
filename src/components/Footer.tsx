import "./Footer.css";
import FooterLogo from "/images/footer_logo.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer d-flex-col">
        <div className="footer_container d-flex-row">
          <img src={FooterLogo} />
          <div className="footer_container_links">
            <ul style={{ margin: "0" }}>
              <li className="footer-headers">RRSS</li>
              <a>
                <li className="footer-links">WhatsApp</li>
              </a>
              <a>
                <li className="footer-links">Facebook</li>
              </a>
              <a>
                <li className="footer-links">Instagram</li>
              </a>
              <a>
                <li className="footer-links">Mail</li>
              </a>
            </ul>
          </div>
          <div className="footer_container_links">
            <ul style={{ margin: "0" }}>
              <li className="footer-headers">Vore més</li>
              <a>
                <li className="footer-links">História</li>
              </a>
              <a>
                <li className="footer-links">Vins</li>
              </a>
              <a>
                <li className="footer-links">Compromís</li>
              </a>
              <a>
                <li className="footer-links">Galeria</li>
              </a>
              <a>
                <li className="footer-links">Contacte</li>
              </a>
            </ul>
          </div>
          <div className="footer_container_links">
            <ul style={{ margin: "0" }}>
              <li className="footer-headers">Política i privacitat</li>
              <a>
                <li className="footer-links">Privacitat</li>
              </a>
              <a>
                <li className="footer-links">Política d'Empresa</li>
              </a>
              <a>
                <li className="footer-links">Coockies</li>
              </a>
            </ul>
          </div>
          <div className="footer_container_span">
            <span className="footer-espolgan">
              “La vida és massa curta
              <br /> per tindre vergonya."
            </span>
          </div>
        </div>
        <div className="footer_copyright">
          <p className="text-copyright">
            Creado y diseñado por David López Faustino 2024.
          </p>
        </div>
      </footer>
    </>
  );
};
