// dzięki importom absolutnym możemy robić importy bez wskazywania konkretnego folderu w którym znajdują się importowane elementy - możemy to uzyskać dzięki jsconfig.json (uwzględniony w tym projekcie) - więcej w dokumentacji create-react-app (absolute imports)
import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);