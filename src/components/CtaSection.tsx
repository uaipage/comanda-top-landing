
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { useI18n } from '@/context/i18nContext';

const CtaSection = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  
  // Estados para cada campo do formulário
  const [restaurantName, setRestaurantName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const formatName = (value: string) => {
    // Capitalizando a primeira letra de cada palavra
    return value.replace(/\b\w/g, char => char.toUpperCase());
  };

  const formatEmail = (value: string) => {
    // Converte email para minúsculas
    return value.toLowerCase();
  };

  const handleRestaurantNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantName(formatName(e.target.value));
  };

  const handleOwnerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerName(formatName(e.target.value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(formatEmail(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validação básica
    if (!restaurantName || !ownerName || !email || !phone) {
      toast({
        title: t("error") || "Erro",
        description: t("fillAllFields") || "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Simulação de envio
    toast({
      title: t("success") || "Sucesso!",
      description: t("formSubmitted") || "Seus dados foram enviados. Entraremos em contato em breve!",
    });
    
    // Limpar formulário após envio
    setRestaurantName('');
    setOwnerName('');
    setEmail('');
    setPhone('');
  };

  return (
    <section id="cta" className="py-20 px-6 md:px-12 bg-gradient-to-r from-comandatop-blue to-comandatop-blue-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme seu restaurante com tecnologia e aumente a satisfação dos seus clientes!</h2>
            <p className="text-xl opacity-90 mb-8">
              Junte-se aos milhares de restaurantes que já economizam tempo, reduzem erros e aumentam os lucros com o ComandaTop.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Comece a usar agora mesmo",
                "Suporte técnico 7 dias por semana",
                "30 dias de teste sem compromisso"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-comandatop-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Cadastre-se Agora e Tenha Acesso Imediato!</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome do restaurante</label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Ex: Cantina Bella Napoli" 
                  className="w-full text-gray-800" 
                  value={restaurantName}
                  onChange={handleRestaurantNameChange}
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="owner" className="block text-sm font-medium text-gray-700 mb-1">Seu nome</label>
                <Input 
                  id="owner" 
                  type="text" 
                  placeholder="Ex: Carlos Oliveira" 
                  className="w-full text-gray-800" 
                  value={ownerName}
                  onChange={handleOwnerNameChange}
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Ex: contato@seurestaurante.com" 
                  className="w-full text-gray-800" 
                  value={email}
                  onChange={handleEmailChange}
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(00) 00000-0000" 
                  className="w-full text-gray-800" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-required="true"
                />
              </div>
              <Button type="submit" className="w-full bg-comandatop-orange hover:bg-comandatop-orange-dark text-white font-medium py-3 px-4 rounded-lg text-lg">
                Começar teste gratuito
              </Button>
              <p className="text-xs text-gray-500 text-center mt-4">
                Ao se cadastrar, você concorda com nossos Termos de Serviço e Política de Privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
