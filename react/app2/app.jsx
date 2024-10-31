import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchBarComponent';

const App2 = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Simulation de récupération des categories depuis une API
        fetch('/api/categories')
            .then(response => response.json())
            // .then(data => setCategories(data));
            .then(data => {
                console.log(data.member); 
                setCategories(Array.isArray(data.member) ? data.member : []);
            })
            .catch(error => console.error("Erreur de récupération des données :", error));
    }, []);

    return (
        <div className="container">
            {/* <h1>Catalogue</h1> */}
            <SearchBar categories={categories} />
        </div>
    );
};

export default App2;
