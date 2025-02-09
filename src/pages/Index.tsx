import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Bell, BookOpen, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [showEventAlert, setShowEventAlert] = useState(true);

  useEffect(() => {
    // Load image with a fade effect
    const heroImage = new Image();
    heroImage.src = "/lovable-uploads/e0a8189f-e2df-4e99-99df-acfbb2f18451.png";

    // Show event toast
    if (upcomingEvents.length > 0) {
      toast({
        title: "Próximo Evento",
        description: `${upcomingEvents[0].title} - ${upcomingEvents[0].date}`,
        duration: 5000,
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <img
          src="/lovable-uploads/e0a8189f-e2df-4e99-99df-acfbb2f18451.png"
          alt="LESH Hero"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up">
            Bem-Vindo ao LESH!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Oferecemos um fórum para reflexão sobre o Experimentação em História Social.
          </p>
          <Link
            to="/projetos"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-accent hover:bg-accent/90 rounded-full transition-colors duration-200 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Conheça nossos projetos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Event Alert */}
      {showEventAlert && upcomingEvents.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Alert className="bg-accent/10 border-accent">
            <Bell className="h-5 w-5 text-accent" />
            <AlertTitle>Próximo Evento</AlertTitle>
            <AlertDescription className="flex items-center justify-between">
              <span>{upcomingEvents[0].title} - {upcomingEvents[0].date}</span>
              <button 
                onClick={() => setShowEventAlert(false)}
                className="text-sm text-accent hover:underline"
              >
                Fechar
              </button>
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Events Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <Calendar className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">Eventos em Destaque</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button 
                  className="text-accent hover:underline flex items-center gap-1"
                  onClick={() => {
                    toast({
                      title: "Detalhes do Evento",
                      description: `${event.title} - ${event.description}`,
                    });
                  }}
                >
                  Mais informações <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500">Coordenador: {project.coordinator}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-12">
            <BookOpen className="h-8 w-8 text-accent" />
            <h2 className="text-3xl font-bold">Biblioteca Digital</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div
                key={book.title}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <Link
                  to={book.link}
                  className="text-accent hover:underline text-sm flex items-center gap-1"
                >
                  Acessar <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const projects = [
  {
    title: "Teoria Multidisciplinar do Direito",
    description: "Pesquisa sobre as interseções entre diferentes áreas do direito.",
    coordinator: "Marietta Auer"
  },
  {
    title: "Regimes Históricos de Normatividade",
    description: "Estudo sobre a evolução dos sistemas normativos.",
    coordinator: "Thomas Duve"
  },
  {
    title: "História Jurídica Comparada",
    description: "Análise comparativa de sistemas jurídicos históricos.",
    coordinator: "Stefan Vogenauer"
  }
];

const upcomingEvents = [
  {
    title: "Seminário Internacional de História Social",
    date: "15 de Maio, 2024",
    description: "Discussão sobre metodologias contemporâneas em história social."
  },
  {
    title: "Workshop: Análise de Documentos Históricos",
    date: "22 de Maio, 2024",
    description: "Técnicas avançadas para análise de documentos históricos."
  },
  {
    title: "Palestra: Perspectivas em História Social",
    date: "30 de Maio, 2024",
    description: "Novas abordagens e perspectivas em história social."
  }
];

const books = [
  {
    title: "Teoria da História: Princípios e Conceitos Fundamentais",
    author: "Maria Silva",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500",
    link: "/biblioteca/teoria-historia"
  },
  {
    title: "Metodologia da Pesquisa em História Social",
    author: "João Santos",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500",
    link: "/biblioteca/metodologia-pesquisa"
  },
  {
    title: "História Social: Uma Introdução",
    author: "Ana Oliveira",
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500",
    link: "/biblioteca/introducao-historia-social"
  },
  {
    title: "Documentação Histórica: Análise e Interpretação",
    author: "Pedro Costa",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
    link: "/biblioteca/documentacao-historica"
  }
];

export default Index;
