
import React from 'react';

interface Scholar {
  name: string;
  institution: string;
  details: string;
  isCollective?: boolean;
}

interface YearGroup {
  year: string;
  scholars: Scholar[];
}

const scholarshipData: YearGroup[] = [
  {
    year: "2024/2022",
    scholars: [
      {
        name: "Bernardo Mayer Florentino",
        institution: "PPGH UFF",
        details: "Mestrando desde 2024, bolsista do CNPq"
      },
      {
        name: "Lucas dos Santos Mendonça",
        institution: "PPGH UFF",
        details: "Mestrando desde 2022"
      }
    ]
  },
  {
    year: "2019/2020",
    scholars: [
      {
        name: "Lucas dos Santos Mendonça",
        institution: "UFF",
        details: "Bolsista IC do CNPq"
      }
    ]
  },
  {
    year: "2015",
    scholars: [
      {
        name: "Henrique de Bem Lignani",
        institution: "UFRJ",
        details: "Bolsista IC FAPERJ"
      }
    ]
  },
  {
    year: "2014",
    scholars: [
      {
        name: "Felipe de Melo Alvarenga",
        institution: "UFRJ",
        details: "Bolsista IC FAPERJ"
      },
      {
        name: "Frederico Henrique de Azevedo Molter",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Luiz Felipe Alves",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Natália Serenado da Silva",
        institution: "UFRJ",
        details: "Bolsa IC PIBIC"
      },
      {
        name: "Roberto Lima",
        institution: "UFRJ",
        details: "Bolsista IC PIBIC - CNPq"
      }
    ]
  },
  {
    year: "2013",
    scholars: [
      {
        name: "Carolina Mol de Castro",
        institution: "UFRJ",
        details: "Bolsa IC PIBIC - CNPq"
      },
      {
        name: "Adrianno Guedes Reis",
        institution: "UFRJ",
        details: "Bolsa IC PIBIC - CNPq e Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Thiago Figueiredo Martins",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Tamires Campanatti de Souza",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Caroline dos Santos Souza",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Daniel Barbosa Oliveira",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      }
    ]
  },
  {
    year: "2012",
    scholars: [
      {
        name: "Edson Damasceno Gomes de Oliveira",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Caroline Amorim Gil",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Valéria Marques dos Santos",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Roberto Lima",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      },
      {
        name: "Henrique Dias Sobral Silva",
        institution: "UFRJ",
        details: "Bolsista IC FAPERJ"
      },
      {
        name: "Victor Vieira de Carvalho",
        institution: "UFRJ",
        details: "Bolsista IC FAPERJ"
      },
      {
        name: "Mareana Barbosa Gonçalves Mathias da Silva",
        institution: "UFRJ",
        details: "Bolsista PROEX",
        isCollective: true
      }
    ]
  },
  {
    year: "2011",
    scholars: [
      {
        name: "Juliana Batista Cavalcante Miranda Tavares",
        institution: "UFRJ",
        details: "Bolsa IC FAPERJ"
      },
      {
        name: "Ticiane Duarte da Silva",
        institution: "UFRJ",
        details: "Bolsa IC FAPERJ"
      },
      {
        name: "Winner Soares Baptista Filho",
        institution: "UFRJ",
        details: "Bolsista IC"
      }
    ]
  },
  {
    year: "2010",
    scholars: [
      {
        name: "Afonso Henrique de Menezes",
        institution: "UFRJ",
        details: "Bolsista IC FAPERJ"
      }
    ]
  }
];

const ScholarCard: React.FC<{ scholar: Scholar }> = ({ scholar }) => (
  <li className="scholar-item">
    <h3 className="scholar-name">{scholar.name}</h3>
    <div className="scholarship-details">
      <span className="institution-tag">{scholar.institution}</span>
      {scholar.details}
      {scholar.isCollective && (
        <div className="collective-project">(Projeto coletivo)</div>
      )}
    </div>
  </li>
);

const YearGroupComponent: React.FC<{ yearGroup: YearGroup }> = ({ yearGroup }) => (
  <div className="year-group">
    <h2 className="year-title">{yearGroup.year}</h2>
    <ul className="scholars-list">
      {yearGroup.scholars.map((scholar, index) => (
        <ScholarCard key={`${scholar.name}-${index}`} scholar={scholar} />
      ))}
    </ul>
  </div>
);

const TeamTimeline: React.FC = () => {
  return (
    <div className="container">
      <div className="timeline">
        {scholarshipData.map((yearGroup, index) => (
          <YearGroupComponent key={yearGroup.year} yearGroup={yearGroup} />
        ))}
      </div>
    </div>
  );
};

export default TeamTimeline;
