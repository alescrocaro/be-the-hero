import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';


export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  
  const navigateTo = useNavigate();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const res = await api.post('/ongs', data);
      alert(`Seu ID de acesso: ${res.data.id}`);

      navigateTo('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');      
    }
  }

  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadasttro, entrre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Cancelar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG" 
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="Whatsapp" 
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input 
              placeholder="UF" 
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{ width: 80 }} 
            />
          </div>

          <button className="button" type="submit">Cadastro</button>
        </form>
      </div>
    </div>
  )
}