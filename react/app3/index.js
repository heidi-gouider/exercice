// librairie React
import React from 'react'
import ReactDOM from 'react-dom/client'
// import DiagrammeGantt from '../components/diagrammeGantt.jsx';
import App3 from './app.jsx';

// import App from './app';

// import './index.css'

// pour afficher plusieurs composants j'utilise plusieurs éléments DOM
ReactDOM.createRoot(document.getElementById('app3-root')).render(
    <React.StrictMode>
      <App3 />
    </React.StrictMode>
  );

//   ReactDOM.createRoot(document.getElementById('diagramme-component-root')).render(
//     <React.StrictMode>
//         <DiagrammeGantt/>
//     </React.StrictMode>
// );
