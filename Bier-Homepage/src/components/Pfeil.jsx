import { Link } from "react-router-dom";
import "./Pfeil.css";
const Pfeil = () => {
  return (
    <>
      <div className="pfeil">
        <Link to="/allbiers">⬅</Link>
      </div>
    </>
  );
};

export default Pfeil;
