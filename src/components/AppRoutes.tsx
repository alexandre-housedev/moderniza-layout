
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import Team from '../pages/Team';
import ScholarHistory from '../pages/ScholarHistory';
import NotFound from '../pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/equipe" element={<Team />} />
      <Route path="/historico-bolsistas" element={<ScholarHistory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
