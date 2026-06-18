import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import logo from '../../assets/logo.png';
import './Etape.css';

const Etape1 = () => {
  const navigate = useNavigate();
  const { resetForm, updateFormData, formData } = useForm();

  React.useEffect(() => {
    resetForm();
  }, []);

  const handleSelect = (type) => {
    updateFormData('type', type);
    navigate('/etape/1'); // Va vers la formule
  };

  return (
    <div className="panel active">
      <div className="card-head">
        <img src={logo} className="card-head-bg" alt="" aria-hidden="true" />
        <span className="icon">👥</span>
        <div className="card-head-text">
          <h2>Type de donateur</h2>
          <p>Sélectionnez votre profil</p>
        </div>
      </div>
      <div className="card-body">
        <div className="step-illustration animate-fadeUp delay-1">
          <span className="illu-icon animate-float">🤝</span>
        </div>

        <div className="rgroup">
          <div className={`rcard ${formData.type === 'particulier' ? 'sel' : ''}`} onClick={() => handleSelect('particulier')}>
            <span className="icon">👤</span>
            <span>Donateur particulier</span>
            <span className="rdot"></span>
          </div>
          <div className={`rcard ${formData.type === 'eglise' ? 'sel' : ''}`} onClick={() => handleSelect('eglise')}>
            <span className="icon">⛪</span>
            <span>Église ou communauté</span>
            <span className="rdot"></span>
          </div>
          <div className={`rcard ${formData.type === 'entreprise' ? 'sel' : ''}`} onClick={() => handleSelect('entreprise')}>
            <span className="icon">🏢</span>
            <span>Entreprise ou organisme</span>
            <span className="rdot"></span>
          </div>
        </div>
      </div>
      <div className="card-foot">
        <button 
          className="btn-next" 
          onClick={() => {
            if (formData.type) {
              navigate('/etape/1');
            } else {
              alert('Veuillez sélectionner un type de donateur');
            }
          }}
        >
          Continuer →
        </button>
      </div>
    </div>
  );
};

export default Etape1;