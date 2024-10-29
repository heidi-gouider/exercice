// import React from 'react';
// import FilterComponent from './FilterComponent';
import React, { useState, useEffect } from "react";
// import FilterComponent from './components/FilterComponent';
// import ProduitList from './components/ProduitList';

// Attention à remplacer toutes les instances de class par className
// car class dans un composant react est réservé pour les classes js,  pour les classes css=>className !
const App = () => {
  // export default function App() {

  let userName = "lili";
  const [nom, setNom] = useState("Votre nom");
  const [prenom, setPrenom] = useState("Votre prenom");

  const handleChangeNom = (evt) => {
    setNom(evt.target.value);
  };
  const handleChangePrenom = (evt) => { // Nouvelle fonction pour le prénom
    setPrenom(evt.target.value);
  };

  return (
    <div>
      <div className="text-white">
        <h1>Salut {userName} !</h1>
        <p> pour changer le Nom :</p>
      </div>
      <div>
        <div className="text-white">Bonjour {nom} {prenom}</div>
        <input type="text" value={nom} onChange={handleChangeNom} style={{ backgroundColor: "grey", color: "white" }} />
        <input type="text" value={prenom} onChange={handleChangePrenom} style={{ color: "black"}} />
      </div>
      <p>(Ce message provient de ./app1/app.jsx)</p>
    </div>
  );
};
export default App;

// ou

// export default function App() {
//   return <div className="text-white">Hello, World!</div>;
// }