import React from 'react';
import FullName from './components/profile/FullNAme';
import ProfilPhoto from './components/profile/profilphoto';
import Adresse from './components/profile/Adresse';
import './App.css';
const rootElement = document.getElementById("root");
ReactDOM.render(<App />,rootElement);
function App() {
  return (
    <div>
    <ProfilPhoto/>
    <FullName/>
    <Adresse/>
    </div>
  );
}

export default App;
