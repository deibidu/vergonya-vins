import "./styles/styles.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import LogoHero from "/images/vergonya_hero_logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="hero d-flex-row">
        <div className="hero_container d-flex-col">
          <img src={LogoHero} alt="logo de vergonya" />
          <div className="hero_container_eslogan">
            <p className="text">
              La vida és massa curta
              <br /> per tindre
              <strong> vergonya</strong>.
            </p>
            <a href="#contacte">
              <button className="button-secondary">Contacte</button>
            </a>
          </div>
        </div>
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
