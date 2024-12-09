import { Chart } from "react-google-charts";
import React from "react";

function DiagrammeGantt() {
  const data = [
    [
      { type: "string", label: "Task ID" },
      { type: "string", label: "Task Name" },
      { type: "string", label: "Resource" },
      { type: "date", label: "Start Date" },
      { type: "date", label: "End Date" },
      { type: "number", label: "Duration" },
      { type: "number", label: "Percent Complete" },
      { type: "string", label: "Dependencies" },
    ],

    // ["id", "Nom", "Groupe", start, end, duration, percentComplete, dependencies]

    ["1", "Recherche des besoins", "Conception", new Date(2024, 11, 9), new Date(2024, 11, 10), null, 100, "1"],
    ["2", "Cahier des charges", "Conception", new Date(2024, 11, 10), new Date(2024, 11, 10), null, 100, "2"],
    ["3", "Maquettage", "Conception", new Date(2024, 11, 10), new Date(2024, 11, 13), null, 100, "3"],
    ["4", "Dictionnaire de données", "Conception", new Date(2024, 11, 16), new Date(2024, 11, 16), null, 100, "4"],
    ["5", "Définition des cas d'utilisation", "Conception", new Date(2024, 11, 17), new Date(2024, 11, 17), null, 100, "5"],
    ["6", "Spécifications techniques", "Conception", new Date(2024, 0, 5), new Date(2024, 0, 7), null, 100, "6"],
    ["7", "Développement Frontend - Accueil", "Frontend", new Date(2024, 1, 1), new Date(2024, 1, 7), null, 0, "7"],
    ["8", "Développement Frontend - Panier", "Frontend", new Date(2024, 1, 8), new Date(2024, 1, 14), null, 0, "8"],
    ["9", "Tests API", "Tests", new Date(2024, 3, 1), new Date(2024, 3, 7), null, 0, "9"],
    ["10", "Tests Frontend et Mobile", "Tests", new Date(2024, 3, 8), new Date(2024, 3, 14), null, 0, "10"],
    ["11", "Déploiement Backend et Frontend", "Déploiement", new Date(2024, 3, 15), new Date(2024, 3, 20), null, 0, "11"],
    ["12", "Documentation", "Documentation", new Date(2024, 3, 26), new Date(2024, 3, 30), null, 0, "12"],
  ];
      // ["", "Développement API - Produits", "Backend", new Date(2024, 0, 8), new Date(2024, 0, 14), null, 50, "3"],
    // ["", "Développement API - Commandes", "Backend", new Date(2024, 0, 15), new Date(2024, 0, 21), null, 20, "4"],
    // ["", "Développement API - Clients", "Backend", new Date(2024, 0, 22), new Date(2024, 0, 28), null, 0, "5"],
    // ["14", "Déploiement Mobile", "Déploiement", new Date(2024, 3, 21), new Date(2024, 3, 25), null, 0, "13"],

  const options = {
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  };

  return (
    <div>
      {/* <h2>Diagramme de Gantt du Projet</h2> */}
      <Chart
        chartType="Gantt"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default DiagrammeGantt;
