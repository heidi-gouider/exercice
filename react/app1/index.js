// librairie React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Notre composant principal et le style
// import App from './app.jsx'
import FirstComponent from '../components/firstComponent.jsx';
import CountComponent from '../components/countComponent.jsx';
import ListComponent from '../components/listComponent.jsx';
import App from '../app1/app.jsx';

// import App from './app';

// import './index.css'

// pour afficher plusieurs composants j'utilise plusieurs éléments DOM
ReactDOM.createRoot(document.getElementById('app-root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  ReactDOM.createRoot(document.getElementById('first-component-root')).render(
    <React.StrictMode>
      <FirstComponent />
    </React.StrictMode>
  );


  ReactDOM.createRoot(document.getElementById('count-component-root')).render(
    <React.StrictMode>
      <CountComponent />
    </React.StrictMode>
  );

  ReactDOM.createRoot(document.getElementById('list-component-root')).render(
    <React.StrictMode>
      <ListComponent />
    </React.StrictMode>
  );

  // ReactDOM.createRoot(document.getElementById('search-component-root')).render(
  //   <React.StrictMode>
  //     <SearchBar />
  //   </React.StrictMode>
  // );

  // ReactDOM.createRoot(document.getElementById('quiz-component-root')).render(
  //   <React.StrictMode>
  //     <QuizComponent />
  //   </React.StrictMode>
  // );


  // const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <App />
// );
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <>
//     <App />
//     <FirstComponent />
//     </>
//   );
  
// point d'entrée mis dans la vue pour afficher le log : {{ encore_entry_script_tags('app1') }}
console.log('test app1 : ce log provient de react/index.js');