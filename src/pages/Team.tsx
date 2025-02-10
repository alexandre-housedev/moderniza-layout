import { Link } from "react-router-dom";
import { Linkedin, FileText, Mail, Award, Calendar } from "lucide-react";
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

const scholarshipStudents = [
  {
    year: "2024",
    students: [
      {
        name: "Lucas Silva",
        project: "Machine Learning em Tempo Real",
        type: "CAPES"
      },
      {
        name: "Maria Santos",
        project: "Redes Neurais Aplicadas",
        type: "CNPq"
      }
    ]
  },
  {
    year: "2023",
    students: [
      {
        name: "João Lima",
        project: "Processamento de Imagens",
        type: "FAPESP"
      }
    ]
  }
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

const Timeline = () => (
  <div className="mt-16 px-4">
    <h2 className="text-3xl font-bold text-center mb-8 animate-fade-up">
      Alunos Bolsistas
    </h2>
    <div className="space-y-8">
      {scholarshipStudents.map((yearGroup, index) => (
        <div 
          key={yearGroup.year}
          className="relative pl-8 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-accent absolute -left-3" />
            <div className="ml-2 text-xl font-semibold">{yearGroup.year}</div>
          </div>
          <div className="space-y-4">
            {yearGroup.students.map((student) => (
              <Card key={student.name} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.project}</p>
                  <span className="inline-block mt-2 text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                    {student.type}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
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

      <Timeline />
      <Acknowledgments />
    </div>
  );
};

export default Team;
