import React from 'react';
// import FilterComponent from './FilterComponent';
// import React, { useState, useEffect } from 'react';
// import FilterComponent from './components/FilterComponent';
// import ProduitList from './components/ProduitList';

// Attention à remplacer toutes les instances de class par className
// car class dans un composant react est réservé pour les classes js,  pour les classes css=>className !
const FirstComponent = () => {
    // export default function App() {

    let liste = ["John", "Paul", "George", "Ringo"];

    return (
        <div className="text-white">
            <h1>Voici un tableau du firstComponent</h1>
            <div>
        {
          liste.map( (item) => (
            <div key={item}>{item}</div>
          ))
        }
    </div>
        </div>
        
    );
};
export default FirstComponent

