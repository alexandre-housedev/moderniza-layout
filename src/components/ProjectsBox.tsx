
import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  year: string;
}

interface ProjectsBoxProps {
  userName: string;
  projects: Project[];
}

const ProjectsBox = ({ userName, projects }: ProjectsBoxProps) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Projetos de {userName}</h3>
        <p className="text-gray-500 mt-2">Nenhum projeto encontrado para este usuário.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4 border-l-4 border-e63946">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Projetos de {userName}</h3>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.id} className="border-b border-gray-100 pb-2 last:border-0">
            <Link 
              to={project.link} 
              className="block hover:bg-gray-50 p-2 rounded transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-e63946">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                  {project.year}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsBox;
