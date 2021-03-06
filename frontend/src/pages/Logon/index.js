import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Logon(){
  const [id, setId] = useState('');
  const navigateTo = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', res.data.name);

      navigateTo('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Seu ID" 
            value={id}
            onChange={e => setId(e.target.value)}  
          />
          {/* <Link to="/profile"> */}
            <button className="button" type="submit">Entrar</button>
          {/* </Link> */}

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}