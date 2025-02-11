
import { Link } from "react-router-dom";
import { Linkedin, FileText, Mail, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const currentTeam = [
  {
    name: "Dra. Maria Silva",
    photo: "/placeholder.svg",
    project: "Inteligência Artificial em Saúde",
    bio: "Doutora em Computação com foco em IA aplicada à saúde. Lidera pesquisas sobre diagnóstico auxiliado por inteligência artificial.",
    linkedin: "https://linkedin.com",
    lattes: "http://lattes.cnpq.br",
    email: "maria.silva@edu.br"
  },
  {
    name: "Dr. João Santos",
    photo: "/placeholder.svg",
    project: "Computação Quântica",
    bio: "Pesquisador na área de computação quântica e machine learning. Desenvolve algoritmos para otimização de processos.",
    linkedin: "https://linkedin.com",
    lattes: "http://lattes.cnpq.br",
    email: "joao.santos@edu.br"
  },
  {
    name: "Ana Oliveira",
    photo: "/placeholder.svg",
    project: "Machine Learning aplicado à Saúde",
    bio: "Doutoranda desenvolvendo pesquisas em aprendizado de máquina para diagnóstico precoce de doenças.",
    linkedin: "https://linkedin.com",
    lattes: "http://lattes.cnpq.br",
    email: "ana.oliveira@edu.br"
  }
];

const formerMembers = [
  {
    name: "Pedro Costa",
    period: "2018-2022",
    project: "Processamento de Linguagem Natural",
    bio: "Desenvolveu pesquisas em PLN e análise de sentimentos. Atualmente é pesquisador sênior em empresa de tecnologia.",
  },
  {
    name: "Lucas Silva",
    period: "2017-2021",
    project: "Machine Learning em Tempo Real",
    bio: "Trabalhou com aprendizado de máquina em tempo real. Hoje atua como cientista de dados.",
  }
];

const TeamMemberCard = ({ member, isCurrent = true }) => (
  <Card className="group animate-fade-up hover:shadow-lg transition-all duration-300">
    <CardHeader className="text-center">
      {isCurrent ? (
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src={member.photo} alt={member.name} />
          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
      ) : null}
      <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
      <CardDescription className="text-sm text-gray-600">
        {isCurrent ? null : member.period}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-sm text-gray-600 mb-4">
        <p><span className="font-semibold">Projeto:</span> {member.project}</p>
        <p className="mt-2">{member.bio}</p>
      </div>
      {isCurrent && (
        <div className="flex justify-center gap-4">
          <Link
            to={member.linkedin}
            target="_blank"
            className="text-gray-600 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            to={member.lattes}
            target="_blank"
            className="text-gray-600 hover:text-accent transition-colors"
            aria-label="Currículo Lattes"
          >
            <FileText className="h-5 w-5" />
          </Link>
          <Link
            to={`mailto:${member.email}`}
            className="text-gray-600 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      )}
    </CardContent>
  </Card>
);

const Acknowledgments = () => (
  <div className="bg-secondary/50 py-12 px-4 mt-16 rounded-lg animate-fade-up">
    <div className="max-w-2xl mx-auto text-center">
      <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
      <h2 className="text-3xl font-bold mb-4">Agradecimentos</h2>
      <p className="text-gray-600 mb-6">
        Agradecemos às agências de fomento CAPES, CNPq e FAPESP pelo apoio 
        fundamental ao desenvolvimento de nossa pesquisa e à formação de 
        nossos alunos através da concessão de bolsas de estudo.
      </p>
      <div className="flex justify-center gap-8">
        <img src="/placeholder.svg" alt="CAPES" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
        <img src="/placeholder.svg" alt="CNPq" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
        <img src="/placeholder.svg" alt="FAPESP" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-up">
        Nossa Equipe
      </h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-up">
          Equipe Atual
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTeam.map((member, index) => (
            <div 
              key={member.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-up">
          Antigos Membros
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formerMembers.map((member, index) => (
            <div 
              key={member.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamMemberCard member={member} isCurrent={false} />
            </div>
          ))}
        </div>
      </section>

      <Acknowledgments />
    </div>
  );
};

export default Team;
