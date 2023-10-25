import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Allbiers from "./pages/Allbiers";
import Biersdetails from "./pages/Biersdetails";
import Bierrandom from "./pages/Bierrandom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allbiers" element={<Allbiers />} />
        <Route path="/biersdetails/:id" element={<Biersdetails />} />
        <Route path="/bierrandom" element={<Bierrandom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
