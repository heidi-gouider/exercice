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
    ["1", "Recherche des besoins", "Conception", new Date(2024, 0, 1), new Date(2024, 0, 2), null, 100, null],
    ["2", "Définition des cas d'utilisation", "Conception", new Date(2024, 0, 3), new Date(2024, 0, 4), null, 100, "1"],
    ["3", "Spécifications techniques", "Conception", new Date(2024, 0, 5), new Date(2024, 0, 7), null, 100, "2"],
    ["4", "Développement API - Produits", "Backend", new Date(2024, 0, 8), new Date(2024, 0, 14), null, 50, "3"],
    ["5", "Développement API - Commandes", "Backend", new Date(2024, 0, 15), new Date(2024, 0, 21), null, 20, "4"],
    ["6", "Développement API - Clients", "Backend", new Date(2024, 0, 22), new Date(2024, 0, 28), null, 0, "5"],
    ["7", "Développement Frontend - Catalogue", "Frontend", new Date(2024, 1, 1), new Date(2024, 1, 7), null, 0, "6"],
    ["8", "Développement Frontend - Panier", "Frontend", new Date(2024, 1, 8), new Date(2024, 1, 14), null, 0, "7"],
    ["9", "Développement Mobile - Catalogue", "Mobile", new Date(2024, 2, 1), new Date(2024, 2, 10), null, 0, "8"],
    ["10", "Développement Mobile - Profil utilisateur", "Mobile", new Date(2024, 2, 11), new Date(2024, 2, 20), null, 0, "9"],
    ["11", "Tests API", "Tests", new Date(2024, 3, 1), new Date(2024, 3, 7), null, 0, "6"],
    ["12", "Tests Frontend et Mobile", "Tests", new Date(2024, 3, 8), new Date(2024, 3, 14), null, 0, "11"],
    ["13", "Déploiement Backend et Frontend", "Déploiement", new Date(2024, 3, 15), new Date(2024, 3, 20), null, 0, "12"],
    ["14", "Déploiement Mobile", "Déploiement", new Date(2024, 3, 21), new Date(2024, 3, 25), null, 0, "13"],
    ["15", "Documentation", "Documentation", new Date(2024, 3, 26), new Date(2024, 3, 30), null, 0, "14"],
  ];
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
