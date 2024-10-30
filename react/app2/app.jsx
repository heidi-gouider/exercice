// import React from 'react';
// import FilterComponent from './FilterComponent';
import React, { useState, useEffect } from "react";
// import QuizComponent from './components/quizComponent.jsx';
// import SearchBar from './components/searchBarComponent.jsx';
// exercice/react/components/searchBarComponent.jsx

// Attention à remplacer toutes les instances de class par className
// car class dans un composant react est réservé pour les classes js,  pour les classes css=>className !
const App = () => {
  // export default function App() {

  let userName = "lili";
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleChangeNom = (evt) => {
    setNom(evt.target.value);
  };
  const handleChangePrenom = (evt) => { // Nouvelle fonction pour le prénom
    setPrenom(evt.target.value);
  };

  return (
    <div>
      <div className="text-white" mb-5="true">
        <h1>Salut {userName} !</h1>
        <p> Pour changer ton Nom :</p>
      </div>
      <div>
        <div className="text-white">Bonjour {prenom} {nom}</div>
        <input type="text" value={nom} onChange={handleChangeNom} style={{ backgroundColor: "grey", color: "white" }} />
        <input type="text" value={prenom} onChange={handleChangePrenom} style={{ color: "black"}} />
      </div>
      <p>(Ce message provient de ./app1/app.jsx)</p>
    </div>
  );

// const [categories, setCategories] = useState([]);

// useEffect(() => {
//     // Simulation de récupération des categories depuis une API
//     fetch('/api/ressourceCategorie')
//         .then(response => response.json())
//         .then(data => setCategories(data))
//         .catch(error => console.error("Erreur lors de la récupération des produits :", error));
// }, []);

// return (
//     <div className="container">
//         <h1>Catalogue </h1>
//         {/* <SearchBar categories={categories} /> */}
//     </div>
// );
};
export default App;

// ou

// export default function App() {
//   return <div className="text-white">Hello, World!</div>;
// }
