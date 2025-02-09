
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Load image with a fade effect
    const heroImage = new Image();
    heroImage.src = "/lovable-uploads/e0a8189f-e2df-4e99-99df-acfbb2f18451.png";
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

export default Index;
