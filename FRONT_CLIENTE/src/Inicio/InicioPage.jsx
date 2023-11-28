import React, { useState } from 'react';
import { MainSectionPage } from './components/MainSectionPage';
import { EspecialidadesPage } from './components/EspecialidadesPage';
import { FooterPage } from './components/FooterPage';
export const InicioPage = () => {
  return (
    <div>
      <MainSectionPage />
      <br/>
      <EspecialidadesPage />
      <br/>
      <FooterPage />
    </div>
  )
};
