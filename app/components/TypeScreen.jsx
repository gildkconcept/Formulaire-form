import React from 'react';
import { useForm } from '../context/FormContext';
import './TypeScreen.css';

const TypeScreen = () => {
  const { formData, updateFormData, errors, goToStep } = useForm();

  const types = [
    { id: 'particulier', icon: '👤', label: 'Donateur particulier' },
    { id: 'eglise', icon: '⛪', label: 'Église / Communauté' },
    { id: 'entreprise', icon: '🏢', label: 'Entreprise / Organisme' }
  ];

  const handleSelect = (type) => {
    updateFormData('type', type);
    goToStep(2);
  };

  return (
    <>
      <div className="cdg-section-title">Type de donateur</div>
      <div className="cdg-radio-group">
        {types.map(type => (
          <label
            key={type.id}
            className={`cdg-radio-label ${formData.type === type.id ? 'selected' : ''}`}
            onClick={() => handleSelect(type.id)}
          >
            <input type="radio" name="type" value={type.id} checked={formData.type === type.id} readOnly />
            <span className="icon">{type.icon}</span>
            {type.label}
          </label>
        ))}
      </div>
      {errors.type && <p className="cdg-error">{errors.type}</p>}
    </>
  );
};

export default TypeScreen;