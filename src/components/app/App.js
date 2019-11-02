import React from 'react';
import './App.css';
import useApp from './useApp';

function App() {
  const {employers} = useApp();
  return (
    <div className="App">
      {employers.map(emp =>(<div key={emp.name}>{emp.name}</div>))}
    </div>
  );
}

export default App;
