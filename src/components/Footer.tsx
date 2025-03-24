
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">
                Comanda<span className="text-comandatop-orange">Top</span>
              </span>
            </div>
            <p className="mb-6 opacity-80">
              Transformando a gestão de restaurantes com tecnologia intuitiva e eficiente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-comandatop-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-comandatop-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-comandatop-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-comandatop-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Soluções</h3>
            <ul className="space-y-3">
              {['App para Garçons', 'PDV Integrado', 'Painel Gerencial', 'Controle de Estoque', 'Marketing Digital'].map((item, index) => (
                <li key={index}><a href="#" className="hover:text-comandatop-orange transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
            <ul className="space-y-3">
              {['Sobre nós', 'Cases de Sucesso', 'Blog', 'Carreiras', 'Parcerias'].map((item, index) => (
                <li key={index}><a href="#" className="hover:text-comandatop-orange transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-comandatop-orange" />
                <a href="mailto:contato@comandatop.com.br">contato@comandatop.com.br</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-comandatop-orange" />
                <a href="tel:+55119999-9999">(11) 9999-9999</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ComandaTop. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
