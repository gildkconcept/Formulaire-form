import React from 'react';
import { useForm } from '../context/FormContext';
import './IdentiteScreen.css';

const IdentiteScreen = () => {
  const { formData, updateFormData, errors, goToStep } = useForm();

  const handleChange = (e) => {
    const { id, value } = e.target;
    updateFormData(id, value);
  };

  const validateAndContinue = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.nom?.trim()) { newErrors.nom = 'Le nom est requis'; isValid = false; }
    if (!formData.prenoms?.trim()) { newErrors.prenoms = 'Les prénoms sont requis'; isValid = false; }
    if (!formData.telephone?.trim()) { newErrors.telephone = 'Le téléphone est requis'; isValid = false; }
    if (!formData.email?.trim()) { newErrors.email = 'L\'email est requis'; isValid = false; }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
      isValid = false;
    }

    // Mettre à jour les erreurs dans le contexte
    Object.keys(newErrors).forEach(key => {
      // Ici on pourrait utiliser setFieldError
    });

    if (isValid) {
      goToStep(4);
    }
  };

  const fields = [
    { id: 'nom', label: 'Nom *', type: 'text', placeholder: 'Ex : KOUASSI' },
    { id: 'prenoms', label: 'Prénoms *', type: 'text', placeholder: 'Ex : Jean-Pierre' },
    { id: 'genre', label: 'Genre', type: 'select', options: ['', 'Homme', 'Femme'] },
    { id: 'telephone', label: 'Téléphone *', type: 'tel', placeholder: '(+225) 07 00 00 00 00' },
    { id: 'whatsapp', label: 'WhatsApp', type: 'tel', placeholder: '(+225) 07 00 00 00 00' },
    { id: 'email', label: 'E-mail *', type: 'email', placeholder: 'exemple@email.com' },
    { id: 'pays', label: 'Pays', type: 'text', placeholder: 'Ex : Côte d\'Ivoire' },
    { id: 'ville', label: 'Ville', type: 'text', placeholder: 'Ex : Abidjan' }
  ];

  const renderField = (field) => {
    if (field.type === 'select') {
      return (
        <select
          id={field.id}
          value={formData[field.id] || ''}
          onChange={handleChange}
          className={errors[field.id] ? 'error' : ''}
        >
          {field.options.map(opt => (
            <option key={opt || 'empty'} value={opt}>{opt || '— Sélectionner —'}</option>
          ))}
        </select>
      );
    }
    return (
      <input
        type={field.type}
        id={field.id}
        value={formData[field.id] || ''}
        onChange={handleChange}
        placeholder={field.placeholder}
        className={errors[field.id] ? 'error' : ''}
      />
    );
  };

  const pairs = [
    ['nom', 'prenoms'],
    ['genre', 'telephone'],
    ['whatsapp', 'email'],
    ['pays', 'ville']
  ];

  return (
    <>
      <div className="cdg-section-title">Identification du partenaire</div>
      <div className="cdg-field-grid">
        {pairs.map((pair, idx) => (
          <div className="cdg-two-col" key={idx}>
            {pair.map(id => {
              const field = fields.find(f => f.id === id);
              if (!field) return null;
              return (
                <div className={`cdg-field ${errors[id] ? 'has-error' : ''}`} key={id}>
                  <label>{field.label}</label>
                  {renderField(field)}
                  {errors[id] && <span className="err-msg">{errors[id]}</span>}
                </div>
              );
            })}
          </div>
        ))}
        <div className="cdg-field">
          <label>Adresse</label>
          <input
            type="text"
            id="adresse"
            value={formData.adresse || ''}
            onChange={handleChange}
            placeholder="Ex : Cocody, Rue des Jardins"
            className={errors.adresse ? 'error' : ''}
          />
          {errors.adresse && <span className="err-msg">{errors.adresse}</span>}
        </div>
      </div>
      <div className="cdg-nav" style={{ padding: '1rem 0 0' }}>
        <button className="cdg-btn cdg-btn-secondary" onClick={() => goToStep(2)}>
          ← Retour
        </button>
        <button className="cdg-btn cdg-btn-primary" onClick={validateAndContinue}>
          Vérifier →
        </button>
      </div>
    </>
  );
};

export default IdentiteScreen;