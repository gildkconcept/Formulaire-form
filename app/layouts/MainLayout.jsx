import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './MainLayout.css';

const MainLayout = () => {
  const location = useLocation();
  const steps = ['Accueil', 'Type', 'Soutien', 'Infos', 'Confirmation'];
  const stepNames = ['Accueil', 'Type de donateur', 'Formule de soutien', 'Identification', 'Confirmation'];
  
  const getCurrentStep = () => {
    const path = location.pathname;
    if (path === '/') return 0;           // Accueil
    if (path === '/etape/1') return 1;    // Type
    if (path === '/etape/2') return 2;    // Formule
    if (path === '/etape/3') return 3;    // Identité
    if (path === '/etape/4') return 4;    // Confirmation
    if (path === '/succes') return 5;     // Succès
    return 0;
  };

  const currentStep = getCurrentStep();
  const isSuccessStep = currentStep === 5;

  return (
    <div className="page">
      {/* Éléments décoratifs */}
      <div className="deco-dots"></div>
      <div className="deco-dots-left"></div>
      <div className="deco-circle deco-circle-1"></div>
      <div className="deco-circle deco-circle-2"></div>

      {/* Logo en arrière-plan */}
      <img src={logo} className="bg-logo" alt="" aria-hidden="true" />

      {/* Logo area */}
      <div className="logo-area">
        <img src={logo} className="logo" alt="Club de la Grâce" />
        <h1>Engagement volontaire</h1>
        <p>Partenaires d'impact · Club de la Grâce</p>
      </div>

      {/* Progress label - caché sur la page succès */}
      {!isSuccessStep && (
        <div className="progress-label">
          <span>Étape {currentStep + 1} sur {steps.length}</span>
          <span>{stepNames[currentStep]}</span>
        </div>
      )}

      {/* Stepper - caché sur la page succès */}
      {!isSuccessStep && (
        <div className="stepper">
          {steps.map((label, index) => (
            <React.Fragment key={index}>
              <div className="step-node">
                <div className={`step-circle ${index < currentStep ? 'done' : index === currentStep ? 'active' : ''}`}>
                  {index < currentStep ? (
                    <svg viewBox="0 0 16 16" fill="none">
                      <polyline points="2,8 6,12 14,4" strokeLinecap="round" strokeLinejoin="round" stroke="#3B6D11" strokeWidth="2.5"/>
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`step-label ${index === currentStep ? 'active' : index < currentStep ? 'done' : ''}`}>
                  {label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="step-conn">
                  <div className="step-conn-fill" style={{ width: index < currentStep ? '100%' : '0' }}></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="card">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;