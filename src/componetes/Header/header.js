import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import user from '../img/icon.png';
import car from '../img/icon2.png';
import './header.css';

export default () => {
  const [get, setGet] = useState('')

  const changeGet = ({ target }) => {
    setGet(target.value);
  }

  const valideteForm = (e) => {
    const regex = /\W|_/;

    if (regex.test(get)) {
      alert("Não use caracteres especias")
      setGet('');
      e.preventDefault();

    }

    else if (get === '' || get.length <3 ) {
      alert("digite ao menos 3 caracterer")
      e.preventDefault();
    }
  }

  return (
    <header className="Header">
      <Link to="/home">
        <img className='Logo' src={logo} />
      </Link>

      <form>
        <fieldset>
          <input
            onChange={changeGet}
            value={get}
            placeholder="Qual o mimo de hoje para o seu anjinho?"
          />
          <button
            onClick={valideteForm}
          >
            BUSCAR
          </button>
        </fieldset>
      </form>
      <Link to="/home">
        <div className='Center'>
          <div className='Div-circle'>
            <img className='Icone' src={user}/>
          </div>
          <p>MINHA CONTA</p>
        </div>
      </Link>
      <Link to="/home">
        <div className='Center'>
          <div className='Div-circle'>
            <img className='Icone' src={car}/>
          </div>
          <p>CARRINHO</p>
        </div>
      </Link>
    </header>
  )
}
