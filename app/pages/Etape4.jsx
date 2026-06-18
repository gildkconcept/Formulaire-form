import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import { inscrirePartenaire } from '../services/api';
import logo from '../../assets/logo.png';
import './Etape.css';

const Etape4 = () => {
  const navigate = useNavigate();
  const { formData, setIsSubmitting, setReference } = useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const typeMap = {
    particulier: 'Donateur particulier',
    eglise: 'Église / Communauté',
    entreprise: 'Entreprise / Organisme'
  };
  const tierMap = {
    diamant: '💎 Diamant — 1 000 000 FCFA/an',
    or: '🥇 Or — 500 000 FCFA/an',
    argent: '🥈 Argent — 250 000 FCFA/an',
    bronze: '🥉 Bronze — 120 000 FCFA/an'
  };

  const rows = [
    ['Type de donateur', typeMap[formData.type] || '—'],
    ['Formule', tierMap[formData.tier] || '—']
  ];
  const identity = [
    ['Nom', formData.nom || '—'],
    ['Prénoms', formData.prenoms || '—'],
    ['Genre', formData.genre || '—'],
    ['Téléphone', formData.telephone || '—'],
    ['WhatsApp', formData.whatsapp || '—'],
    ['E-mail', formData.email || '—'],
    ['Pays', formData.pays || '—'],
    ['Ville', formData.ville || '—'],
    ['Adresse', formData.adresse || '—']
  ];

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setIsSubmitting(true);

    try {
      const payload = {
        type_donateur: formData.type === 'particulier' ? 'Donateur particulier' :
                       formData.type === 'eglise' ? 'Église/Communauté' : 'Entreprise/Organisme',
        formule: formData.tier === 'diamant' ? 'Diamant' :
                 formData.tier === 'or' ? 'Or' :
                 formData.tier === 'argent' ? 'Argent' : 'Bronze',
        nom: formData.nom,
        prenoms: formData.prenoms,
        genre: formData.genre || 'Non précisé',
        telephone: formData.telephone,
        whatsapp: formData.whatsapp || '',
        email: formData.email,
        pays: formData.pays || 'Côte d\'Ivoire',
        ville: formData.ville || '',
        adresse: formData.adresse || ''
      };

      console.log('📤 Envoi des données:', payload);

      const result = await inscrirePartenaire(payload);
      console.log('📥 Réponse:', result);
      
      if (result.success) {
        setReference(result.data.reference || 'CDG-2026-000001');
        navigate('/succes');
      } else {
        setError(result.message || 'Erreur lors de l\'inscription');
      }
    } catch (err) {
      console.error('❌ Erreur:', err);
      setError(err.message || 'Erreur de connexion au serveur');
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="panel active er">
      <div className="card-head">
        <img src={logo} className="card-head-bg" alt="" aria-hidden="true" />
        <span className="icon">📋</span>
        <div className="card-head-text">
          <h2>Confirmation</h2>
          <p>Vérifiez vos informations</p>
        </div>
      </div>
      <div className="card-body">
        <div className="step-illustration animate-fadeUp delay-1">
          <span className="illu-icon animate-float delay-4">✅</span>
        </div>

        <div className="cdg-summary">
          <div className="cdg-summary-card">
            <h3>Engagement</h3>
            {rows.map(([label, value]) => (
              <div className="cdg-summary-row" key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="cdg-summary-card">
            <h3>Identité du partenaire</h3>
            {identity.map(([label, value]) => (
              <div className="cdg-summary-row" key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
        {error && <p className="cdg-error" style={{ textAlign: 'center', marginTop: '1rem' }}>{error}</p>}
        
        {/* Boutons avec le bon style */}
        <div className="card-foot" style={{ padding: '1rem 0 0', borderTop: 'none' }}>
          <button 
            className="btn-back" 
            onClick={() => navigate('/etape/2')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: '1.5px solid #e8e5e0',
              background: '#fff',
              color: '#888',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f8f5f2';
              e.currentTarget.style.borderColor = '#ddd';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.borderColor = '#e8e5e0';
            }}
          >
            ← Modifier
          </button>
          <button 
            className="btn-next btn-green" 
            onClick={handleSubmit} 
            disabled={loading}
            style={{
              flex: 1,
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(135deg, #1d9e75 0%, #147a5b 100%)',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              opacity: loading ? 0.5 : 1
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(29, 158, 117, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {loading ? 'Envoi en cours...' : '✓ Confirmer mon engagement'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Etape4;