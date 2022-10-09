import { useState } from "react";
import "./App.css";
import Boton from "./components/boton";
import Contador from "./components/contador";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";

function App() {
  const [numClics, setNumClics] = useState(0);
  const manejarClicks = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="freecodecamp imagen"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonClic={true} manejarClic={manejarClicks} />
        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
