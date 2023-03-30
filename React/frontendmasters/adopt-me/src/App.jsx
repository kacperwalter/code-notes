import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  const addNumbers = (a, b) => a + b;

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havaneese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
      <Pet name="Scooby" animal="Dog" breed={addNumbers(2, 5)} />
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
