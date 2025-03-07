
import React from 'react';
import TeamTimeline from '../components/TeamTimeline';
import '../styles/team.css';

const ScholarHistory: React.FC = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Histórico de Bolsistas LESH</h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Apresentamos o histórico completo de bolsistas que contribuíram para o desenvolvimento 
        de pesquisas no Laboratório de Estudos de História Social ao longo dos anos.
      </p>
      
      <TeamTimeline />
      
      <div className="mt-12 text-center">
        <a 
          href="/equipe" 
          className="inline-block py-2 px-6 bg-e63946 text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          Voltar para a equipe atual
        </a>
      </div>
    </div>
  );
};

export default ScholarHistory;
