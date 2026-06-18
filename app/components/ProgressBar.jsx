import React from 'react';

const ProgressBar = ({ currentStep, totalSteps = 4 }) => {
  return (
    <div className="cdg-steps" style={{ marginBottom: '1.5rem' }}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="cdg-step" style={{ flex: 1 }}>
            <div className={`cdg-step-dot ${index < currentStep ? 'done' : index === currentStep ? 'active' : ''}`}>
              {index < currentStep ? '✓' : index + 1}
            </div>
          </div>
          {index < totalSteps - 1 && <div className="cdg-step-sep"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;