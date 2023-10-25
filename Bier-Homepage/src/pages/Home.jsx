import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [itemRandom, setItemRandom] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        console.log("random:", randomIndex);
        console.log(data);
        const randomItem = data[randomIndex];
        console.log("randomItem", randomItem);
        setItemRandom(randomItem);
        console.log(itemRandom);
      });
    // const randomIndex = Math.floor(Math.random() * 25);
    // console.log("randomIndex", randomIndex);
    // setItemRandom(randomIndex);
    // console.log("itemRandom", itemRandom);
  }, []);

  return (
    <>
      <section className="contianer">
        <article>
          <div className="bier">
            <div>
              <Link to="/allbiers" className="bold">
                All Beers
              </Link>
            </div>
          </div>
          <p className="medium lorem m-t-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            neque velit nihil dolore vitae mollitia.
          </p>
        </article>
        <article className="m-t-60">
          <div className="bier">
            <div>
              <Link to={`/bierrandom`} className="bold">
                Random Beer
              </Link>
            </div>
          </div>
          <p className="medium lorem m-t-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi earum
            sapiente temporibus neque consequatur dolorum!
          </p>
        </article>
      </section>
    </>
  );
};

export default Home;
