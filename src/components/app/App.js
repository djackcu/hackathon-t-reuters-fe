import React from 'react';
import './App.css';
import useApp from './useApp';

function App() {
  
  const {query,employerFiltered,handlerFilter} = useApp()
  return (
    <div className="App">
      <input type="text" value={query} onChange={(e)=>handlerFilter(e)}></input>

      {employerFiltered.map(emp =>(<div key={emp.name}>{emp.name}</div>))}
    </div>
  );
}

export default App;
