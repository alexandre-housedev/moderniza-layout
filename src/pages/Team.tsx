import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProjectsBox from "@/components/ProjectsBox";
import { getProjectsByUser } from "@/data/projects";

const students = [
  {
    name: "Bernardo Mayer Florentino",
    photo: "/placeholder.svg",
    title: "Licenciando e Bacharel em História pela Universidade Federal Fluminense",
    description: "Apaixonado por história social e metodologias colaborativas",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Lucas dos Santos Mendonça",
    photo: "/placeholder.svg",
    title: "Licenciado e Bacharel em História pela Universidade Federal Fluminense",
    description: "Focado na pesquisa sobre culturas tradicionais",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
];

const coordination = [
  {
    name: "Manoela Pedroza",
    photo: "/placeholder.svg",
    title: "Professora de História",
    bio: "Bacharel e licenciada em História pela Universidade Federal Fluminense (2000), com mestrado em História pela Universidade Federal do Rio Grande do Sul (2003), especialização em História do Brasil pela Universidade Cândido Mendes (2005), doutorado em Ciências Sociais pela UNICAMP (2008) e doutorado em história pela Université Paris IV Sorbonne (2010).",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "email@example.com"
  }
];

const collaborators = [
  {
    name: "Prof. Dr. José-Miguel Lana Berasain",
    photo: "/placeholder.svg",
    bio: "Doutor em História pela Universidade de Zaragoza e pelo Instituto e Instituições Econômicas da Universidade Pública de Navarra. Entre 1991 e 1997, atualizou os temas de Terra e Senhoria da Universidade de Zaragoza e, em 1997, ingressou no Departamento de Geografia e História da Universidade Pública de Navarra.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Prof. Me. Edite Moraes da Costa",
    photo: "/placeholder.svg",
    bio: "Docente no Doutorado em História do Programa de Pós-Graduação em História da Universidade Federal Rural do Rio de Janeiro - PPHR/UFRRJ. Bolsista de Extensão Desenvolvimento, através entre a NCSN, Instituto Nacional de Colonização e Administração.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
];

const MemberCard = ({ member, type = "student" }) => {
  const [showProjects, setShowProjects] = useState(false);
  const projects = getProjectsByUser(member.name);
  
  return (
    <Card className="group animate-fade-up hover:shadow-lg transition-all duration-300">
      <CardHeader className="text-center">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src={member.photo} alt={member.name} />
          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
        {type === "student" && (
          <CardDescription className="text-sm text-gray-600 mt-2">
            {member.title}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          {type === "student" ? member.description : member.bio}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Link
              to={member.linkedin}
              target="_blank"
              className="text-gray-600 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              to={member.instagram}
              target="_blank"
              className="text-gray-600 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
          {projects.length > 0 && (
            <button 
              onClick={() => setShowProjects(!showProjects)}
              className="text-sm text-e63946 hover:underline"
            >
              {showProjects ? 'Ocultar projetos' : 'Ver projetos'}
            </button>
          )}
        </div>
        
        {showProjects && <ProjectsBox userName={member.name} projects={projects} />}
      </CardContent>
    </Card>
  );
};

const Team = () => {
  return (
    <div className="container py-12">
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 animate-fade-up">
          Alunos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {students.map((student, index) => (
            <div 
              key={student.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MemberCard member={student} type="student" />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 animate-fade-up">
          Coordenação
        </h2>
        <div className="max-w-3xl mx-auto">
          {coordination.map((coord, index) => (
            <div 
              key={coord.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MemberCard member={coord} type="coordination" />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 animate-fade-up">
          Amigos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Agradecemos a todos os amigos que colaboraram e apoiaram o laboratório ao longo do tempo.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {collaborators.map((collab, index) => (
            <div 
              key={collab.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MemberCard member={collab} type="collaborator" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-12 px-4 rounded-lg animate-fade-up">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Agradecimento</h2>
          <p className="text-gray-600 mb-6">
            Aos que já passaram, O LEHS - UFF é um espaço feito que vem sendo ampliado desde 2010 por iniciativas diversas de diferentes pessoas, cada uma do seu jeito, mas todas criativas, com espírito crítico, solidárias e com disposição para o trabalho do campo. Todos os alunos que procuram inovaram sua contribuição. Agradecemos e continuamos somando!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;
