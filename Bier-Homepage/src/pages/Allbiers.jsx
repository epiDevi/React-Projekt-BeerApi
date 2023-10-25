import "./Allbiers.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Allbiers = () => {
  const [biersItems, setBiersItems] = useState();
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => {
        setBiersItems(data);
        console.log(data);
      })
      .catch((err) => console.error("Fehler beim fetrch", err));
  }, []);
  return (
    <>
      {biersItems ? (
        biersItems.map((item, index) => (
          <section key={index} className="contianer">
            <section className="bier-info">
              <img src={item.image_url} alt="" />
              <div className="right">
                <h2 className="medium">{item.name}</h2>
                <h3 className="black">{item.tagline}</h3>
                <p className="medium m-t-10">
                  Create by: {item.contributed_by}
                </p>
                <Link
                  className="m-t-20 medium"
                  to={`/biersdetails/${item._id}`}
                >
                  Details
                </Link>
              </div>
            </section>
          </section>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </>
  );
};

export default Allbiers;
