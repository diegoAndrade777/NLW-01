import React from 'react';
import './App.css';
import logo from '../src/assets/home-background.svg'

function App() {
  return (
    <>
    <div className="App">
        <div className="content">

            <header>
                <img src={logo} alt="Logo Ecoleta"/>
                <a href="#" >
                    <span></span>
                    Cadastre seu ponto de coleta
                </a>
            </header>

            <main>
                <h1>Seu marketplace de coleta de resíduos</h1>
    
                <p>Ajudamos pessoas a encontarem pontos de coleta de forma eficiente</p>
    
                <a href="#" ><span></span><strong>Pesquisar ponto de coleta</strong></a>
            </main>
    
      </div>
    </div>
    </>
  );
}

export default App;
