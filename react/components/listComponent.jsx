import React, { useState, useEffect } from 'react';


const ListComponent = () => {
    // export default function App() {

    // Etats pout l'input et pour stocker la liste d'éléments
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);


////////// Quand Utiliser useEffect ? /////////////////////////////

// Voici quelques situations où useEffect pourrait être approprié :

//     Appels API : Si vous deviez récupérer une liste d'éléments depuis un serveur lorsque le composant se monte.
  // Simule la récupération d'une liste depuis une API
//   useEffect(() => {
//     const initialItems = ["Pomme", "Banane", "Orange"];
//     setItems(initialItems);
// }, []); 
//  Le tableau vide [] signifie que cela ne s'exécute qu'au montage
//////////////////////////////////////////////////////////////////////////


const handleChangeInput = (event) => {
    setInput(event.target.value); // Metttre à jour l'état de `list` avec la valeur de l'input
};

    // Fonction pour ajouter un élément à la liste
const handleAddList = (event) => {
    if (input.trim() !== "") { // Vérifie que l'input n'est pas vide
        setList([...list, input]); // Ajoute l'élément à la liste
        setInput(""); // Réinitialise l'input après ajout
    }};

     // Nouvelle fonction pour détecter "Entrée" et ajouter l'élément
     const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleAddList();
        }
    };
    return (

            <>
            <div className="text-white mb-4">
                <h1>Input d'ajpout d'éléments dans une liste (listComponent)<i class="bi bi-arrow-down-left"></i></h1>
            </div>

            {/* <div className="text-white">Listes des courses</div> */}

            <div className="text-white">
            {/* // Si `list` est un tableau */}
                <u className='underline'>Courses</u> :{list.join(", ")} 
            </div>

            <input type="text" value={input} onChange={handleChangeInput} onKeyDown={handleKeyPress} style={{ color: "black"}} placeholder="Ajoutez un élément"/>
            <button onClick={handleAddList} className="m-3" style={{ backgroundColor: "white", color: "black", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                    >Ajouter</button>


            <ul style={{ marginTop: "20px" }}>
                {list.map((list, index) => (
                    <li key={index} className="text-white">{list}</li> // Affiche chaque élément sous forme de liste
                ))}
            </ul>

            {/* Dropdown pour afficher les éléments de la liste */}
            <select className="form-select mt-3 text-black">
                {list.map((list, index) => (
                    <option key={index} value={list}>
                        {list}
                    </option>
                ))}
            </select>

        </>
        
    );
};
export default ListComponent
