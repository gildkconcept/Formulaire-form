import React from 'react';
import { useForm } from '../context/FormContext';
import './SplashScreen.css';

const SplashScreen = () => {
  const { goToStep } = useForm();

  return (
    <div className="cdg-splash">
      <div className="cdg-splash-logo">
        <img src="/src/assets/logo.png" alt="Club de la Grâce" />
      </div>
      <h2>Club de la Grâce</h2>
      <div className="cdg-splash-divider"></div>
      <p className="slogan">Ensemble, impactons des vies. Rejoignez notre réseau de partenaires d'impact.</p>
      <button className="cdg-btn cdg-btn-primary" onClick={() => goToStep(1)}>
        Commencer →
      </button>
    </div>
  );
};

export default SplashScreen;