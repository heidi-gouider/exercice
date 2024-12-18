import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchBarComponent';
import TableauComponent from '../components/tableauComponent';
// import GraphComponent from '../components/graphComponent';

const App2 = () => {
    const [categories, setCategories] = useState([]);
    const [produits, setProduits] = useState([]);
    
        

    useEffect(() => {
        // Simulation de récupération des categories depuis une API pour la recherche et/ou le tableau
        fetch('/api/categories')
            .then(response => response.json())
            // .then(data => setCategories(data));
            .then(data => {
                // console.log("Catégories récupérées :", data.member); 

                const formattedData = data.member.map(cat => ({
                //     // garder l'id si nécessaire pour les clés
                    nom: cat.libelle_categorie,
                    description: cat.description_categorie,
                })
            );

                setCategories(formattedData);
                // setFilteredCategories(formattedData); // Initialisation avec toutes les catégories
                setCategories(Array.isArray(data.member) ? data.member : []);
            })
            .catch(error => console.error("Erreur de récupération des données :", error));

    }, []);

    useEffect(() => {
        // Simulation de récupération des categories depuis une API pour la recherche et/ou le tableau
        fetch('/api/produits')
            .then(response => response.json())
            // .then(data => setProduits(data))
            .then(data => {
                // console.log("produits récupérées :", data.member); 

                const formattedData = data.member.map(prod => ({
                //     // garder l'id si nécessaire pour les clés
                    nom: prod.libelle_produit,
                    description: prod.description_produit,
                    quantite: prod.quantite_stock,
                })
            );

                // setProduits(formattedData);
                // setFilteredCategories(formattedData); // Initialisation avec toutes les catégories
                setProduits(Array.isArray(data.member) ? data.member : []);
            })
            .catch(error => console.error("Erreur de récupération des données :", error));

    }, []);


    // const fetchProduits = async () => {
    //     // Effectuer le fetch pour récupérer tous les produits
    //     const apiUrl = `/api/produits`; // L'URL pour récupérer tous les produits

    //     try {
    //         const response = await fetch(apiUrl);
    //         if (!response.ok) {
    //             throw new Error('Erreur lors de la récupération des produits');
    //         }
    //         const data = await response.json();
    //         setProduits(data); // Mettre à jour l'état avec les produits récupérés
    //     } catch (error) {
    //         console.error("Erreur de récupération des produits :", error);
    //         setProduits([]); // Réinitialiser les produits en cas d'erreur
    //     }
    // };

    return (
        <div className="container">
            <SearchBar categories={categories} 
            // onSearch={fetchProduits}
            />
            {/* <TableauComponent data={categories} /> */}
            <TableauComponent data={produits} />
            {/* <GraphComponent/> */}
        </div>
    );
};

export default App2;
