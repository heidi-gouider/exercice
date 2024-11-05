import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchBarComponent';
import TableauComponent from '../components/tableauComponent';

const App2 = () => {
    const [categories, setCategories] = useState([]);
    // const [data, setData] = useState([
    //     { nom: "Booth", prenom: "Cliff", ville: "Hollywood" },
    //     { nom: "Lebowski", prenom: "Jeff", ville: "Los Angeles" },
    //     { nom: "Vega", prenom: "Vincent", ville: "Los Angeles" },
    //     { nom: "Kiddo", prenom: "Beatrix", ville: "El Paso" },
    //   ]);
    

    useEffect(() => {
        // Simulation de récupération des categories depuis une API pour la recherche et/ou le tableau
        fetch('/api/categories')
            .then(response => response.json())
            // .then(data => setCategories(data));
            .then(data => {
                console.log("Catégories récupérées :", data.member); 

                // const filteredData = data.member.map(cat => ({
                //     // garder l'id si nécessaire pour les clés
                //     nom: cat.libelle_categorie,
                //     description: cat.description_categorie,
                // })
            // );

                // setCategories(filteredData);
                setCategories(Array.isArray(data.member) ? data.member : []);
            })
            .catch(error => console.error("Erreur de récupération des données :", error));

    }, []);

    return (
        <div className="container">
            {/* <h1>Catalogue</h1> */}
            <SearchBar categories={categories} />
            {/* <TableauComponent data={categories} /> */}
        </div>
    );
};

export default App2;
