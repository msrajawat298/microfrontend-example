
import React from 'react';
import ReactDOM from 'react-dom/client';

const Home = React.lazy(() => import('home/HomePage'));
const Player = React.lazy(() => import('player/PlayerPage'));

const App = () => (
  <React.Suspense fallback="Loading...">
    <h1>Main Shell (Container)</h1>
    <Home />
    <Player />
  </React.Suspense>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
