// import React, { useState } from 'react';

// const SearchBar = ({ categories }) => {
//     // Stocke la valeur de recherche de l'utilisateur.
//     const [query, setQuery] = useState('');
//     // contient les produits correspondant à la requête de recherche.
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     // Fonction de mise à jour de la recherche
//     // const handleSearch = (e) => {
//     //     const searchQuery = e.target.value.toLowerCase();
//     //     setQuery(searchQuery);

//     //     // Filtrage des produits en fonction de la recherche
//     //     const results = categories.filter(categorie =>
//     //         categorie.libellCategorie.toLowerCase().includes(searchQuery)
//     //     );

//     //     setFilteredProducts(results);
//     // };

//     return (
//         <div>
//             <input 
//                 type="text" 
//                 value={query} 
//                 onChange={handleSearch} 
//                 placeholder="Recherche" 
//                 className="form-control"
//             />

//             <ul className="list-group mt-3">
//                 {filteredProducts.map((produit) => (
//                     <li key={categorie.id} className="list-group-item">
//                         {categorie.libellCategorie} - {categorie.descriptionCategorie}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SearchBar;
