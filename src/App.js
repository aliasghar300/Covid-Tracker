import React  from 'react';
import './App.css';
import Header from './components/Header';
import Maingrid from './components/Maingrid';
import Search from "./components/search";
import GlobalChart from './components/globalChart';

function App() {
 
  return (
    <div>
      <Header/>
      <Maingrid/>
      <div>
        <GlobalChart />
        <Search />
      </div>
    </div>
  );
}

export default App;
