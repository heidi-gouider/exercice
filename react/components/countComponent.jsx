import React, { useState, useEffect } from 'react';



const CountComponent = () => {

      // Déclaration de l'état à l'intérieur du composant fonctionnel
    const [nom, setNom] = useState("");
    // État pour stocker le nombre aléatoire
    const [nombre, setNombre] = useState(null);
    const [countNombre, setCountNombre] = useState(0);
    const [countNombre2, setCountNombre2] = useState(0);
    const [countNombre3, setCountNombre3] = useState(countNombre);

 // useEffect pour surveiller les changements de `nom`
      // Premier useEffect : exécuté à chaque fois que `nom` change
useEffect(() => {
    console.log("useEffect 2 ...")
}, [nom])

// Deuxième useEffect : exécuté une seule fois au montage du composant
useEffect(() => {
    console.log("useEffect 1 ...")
}, [])

// useEffect pour surveiller les changements de `nombre`
useEffect(() => {
    console.log("useEffect 3 ...")
}, [nombre])
// useEffect pour surveiller les changements de `nombre`
useEffect(() => {
    console.log("useEffect 4 ...")
}, [countNombre])

// Fonction pour changer le nom en une chaîne aléatoire
const handleClick1 = () => {
    setNom(Math.random().toString(36).replace(/[^a-z]+/g, ''));
}
// Fonction pour générer un nombre aléatoires
const handleClick2 = () => {
    setNombre(Math.floor(Math.random() * 100));
}
// Fonction pour itérer un nombre
const handleClickIncr = () => {
    setCountNombre(prevNombre => prevNombre + 1);
}
// Fonction pour décrémenter le compteur
const handleClickDecr = () => {
    setCountNombre(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
};


// Fonction pour incrémenter le deuxième compteur
const handleClick4 = () => {
    setCountNombre2(countNombre2 + 1);
};
// Fonction pour générer un nom et un nombre aléatoires
// const handleClick1 = () => {
//     const randomString = Math.random().toString(36).replace(/[^a-z]+/g, ''); // Chaîne aléatoire
//     const randomNumber = Math.floor(Math.random() * 100); // Nombre aléatoire entre 0 et 99

//     setNom(randomString);
//     setNombre(randomNumber);
//   };

console.log("render App...");

return (

    <>
    <div className="text-white mb-4">
    <h1>Bouton qui génère un aléatoire & compteur (countComponent)</h1>
</div>
        <div>
            <span className="text-white m-2">{nom}</span>
        <button onClick={handleClick1} className="btn btn-outline-primary mb-4"
         style={{ backgroundColor: "white", color: "black" }}
        >change nom</button>
        </div>

        <div className="text-white m-2">
           <span>{nombre}</span> 
        <button onClick={handleClick2}  style={{ backgroundColor: "white", color: "black", padding: "10px 20px", borderRadius: "5px", border: "none" }}
        >change nombre</button>
        </div>

        <div className="text-white mb-4 mt-4">
            {countNombre}
        <button onClick={handleClickIncr} className='m-2' style={{ backgroundColor: "green", color: "black", padding: "10px 20px", borderRadius: "5px", border: "none" }}
        ><i className="bi bi-plus"></i></button>
                <button onClick={handleClickDecr}  style={{ backgroundColor: "red", color: "black", padding: "10px 20px", borderRadius: "5px", border: "none" }}
        ><i className="bi bi-dash"></i></button>
        </div>

        <div className="text-white">
        <button onClick={handleClick4}  style={{ backgroundColor: "white", color: "black", padding: "10px 20px", borderRadius: "5px", border: "none" }}
        >compteur = {countNombre2}</button>
        </div>


    </>
);
}
export default CountComponent;

