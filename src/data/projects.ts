
export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  year: string;
  contributors: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "História Social do Rio de Janeiro",
    description: "Estudo sobre as transformações sociais no Rio de Janeiro durante o século XIX",
    link: "/projetos/historia-social-rj",
    year: "2022",
    contributors: ["Bernardo Mayer Florentino", "Lucas dos Santos Mendonça"]
  },
  {
    id: "2",
    title: "Memória Oral de Comunidades Tradicionais",
    description: "Coleta e análise de relatos orais em comunidades tradicionais do litoral fluminense",
    link: "/projetos/memoria-oral",
    year: "2019",
    contributors: ["Lucas dos Santos Mendonça", "Carolina Mol de Castro"]
  },
  {
    id: "3",
    title: "Acervos Digitais em História Social",
    description: "Catalogação e disponibilização de documentos históricos em plataforma digital",
    link: "/projetos/acervos-digitais",
    year: "2014",
    contributors: ["Roberto Lima", "Natália Serenado da Silva", "Frederico Henrique de Azevedo Molter"]
  },
  {
    id: "4",
    title: "Territorialidades e Conflitos no Campo",
    description: "Mapeamento de conflitos territoriais no interior do estado do Rio de Janeiro",
    link: "/projetos/territorialidades",
    year: "2013",
    contributors: ["Adrianno Guedes Reis", "Thiago Figueiredo Martins", "Tamires Campanatti de Souza"]
  },
  {
    id: "5",
    title: "Patrimônio Cultural e Identidade",
    description: "Pesquisa sobre a relação entre patrimônio cultural e construção de identidades locais",
    link: "/projetos/patrimonio-cultural",
    year: "2012",
    contributors: ["Henrique Dias Sobral Silva", "Caroline Amorim Gil", "Mareana Barbosa Gonçalves Mathias da Silva"]
  },
  {
    id: "6",
    title: "História e Escravidão",
    description: "Estudo documental sobre a escravidão na região sudeste brasileira",
    link: "/projetos/historia-escravidao",
    year: "2011",
    contributors: ["Juliana Batista Cavalcante Miranda Tavares", "Ticiane Duarte da Silva", "Winner Soares Baptista Filho"]
  },
  {
    id: "7",
    title: "Fontes Primárias para a História Agrária",
    description: "Levantamento e análise de fontes primárias para o estudo da história agrária fluminense",
    link: "/projetos/fontes-agrarias",
    year: "2010",
    contributors: ["Afonso Henrique de Menezes"]
  }
];

export const getProjectsByUser = (userName: string): Project[] => {
  return projects.filter(project => 
    project.contributors.some(contributor => 
      contributor.toLowerCase() === userName.toLowerCase()
    )
  );
};
