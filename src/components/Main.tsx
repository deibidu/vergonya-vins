import "./Main.css";
import "../styles/styles.css";
import Vinyedo from "/images/historia_image.jpg";
import ViNegre from "/images/vi_negre.jpg";
import ViBlanc from "/images/vi_blanc.jpg";
import ViRosat from "/images/vi_rosat.jpg";
import ViNegreTag from "/images/etiqueta-negre.jpg";
import ViBlancTag from "/images/etiqueta-blanc.png";
import ViRosatTag from "/images/etiqueta-rosat.jpg";
import ZoomedBottle from "/images/compromis_image.jpg";
import Galeria1 from "/images/galeria_image-1.jpg";
import Galeria2 from "/images/galeria_image-2.jpg";
import Galeria3 from "/images/galeria_image-3.jpg";
import Galeria4 from "/images/galeria_image-4.jpg";
import Vins from "/images/vins.png";
import { Form } from "./form/Form";

export const Main = () => {
  return (
    <>
      <div className="main">
        <section className="historia" id="historia">
          <h4 className="title-section">História</h4>
          <div className="historia_container d-flex-col">
            <h2 className="title">
              De la terra a la taula, amb orgull i tradició
            </h2>
            <p className="text">
              Des de les muntanyes de la Vall d’Albaida fins al cor de la Ribera
              Alta, "Vergonya" naix per a capturar l’essència de les vinyes més
              antigues de la Comunitat Valenciana. Amb un procés acurat i
              respectuós amb la tradició, cada gota és un homenatge a les nits
              compartides, les rialles sinceres i aquells moments que ens fan
              baixar l’última gota de vergonya.
            </p>
          </div>
          <img className="historia_image" src={Vinyedo} />
        </section>

        <section className="vins" id="vins">
          <h4 className="title-section">Vins</h4>

          <div className="vins_vi-negre">
            <div className="vins_vi_container">
              <h6 className="title-types tipo-negre">vi negre</h6>
              <h2 className="title">Intensitat i profunditat</h2>
              <p className="text">
                El nostre vi negre combina el caràcter de la Bobal amb la dolçor
                subtil de la Garnatxa Tintorera. Amb notes a fruits del bosc,
                espècies suaus i un toc de fusta torrada, és ideal per a
                llargues sobretaules amb amistats sinceres.
                <br />
                <br />
                <strong>Maridatge:</strong> Perfecte amb carn a la brasa,
                embotits valencians o formatges curats.
              </p>
              <a>
                <button className="button-secondary">Encarrega</button>
              </a>
            </div>
            <img className="vins_vi_image" src={ViNegre} />
          </div>

          <div className="vins_vi-blanc">
            <img className="vins_vi_image" src={ViBlanc} />
            <div className="vins_vi_container">
              <h6 className="title-types-black tipo-blanc">vi blanc</h6>
              <h2 className="title">Frescor i puresa</h2>
              <p className="text">
                El blanc de Vergonya s’elabora amb Verdil i Macabeu, dues
                varietats típiques valencianes que aporten aromes cítrics,
                florals i un final refrescant. Un vi pensat per a aquells
                moments d’autenticitat i frescor.
                <br />
                <br />
                <strong>Maridatge:</strong> Combina a la perfecció amb peix al
                forn, arròs a banda i tapes lleugeres.
              </p>
              <a>
                <button className="button-secondary">Encarrega</button>
              </a>
            </div>
          </div>

          <div className="vins_vi-rosat">
            <div className="vins_vi_container">
              <h6 className="title-types tipo-rosat">vi rosat</h6>
              <h2 className="title">El vi del somriure</h2>
              <p className="text">
                Els nostres rosats, elaborats amb Bobal, tenen un color vibrant
                i aromes a maduixes i cireres fresques. És el vi que convida a
                deixar les preocupacions a un costat i gaudir.
                <br />
                <br />
                <strong>Maridatge:</strong> Ideal per a paelles, fideuàs i
                moments a l’aire lliure.
              </p>
              <a>
                <button className="button-secondary">Encarrega</button>
              </a>
            </div>
            <img className="vins_vi_image" src={ViRosat} />
          </div>

          <div className="variants">
            <h4 className="title-variants">Totes les variants</h4>
            <div className="variants_images">
              <img className="variants_images_img" src={ViNegreTag} />
              <img className="variants_images_img" src={ViBlancTag} />
              <img className="variants_images_img" src={ViRosatTag} />
            </div>
          </div>
        </section>

        <section className="compromis" id="compromis">
          <h4 className="title-section">Compromís</h4>
          <div className="compromis_container d-flex-col">
            <h2 className="title">
              De la terra a la taula, amb orgull i tradició
            </h2>
            <p className="text">
              Des de les muntanyes de la Vall d’Albaida fins al cor de la Ribera
              Alta, "Vergonya" naix per a capturar l’essència de les vinyes més
              antigues de la Comunitat Valenciana. Amb un procés acurat i
              respectuós amb la tradició, cada gota és un homenatge a les nits
              compartides, les rialles sinceres i aquells moments que ens fan
              baixar l’última gota de vergonya.
            </p>
            <a>
              <button className="button-secondary">Brinda ací</button>
            </a>
          </div>
          <img className="compromis_image" src={ZoomedBottle} />
        </section>

        <section className="galeria" id="galeria">
          <h4 className="title-section">Galeria</h4>
          <div className="galeria_container">
            <img className="galeria_container_image" src={Galeria1} />
            <img className="galeria_container_image" src={Galeria2} />
            <img className="galeria_container_image" src={Galeria3} />
            <img className="galeria_container_image" src={Galeria4} />
          </div>
        </section>

        <section className="contacte" id="contacte">
          <h4 className="title-section">Contacte</h4>
          <div className="contacte_container">
            <div className="contacte_container_information">
              <h2 className="title">
                El sabor de la nostra terra, al teu abast
              </h2>
              <p className="text">
                Si vols saber més sobre els nostres vins, la nostra història o
                com adquirir-los, estem a la teua disposició. Ens encanta
                connectar amb persones que, com tu, valoren la qualitat, la
                sostenibilitat i els bons moments.
              </p>
            </div>
            <div className="contacte_container_information">
              <Form />
            </div>
          </div>
        </section>

        <div className="final_image">
          <img className="final_image_img" src={Vins} />
        </div>
      </div>
    </>
  );
};
