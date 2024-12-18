import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";

function GraphComponent() {
  // const [data, setData] = useState([
  //   ["Evénements", "Nombre"],
  //   ["Tertiaire", 11],
  //   ["Batiment", 3],
  //   ["Industrie", 7]
  // ]);

  const [data, setData] = useState([["Catégorie", "Quantité en stock"]]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    // Appel API pour récupérer les catégories et les stocker sous forme de dictionnaire {id: nom}
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => {
        // console.log("categories récupérées :", data.member);

        if (Array.isArray(data.member)) {
          const categoriesMap = {};
          data.member.forEach((cat) => {
            categoriesMap[String(cat.id)] = cat.libelle_categorie;
          });
          setCategories(categoriesMap);
          console.log("Catégories chargées :", categoriesMap);

        }
      })
      .catch((error) =>
        console.error("Erreur de récupération des catégories :", error)

      );
  }, []);

  useEffect(() => {
     // Vérifiez si les catégories sont chargées avant d'appeler l'API des produits
    //  if (Object.keys(categories).length === 0) return; // Ne rien faire si les catégories ne sont pas encore chargées

    // Appel API pour récupérer les produits
    fetch("/api/produits")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.member)) {
          // Regrouper les quantités par catégorie
          const quantitesParCategorie = {};

          data.member.forEach((prod) => {
            // Extraire uniquement l'ID de la catégorie, en retirant le chemin /api/categories/
                        // const categoriePath = String(prod.categorie)
            // const categorieId = categoriePath.replace("/api/categories/", ""); 

            const categorieId = String(prod.categorie)
            //  || "Non classé"; // Parfois une catégorie peut être absente
            console.log("ID de catégorie dans produit:", categorieId);
            const quantite = prod.quantite_stock || 0;

            if (quantitesParCategorie[categorieId]) {
              quantitesParCategorie[categorieId] += quantite;
            } else {
              quantitesParCategorie[categorieId] = quantite;
            }
          });
          // console.log("ID de catégorie dans catégories:", Object.keys(categories))

          // Formater les données pour le graphique
          const formattedData = [["Catégorie", "Quantité en stock"]];
            for (const [categorieId, quantite] of Object.entries(
            quantitesParCategorie
          )) {
            // const categorieNom = categories[categorieId];
            const categorieNom = categories[categorieId];
            // if (categorieNom) {
            formattedData.push([categorieNom, quantite]);
            // } else{
            //   console.warn(`Pas de libelle pour l'Id: ${categorieId}`)
            // }
          }
          console.log("Données formatées pour le graphique :", formattedData);
          setData(formattedData);
        }
      })
      .catch((error) =>
        console.error("Erreur de récupération des produits :", error)
      );
  }, []);

  const options = {
    title: "Quantité en stock par catégorie de produit",
    is3D: true,
  };

  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
}
export default GraphComponent;
