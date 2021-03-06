import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

export default function Profile() {
  const navigateTo = useNavigate();
  const [incidents, setIncidents] = useState([]);


  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');


  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(res => {
      setIncidents(res.data);
    })
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, { 
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout(){
    localStorage.clear();

    navigateTo('/');
  }
 
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="logo be-the-hero" />
        <span>Bem vindx, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency:'BRL' }).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)}  type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}