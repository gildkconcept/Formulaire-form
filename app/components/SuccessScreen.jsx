import React from 'react';
import { useForm } from '../context/FormContext';
import './SuccessScreen.css';

const SuccessScreen = () => {
  const { reference, resetForm } = useForm();

  return (
    <div className="cdg-success-wrap">
      <div className="cdg-success-icon">✅</div>
      <h3>Engagement enregistré !</h3>
      <p>Votre engagement a été enregistré avec succès.<br />L'équipe du Club de la Grâce vous contactera sous peu.</p>
      <div className="cdg-ref">{reference || 'CDG-2026-000001'}</div>
      <button className="cdg-btn cdg-btn-primary" onClick={resetForm} style={{ marginTop: '1.5rem' }}>
        Nouvelle inscription
      </button>
    </div>
  );
};

export default SuccessScreen;