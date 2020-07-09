import React  from 'react';
import './App.css';
import Header from './components/Header';
import Maingrid from './components/Maingrid';
import Search from "./components/search";

function App() {
 
  return (
    <div>
      <Header/>
      <Maingrid/>
      <div>
        <Search />
      </div>
    </div>
  );
}

export default App;
