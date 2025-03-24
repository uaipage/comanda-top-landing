
import React, { createContext, useContext, useState } from 'react';

// Tipo para as traduções
type Translations = {
  [key: string]: string;
};

// Dicionário inicial com português como padrão
const ptBR: Translations = {
  // Navbar
  resources: "Recursos",
  pricing: "Preços",
  testimonials: "Depoimentos",
  faq: "FAQ",
  login: "Entrar",
  watchDemo: "Ver demonstração",
  
  // Hero Section
  completeSystemForRestaurants: "Sistema completo para restaurantes",
  manageRestaurantEfficiently: "Gerencie Seu Restaurante com Eficiência e Sem Erros!",
  transformService: "Transforme o atendimento, elimine falhas nos pedidos e agilize os pagamentos com nossa solução intuitiva.",
  tryForFree: "Experimente Gratuitamente",
  restaurants: "restaurantes",
  
  // Feature cards
  agility: "Agilidade",
  agilityDesc: "Atendimento até 40% mais rápido com sistema de pedidos integrado.",
  financialControl: "Controle financeiro",
  financialControlDesc: "Visão completa de vendas, custos e lucratividade em tempo real.",
  security: "Segurança",
  securityDesc: "Proteção de dados com backup automático e controle de acesso.",
  
  // Problems Section
  problemsTitle: "Problemas que atrapalham seu restaurante",
  problemsDesc: "Restaurantes enfrentam desafios diários que impactam diretamente na experiência do cliente e na lucratividade do negócio.",
  slowService: "Demora no atendimento",
  slowServiceDesc: "Clientes aguardam mais do que deveriam para serem atendidos, causando insatisfação e redução no fluxo de mesas.",
  wrongOrders: "Pedidos errados",
  wrongOrdersDesc: "Anotações manuais e comunicação falha entre salão e cozinha resultam em pedidos trocados e retrabalho.",
  inefficientBilling: "Fechamento de contas ineficiente",
  inefficientBillingDesc: "Calcular contas manualmente causa erros, atrasos e gera desconfiança dos clientes na hora do pagamento.",
  lackOfControl: "Falta de controle gerencial",
  lackOfControlDesc: "Sem dados precisos sobre vendas e desempenho, é impossível tomar decisões estratégicas para melhorar o negócio.",
  
  // Solution Section
  solutionTitle: "A solução completa para seu restaurante",
  solutionDesc: "O ComandaTop transforma a experiência do seu restaurante com um sistema integrado que elimina problemas operacionais e aumenta sua lucratividade.",
  waiterApp: "App para garçons",
  integratedPOS: "PDV integrado",
  managerialPanel: "Painel gerencial",
  
  // Waiter App Benefits
  digitalOrderTaking: "Anotação digital de pedidos sem erros",
  instantCommunication: "Comunicação instantânea com a cozinha",
  accountSeparation: "Separação de contas por cliente com facilidade",
  complementaryItems: "Sugestão de itens complementares",
  
  // POS Benefits
  quickCheckout: "Fechamento de contas em segundos",
  cardMachineIntegration: "Integração com maquininhas de cartão",
  tableControl: "Controle de comandas e mesas em tempo real",
  simplifiedBillDivision: "Divisão de contas simplificada",
  
  // Managerial Panel Benefits
  realTimeSalesReports: "Relatórios de vendas em tempo real",
  bestSellerAnalysis: "Análise de produtos mais vendidos",
  peakHoursIdentification: "Identificação de horários de pico",
  automatedInventory: "Controle de estoque automatizado",
  
  // Testimonials Section
  testimonialsTitle: "O que nossos clientes dizem",
  testimonialsDesc: "Restaurantes de todos os tamanhos já transformaram suas operações com o ComandaTop.",
  
  // Comparison Section
  comparisonTitle: "Compare e veja a diferença",
  comparisonDesc: "Entenda como a gestão digital com ComandaTop transforma a operação do seu restaurante em comparação com métodos tradicionais.",
  serviceSpeed: "Velocidade de atendimento",
  manualNotes: "Anotações manuais geram atrasos",
  instantTransmission: "Pedidos transmitidos instantaneamente",
  orderAccuracy: "Precisão dos pedidos",
  frequentErrors: "Erros frequentes de comunicação",
  digitalRecord: "Registro digital elimina confusões",
  closingTime: "Tempo de fechamento",
  minutesToClose: "10-15 minutos para fechar mesa",
  oneMinuteClose: "Fechamento em apenas 1 minuto",
  financialControlComparison: "Controle financeiro",
  hardToTrack: "Difícil rastrear vendas e custos",
  detailedReports: "Relatórios detalhados em tempo real",
  customerExperience: "Experiência do cliente",
  frustrationsWithDelays: "Frustrações com atrasos e erros",
  fluidExperience: "Experiência fluida e satisfatória",
  
  // FAQ Section
  faqTitle: "Perguntas Frequentes",
  faqDesc: "Tire suas dúvidas sobre o ComandaTop e descubra como podemos ajudar seu restaurante.",
  
  // CTA Section
  ctaTitle: "Transforme seu restaurante agora",
  ctaDesc: "Junte-se a mais de 2.000 restaurantes que já melhoraram suas operações com o ComandaTop.",
  startFreeTest: "Iniciar teste gratuito",
  contactSales: "Falar com consultor",
  
  // Footer
  product: "Produto",
  features: "Recursos",
  price: "Preços",
  company: "Empresa",
  about: "Sobre nós",
  careers: "Carreiras",
  contact: "Contato",
  support: "Suporte",
  docs: "Documentação",
  tutorial: "Tutorial",
  status: "Status",
  legal: "Legal",
  terms: "Termos",
  privacy: "Privacidade"
};

// Interface para o contexto
interface I18nContextType {
  t: (key: string) => string;
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
}

// Criação do contexto
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider do contexto
export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('pt-BR');
  const [translations, setTranslations] = useState<{[key: string]: Translations}>({
    'pt-BR': ptBR,
  });

  // Função para traduzir
  const t = (key: string): string => {
    const langTranslations = translations[currentLanguage];
    if (!langTranslations) return key;
    return langTranslations[key] || key;
  };

  // Função para mudar o idioma
  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
    }
  };

  return (
    <I18nContext.Provider value={{ t, currentLanguage, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

// Hook para usar o contexto
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
