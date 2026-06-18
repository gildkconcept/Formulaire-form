import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    type: '',
    tier: '',
    nom: '',
    prenoms: '',
    genre: '',
    telephone: '',
    whatsapp: '',
    email: '',
    pays: '',
    ville: '',
    adresse: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reference, setReference] = useState('');

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: undefined }));
    }
  };

  const setFieldError = (key, message) => {
    setErrors(prev => ({ ...prev, [key]: message }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  const resetForm = () => {
    setFormData({
      type: '',
      tier: '',
      nom: '',
      prenoms: '',
      genre: '',
      telephone: '',
      whatsapp: '',
      email: '',
      pays: '',
      ville: '',
      adresse: ''
    });
    setReference('');
    setErrors({});
  };

  const value = {
    formData,
    updateFormData,
    errors,
    setFieldError,
    clearErrors,
    isSubmitting,
    setIsSubmitting,
    reference,
    setReference,
    resetForm
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};