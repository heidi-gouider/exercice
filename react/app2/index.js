// librairie React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Notre composant principal et le style
import App from './app.jsx'
// import App from './react/app2/app.jsx';
// import SearchBar from '../components/searchBarComponent.jsx';
import QuizComponent from '../components/quizComponent.jsx';

// import App from './app';
// import App from './react/app1/app.jsx';

// import './index.css'

// pour afficher plusieurs composants j'utilise plusieurs éléments DOM
// pour afficher plusieurs composants j'utilise plusieurs éléments DOM
ReactDOM.createRoot(document.getElementById('app-root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

ReactDOM.createRoot(document.getElementById('quiz-component-root')).render(
    <React.StrictMode>
      <QuizComponent />
    </React.StrictMode>
  );
