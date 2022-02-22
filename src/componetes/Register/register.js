import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

export default () => {
  const [email, setEmail] = useState('');

  const registerEmial = (e) => {
    axios.post("https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php", { email })
      .then(res => {
        alert(res.data.Mensagem);
        setEmail('')
      })
      e.preventDefault()
  }

  return (
    <div className='register'>
      <div className='titles'>
        <h4>NEWSLETTER FOREVER BABY</h4>
        <p>
          Cadastre-se agora para não perder nenhuma promoção
        </p>

      </div>
      <form>
          <fieldset>
            <input
              onChange={ ({target}) => {
                setEmail(target.value);
              }}
              placeholder="Digite aqui seu melhor e-mail"
              value={email}
            />
            <button
            onClick={registerEmial}
            >
              CADASTRAR
            </button>
          </fieldset>
      </form>
    </div>
  )
}
