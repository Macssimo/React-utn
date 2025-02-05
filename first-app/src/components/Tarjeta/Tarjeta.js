
import './Tarjeta.css';

export function Tarjeta({nombre, apellido, imagen}) {
  return (
    <div className="tarjeta">
      <img src= {imagen} alt="Persona" className="imagen"/>
      <h2 className="nombre">{nombre} {apellido}</h2>
      <button className="boton">Llamar</button>
    </div>
  );
}

export default Tarjeta;