import Tarjeta from "./components/Tarjeta/Tarjeta";
import "./reset.css";

const personas = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    imagen: require("./assets/imagenes/img1.jpg"),
  },
  {
    nombre: "María",
    apellido: "Gómez",
    imagen: require("./assets/imagenes/img2.jpg"),
  },
  {
    nombre: "Carlos",
    apellido: "López",
    imagen: require("./assets/imagenes/img3.jpg"),
  },
];

function App() {
  return (
    <div className="app">
      {personas.map((persona, index) => (
        <Tarjeta
          key={index} nombre={persona.nombre} apellido={persona.apellido} imagen={persona.imagen}
        />
      ))}
    </div>
  );
}
export default App;
