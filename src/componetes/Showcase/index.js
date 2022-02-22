import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import avalietion from '../img/avaliacao.png';
import car from '../img/icon2.png';
import './showcase.css'
export default () => {
  return (
    <div className='cont'>
      <div className='title'>
        <h4>FOREVER BABY</h4>
        <h4 className='destaque'>DESTAQUES</h4>
      </div>
      <div>
        <div className="showcase">
          <img src={logo} className="imgLogo" />
          <h6>Lorem ipsum lorem ipsum</h6>
          <h5>R$ 99,99</h5>
          <img src={avalietion} className="imgAva" />
          <button>
            <img src={car} className="imgcar" />
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  );
}