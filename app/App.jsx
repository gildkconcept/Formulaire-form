import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import MainLayout from './layouts/MainLayout';
import Etape1 from './pages/Etape1';
import Etape2 from './pages/Etape2';
import Etape3 from './pages/Etape3';
import Etape4 from './pages/Etape4';
import Confirmation from './components/ConfirmationScreen';
import Succes from './pages/Succes';


function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Etape1 />} />
            <Route path="etape/1" element={<Etape2 />} />
            <Route path="etape/2" element={<Etape3 />} />
            <Route path="etape/3" element={<Etape4 />} />
            <Route path="etape/4" element={<Confirmation />} />
            <Route path="succes" element={<Succes />} />
          </Route>
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;