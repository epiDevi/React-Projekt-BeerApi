import "./Details.css";
import Footer from "./Footer";
import Pfeil from "./Pfeil";
const Details = (props) => {
  return (
    <>
      <section className="contianer">
        <section className="bier-details">
          <img src={props.artikel.image_url} alt={props.artikel.name} />
          <h1 className="medium m-t-24">{props.artikel.name}</h1>
          <h2 className="m-t-20">{props.artikel.tagline}</h2>
          <div className="flex m-t-24 medium">
            <div>
              <p>First brewed:</p>
              <p>Attenuation level:</p>
            </div>
            <div>
              <p>{props.artikel.first_brewed}</p>
              <p>{props.artikel.attenuation_level}</p>
            </div>
          </div>
          <p className="description medium m-t-20">
            {props.artikel.description}
          </p>
        </section>
      </section>
      <Pfeil />
      <Footer />
    </>
  );
};

export default Details;
