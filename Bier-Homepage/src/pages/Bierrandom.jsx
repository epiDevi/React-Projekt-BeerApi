import { useEffect, useState } from "react";
import "./Biersdetails.css";
import Details from "../components/Details";
const Bierrandom = () => {
  const [biersItem, setBiersItem] = useState();
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => {
        setBiersItem(data);
        console.log(data);
      });
  }, []);

  return <>{biersItem ? <Details artikel={biersItem} /> : <p>Loading...</p>}</>;
};

export default Bierrandom;
