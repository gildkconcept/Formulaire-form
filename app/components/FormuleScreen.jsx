import React from 'react';
import { useForm } from '../context/FormContext';
import './FormuleScreen.css';

const FormuleScreen = () => {
  const { formData, updateFormData, errors, goToStep } = useForm();

  const formules = [
    { id: 'diamant', icon: '💎', label: 'Diamant', amount: '1 000 000 FCFA / an', className: 'cdg-tier-diamant' },
    { id: 'or', icon: '🥇', label: 'Or', amount: '500 000 FCFA / an', className: 'cdg-tier-or' },
    { id: 'argent', icon: '🥈', label: 'Argent', amount: '250 000 FCFA / an', className: 'cdg-tier-argent' },
    { id: 'bronze', icon: '🥉', label: 'Bronze', amount: '120 000 FCFA / an', className: 'cdg-tier-bronze' }
  ];

  const handleSelect = (tier) => {
    updateFormData('tier', tier);
    goToStep(3);
  };

  return (
    <>
      <div className="cdg-section-title">Formule de soutien</div>
      <div className="cdg-tier-group">
        {formules.map(formule => (
          <label
            key={formule.id}
            className={`cdg-tier ${formule.className} ${formData.tier === formule.id ? 'selected-tier' : ''}`}
            onClick={() => handleSelect(formule.id)}
          >
            <input type="radio" name="tier" value={formule.id} checked={formData.tier === formule.id} readOnly />
            <span className="tier-icon">{formule.icon}</span>
            <span className="tier-label">{formule.label}</span>
            <span className="tier-amount">{formule.amount}</span>
          </label>
        ))}
        <p className="cdg-tier-note">Contributions possibles en espèces, Mobile Money, chèque ou virement bancaire.</p>
      </div>
      {errors.tier && <p className="cdg-error">{errors.tier}</p>}
    </>
  );
};

export default FormuleScreen;