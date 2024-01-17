import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Noticias } from "./components/noticias";
//Datos
const App = () => {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [comentarios, setComentarios] = useState('');

  const botonClick = () => {
    console.log("Click en el Boton");
  };

  const leerNombre = (e) => {
    setNombre(e.target.value);
    console.log(e.target.value);
  };

  const enviarForms = (e) => {
    e.preventDefault();
    var grupo = document.getElementById("grupo");
    console.log("Nombre:", nombre);
    console.log("Género:", genero);
    console.log("Acepta Términos:", aceptaTerminos);
    console.log("Comentarios:", comentarios);
    console.log("Grupo:", grupo.value);
    console.log("Formulario Enviado");
  };

  return (
    <>
      <Noticias />
      <center>
        <br></br>
        <br></br>
      <button onClick={botonClick}>Guardar</button>
      <input id="nombre" value={nombre} onChange={leerNombre} placeholder="Nombre" />
      <br></br>
      <div>
        <br></br>
        <label>Género:</label>
        <div>
          <input
            type="radio"
            id="masculino"
            name="genero"
            value="Masculino"
            checked={genero === 'Masculino'}
            onChange={() => setGenero('Masculino')}
          />
          <label htmlFor="masculino">Masculino</label>

          <input
            type="radio"
            id="femenino"
            name="genero"
            value="Femenino"
            checked={genero === 'Femenino'}
            onChange={() => setGenero('Femenino')}
          />
          <label htmlFor="femenino">Femenino</label>
        </div>
      </div>
      <div>
        <br></br>
        <input
          type="checkbox"
          id="aceptaTerminos"
          checked={aceptaTerminos}
          onChange={() => setAceptaTerminos(!aceptaTerminos)}
        />
        <label htmlFor="aceptaTerminos">Acepto los términos y condiciones</label>
      </div>

      <div>
        <br></br>
        <br></br>
        <label htmlFor="comentarios">Comentarios:</label>
        <textarea
          id="comentarios"
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
          placeholder="Escribe tus comentarios aquí"
        />
      </div>
      <br></br>
      <form onSubmit={enviarForms}>
        <input id="grupo" placeholder="Grupo" />
        <button type="submit">Enviar</button>
      </form>

      </center>
      
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
