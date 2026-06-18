import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import logo from '../../assets/logo.png';
import './Etape.css';

const Etape3 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useForm();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    updateFormData(id, value);
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: false }));
    }
  };

  const validateAndContinue = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.nom?.trim()) {
      newErrors.nom = 'Le nom est requis';
      isValid = false;
    }
    if (!formData.prenoms?.trim()) {
      newErrors.prenoms = 'Les prénoms sont requis';
      isValid = false;
    }
    if (!formData.telephone?.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
      isValid = false;
    }
    if (!formData.email?.trim()) {
      newErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) {
      navigate('/etape/3'); // Va vers la confirmation
    }
  };

  const fieldHasError = (fieldId) => {
    return errors[fieldId] !== undefined && errors[fieldId] !== false;
  };

  return (
    <div className="panel active er">
      <div className="card-head">
        <img src={logo} className="card-head-bg" alt="" aria-hidden="true" />
        <span className="icon">🪪</span>
        <div className="card-head-text">
          <h2>Identification du partenaire</h2>
          <p>Vos informations personnelles</p>
        </div>
      </div>
      <div className="card-body">
        <div className="step-illustration animate-fadeUp delay-1">
          <span className="illu-icon animate-float delay-2">📝</span>
        </div>

        <div className="fgroup">
          <div className="frow">
            <div className="field">
              <label>Nom *</label>
              <input 
                type="text" 
                id="nom" 
                placeholder="KOUASSI" 
                value={formData.nom || ''} 
                onChange={handleChange}
                className={fieldHasError('nom') ? 'err' : ''}
              />
              {fieldHasError('nom') && <p className="emsg show">{errors.nom}</p>}
            </div>
            <div className="field">
              <label>Prénoms *</label>
              <input 
                type="text" 
                id="prenoms" 
                placeholder="Jean-Pierre" 
                value={formData.prenoms || ''} 
                onChange={handleChange}
                className={fieldHasError('prenoms') ? 'err' : ''}
              />
              {fieldHasError('prenoms') && <p className="emsg show">{errors.prenoms}</p>}
            </div>
          </div>
          <div className="frow">
            <div className="field">
              <label>Genre</label>
              <select id="genre" value={formData.genre || ''} onChange={handleChange}>
                <option value="">Choisir</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
            </div>
            <div className="field">
              <label>Pays</label>
              <input 
                type="text" 
                id="pays" 
                placeholder="Côte d'Ivoire" 
                value={formData.pays || ''} 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="frow">
            <div className="field">
              <label>Ville</label>
              <input 
                type="text" 
                id="ville" 
                placeholder="Abidjan" 
                value={formData.ville || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Adresse</label>
              <input 
                type="text" 
                id="adresse" 
                placeholder="Cocody, Rue des Jardins" 
                value={formData.adresse || ''} 
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label>Contact *</label>
            <input 
              type="tel" 
              id="telephone" 
              placeholder="(+225) 07 00 00 00 00" 
              value={formData.telephone || ''} 
              onChange={handleChange}
              className={fieldHasError('telephone') ? 'err' : ''}
            />
            {fieldHasError('telephone') && <p className="emsg show">{errors.telephone}</p>}
          </div>
          <div className="field">
            <label>WhatsApp</label>
            <input 
              type="tel" 
              id="whatsapp" 
              placeholder="(+225) 07 00 00 00 00" 
              value={formData.whatsapp || ''} 
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>E-mail *</label>
            <input 
              type="email" 
              id="email" 
              placeholder="exemple@email.com" 
              value={formData.email || ''} 
              onChange={handleChange}
              className={fieldHasError('email') ? 'err' : ''}
            />
            {fieldHasError('email') && <p className="emsg show">{errors.email}</p>}
          </div>
        </div>
      </div>
      <div className="card-foot">
        <button className="btn-back" onClick={() => navigate('/etape/1')}>←</button>
        <button className="btn-next" onClick={validateAndContinue}>Continuer →</button>
      </div>
    </div>
  );
};

export default Etape3;