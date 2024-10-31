import React, { useState } from 'react';

const SearchBar = ({ categories = [] }) => {
    // Stocke la valeur de recherche de l'utilisateur.
    const [query, setQuery] = useState('');
    // contient les categories correspondant à la requête de recherche.
    const [filteredCategories, setFilteredCategories] = useState([]);

    // Fonction utilitaire pour nettoyer les chaînes en supprimant les déterminants
    // const removeDeterminants = (str) => {
    //     const determinants = ['le', 'la', 'les', 'un', 'une', 'des', 'l\''];
    //     const regex = new RegExp(`^(${determinants.join('|')})\\s+`, 'i');
    //     return str.replace(regex, '').trim();
    // };

    // Fonction de mise à jour de la recherche
    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setQuery(searchQuery);

    //     // Filtrage des categories en fonction de la recherche
        const results = categories.filter(categorie => 
        // {
            // Au lieu d'utiliser includes, utiliser startsWith pour prendre la premiere lettre tapée
            categorie.libelle_categorie.toLowerCase().startsWith(searchQuery)
            // const cleanedLibelle = removeDeterminants(categorie.libelleCategorie.toLowerCase()); // Nettoyez le libellé de la catégorie
            // return cleanedLibelle.startsWith(searchQuery); // Comparaison après nettoyage
            // }
    );

        setFilteredCategories(results);

        // Vérification du résultat de la recherche dans la console
        // console.log("Résultat de recherche :", results);
    };

    return (
        <div>
            <input 
                type="text" 
                style={{ backgroundColor: "white", color: "black", padding: "10px 20px", borderRadius: "5px", border: "none" }}
                value={query} 
                onChange={handleSearch} 
                placeholder="Recherche" 
                className="form-control"
            />

            <ul className="list-group mt-3 text-white">
                {filteredCategories.map((categorie) => (
                    <li key={categorie.id} className="list-group-item">
                        {categorie.libelle_categorie}
                    </li>
                ))
            //   (
            //     <li className="list-group-item">Aucune catégorie trouvée</li>
            //     )
                }
            </ul>
        </div>
    );
};

export default SearchBar;
