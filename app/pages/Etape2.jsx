import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import logo from '../../assets/logo.png';
import './Etape.css';

const Etape2 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useForm();

  const formules = [
    { id: 'diamant', icon: '💎', label: 'Diamant', amount: '1 000 000 FCFA / an', className: 'td' },
    { id: 'or', icon: '🥇', label: 'Or', amount: '500 000 FCFA / an', className: 'to' },
    { id: 'argent', icon: '🥈', label: 'Argent', amount: '250 000 FCFA / an', className: 'ta' },
    { id: 'bronze', icon: '🥉', label: 'Bronze', amount: '120 000 FCFA / an', className: 'tb' }
  ];

  const handleSelect = (id) => {
    updateFormData('tier', id);
    navigate('/etape/2'); // Va vers l'identité
  };

  return (
    <div className="panel active er">
      <div className="card-head">
        <img src={logo} className="card-head-bg" alt="" aria-hidden="true" />
        <span className="icon">🏆</span>
        <div className="card-head-text">
          <h2>Formule de soutien</h2>
          <p>Choisissez votre niveau d'engagement</p>
        </div>
      </div>
      <div className="card-body">
        <div className="step-illustration animate-fadeUp delay-1">
          <span className="illu-icon animate-float delay-3">🎯</span>
        </div>

        <div className="tlist">
          {formules.map(f => (
            <div 
              key={f.id}
              className={`tcard ${f.className} ${formData.tier === f.id ? 'sel' : ''}`}
              onClick={() => handleSelect(f.id)}
            >
              <div className="tcard-content">
                <span className="ticon">{f.icon}</span>
                <div className="tcard-info">
                  <span className="tname">{f.label}</span>
                  <span className="tamt">{f.amount}</span>
                </div>
              </div>
              <span className="tchk">✓</span>
            </div>
          ))}
        </div>
        <div className="pay-note">
          <span className="icon">💳</span>
          <span>Espèces, Mobile Money, chèque ou virement bancaire.</span>
        </div>
      </div>
      <div className="card-foot">
        <button className="btn-back" onClick={() => navigate('/')}>←</button>
        <button 
          className="btn-next" 
          onClick={() => {
            if (formData.tier) {
              navigate('/etape/2');
            } else {
              alert('Veuillez sélectionner une formule');
            }
          }}
        >
          Continuer →
        </button>
      </div>
    </div>
  );
};

export default Etape2;