import React from 'react';
import DataTable from 'react-data-table-component';
// import TableauComponent from './TableauComponent';
// import React, { useEffect, useState } from 'react';


const TableauComponent = ({ data }) => {

const columns = [
    {
      name: <b>Nom</b>,
      selector: (row) => row.nom,
      sortable: true,
    },
    {
      name: <b>description</b>,
      selector: (row) => row.description,
      sortable: true,
    },
    // {
    //   name: <b>Ville</b>,
    //   selector: (row) => row.ville,
    //   sortable: true,
    // }
  ];

  // const [data, setData] = useState([
  //   { nom: "Booth", prenom: "Cliff", ville: "Hollywood" },
  //   { nom: "Lebowski", prenom: "Jeff", ville: "Los Angeles" },
  //   { nom: "Vega", prenom: "Vincent", ville: "Los Angeles" },
  //   { nom: "Kiddo", prenom: "Beatrix", ville: "El Paso" },
  // ])};

  // useEffect(() => {
    // Exemple de récupération des données depuis une API Symfony
//     fetch('/api/users')
//     .then(response => response.json())
//     .then(data => setData(data));
// }, []);

return (
  <DataTable
    title="Tableau des catégories"
    columns={columns}
    data={data}
    pagination
  />
);
};
  export default TableauComponent;