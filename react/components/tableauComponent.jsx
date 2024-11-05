import React from 'react';
import DataTable from 'react-data-table-component';
// import React, { useEffect, useState } from 'react';


const TableauComponent = ({ data }) => {

const columns = [
    {
      name: <b>Nom</b>,
      selector: (row) => row.libelle_produit,
      sortable: true,
    },
    {
      name: <b>description</b>,
      selector: (row) => row.description_produit || 'Aucune description', //  valeur par défaut,
      sortable: true,
    },
    {
      name: <b>Quantité</b>,
      selector: (row) => row.quantite_stock,
      sortable: true,
    }
  ];
    // Vérifiez ce que contient data juste avant de rendre le tableau
    // console.log("Données pour le tableau :", data);

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