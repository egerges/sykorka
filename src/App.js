import logo from './logo.png';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import routeslist from './router/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sýkorka School Website is being built.
          Get Excited with us.
        </p>
      </header>
      <Routes>
        {routeslist.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              Component={route.component}
            />
        ))}
      </Routes>
    </div>
  );
}

export default App;
