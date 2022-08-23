import React, { useState, useEffect} from 'react';
import logo from './assets/logo_multisearch.png';
import './index.css';
import Table from './tables';
import api from './API/api.js'
import axios from 'axios';

const equipamento = require("./data");
const materiais = require("./materiais");

function App() {

  const [equipamentos, setEquipamentos] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/equipamentos")
      .then((res) => res.json())
      .then((equipamentos) => setEquipamentos(equipamentos.message));
  },[]);
 
    

  const [busca, setBusca] = useState('');

  //function buscar() {
  //  console.log(busca);
  //
  //  const tab = equipamento.filter((valorAtual) => {
  //    return valorAtual.EquipmentName.includes(busca);
//
//    })
 //   console.log(tab)
 // }

  return (
    <div className="App">
      <div className="img-logo">
        <img src={logo} alt='Logo MultiSearch' />
      </div>

      <div className="navbar">
        <nav >
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="text" placeholder="Pesquisar" aria-label="Search"
                value={busca}
                onChange={(ev) => setBusca(ev.target.value)} />
              <button className="btn btn-outline-success" type="button">Pesquisar</button>
            </form>
          </div>
        </nav>
      </div>

      <Table equipamento={equipamento} materiais={materiais} buscar={busca}/>

    </div>

  );
}

export default App;
