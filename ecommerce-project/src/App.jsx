import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemList from "./components/page/itemList/ItemList";

function App() {
  const [greeting, setGreeting] = useState("Hola, ¿cómo estás?");

  const cambiarGreeting = (nuevoGreeting) => {
    setGreeting(nuevoGreeting);
  };

  return (
    <div>
      <Navbar />
      <ItemList greeting={greeting} cambiarGreeting={cambiarGreeting} />
    </div>
  );
}

export default App;
