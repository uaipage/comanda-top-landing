
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-100 py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-mesatech-blue">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Página não encontrada</p>
          <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
            A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
          </p>
          <a 
            href="/" 
            className="bg-mesatech-blue hover:bg-mesatech-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-mesatech-blue focus:ring-offset-2"
            aria-label="Voltar para a página inicial"
          >
            Voltar para a página inicial
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
