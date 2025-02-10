
import { Link } from "react-router-dom";
import { Linkedin, FileText, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const professors = [
  {
    name: "Dra. Maria Silva",
    role: "Coordenadora",
    photo: "/placeholder.svg",
    area: "Inteligência Artificial",
    linkedin: "https://linkedin.com",
    lattes: "http://lattes.cnpq.br",
    email: "maria.silva@edu.br"
  },
  {
    name: "Dr. João Santos",
    role: "Professor Pesquisador",
    photo: "/placeholder.svg",
    area: "Computação Quântica",
    linkedin: "https://linkedin.com",
    lattes: "http://lattes.cnpq.br",
    email: "joao.santos@edu.br"
  },
];

const students = [
  {
    name: "Ana Oliveira",
    role: "Doutoranda",
    photo: "/placeholder.svg",
    project: "Machine Learning aplicado à Saúde",
    linkedin: "https://linkedin.com",
    lattes: "http://lattes.cnpq.br",
    email: "ana.oliveira@edu.br"
  },
  {
    name: "Pedro Costa",
    role: "Mestrando",
    photo: "/placeholder.svg",
    project: "Processamento de Linguagem Natural",
    linkedin: "https://linkedin.com",
    lattes: "http://lattes.cnpq.br",
    email: "pedro.costa@edu.br"
  },
];

const TeamMemberCard = ({ member, isStudent = false }) => (
  <Card className="group animate-fade-up hover:shadow-lg transition-all duration-300">
    <CardHeader className="text-center">
      <Avatar className="w-32 h-32 mx-auto mb-4">
        <AvatarImage src={member.photo} alt={member.name} />
        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
      <CardDescription className="text-sm text-gray-600">
        {member.role}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-sm text-gray-600 mb-4">
        {isStudent ? (
          <p><span className="font-semibold">Projeto:</span> {member.project}</p>
        ) : (
          <p><span className="font-semibold">Área:</span> {member.area}</p>
        )}
      </div>
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
    </CardContent>
  </Card>
);

const Team = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-8 animate-fade-up">
        Nossa Equipe
      </h1>
      
      <Tabs defaultValue="professors" className="w-full animate-fade-up">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
          <TabsTrigger value="professors">Professores</TabsTrigger>
          <TabsTrigger value="students">Alunos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="professors">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professors.map((professor, index) => (
              <div key={professor.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <TeamMemberCard member={professor} />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="students">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <div key={student.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <TeamMemberCard member={student} isStudent={true} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Team;
