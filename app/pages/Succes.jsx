import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import logo from '../../assets/logo.png';
import './Etape.css';

const Succes = () => {
  const navigate = useNavigate();
  const { reference, resetForm } = useForm();

  const handleReset = () => {
    resetForm();
    navigate('/');
  };

  return (
    <div className="success-card" style={{ display: 'block', maxWidth: '100%' }}>
      <img src={logo} className="success-card-bg" alt="" aria-hidden="true" />
      
      <div className="success-ring">
        <svg viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="2.5">
          <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <h3>Engagement enregistré !</h3>
      <p>Merci pour votre précieux soutien.<br />L'équipe du Club de la Grâce vous contactera très prochainement.</p>
      
      <div className="success-ref">
        <span className="ref-label">Référence</span>
        <span className="ref-value">{reference || 'CDG-2026-000001'}</span>
      </div>
      
      <img src={logo} className="success-logo" alt="Club de la Grâce" />
      
      <div className="contact-pill">
        <svg viewBox="0 0 24 24" fill="none" stroke="#7B1D5A" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        +225 01 01 01 43 39
      </div>
      
      <button className="btn-reset" onClick={handleReset}>
        Nouvelle inscription
      </button>
    </div>
  );
};

export default Succes;