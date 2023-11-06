import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import routeslist from './router/router';

function App() {
  return (
    <div className="App">
      <Header />
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
