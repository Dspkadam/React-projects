import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById('root'));

