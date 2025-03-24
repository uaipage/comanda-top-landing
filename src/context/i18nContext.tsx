
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
  manageRestaurantEfficiently: "Gerencie seu restaurante com eficiência!",
  transformService: "Elimine falhas e agilize pagamentos com nossa solução.",
  tryForFree: "Experimente gratuitamente",
  restaurants: "restaurantes",

  // Feature cards
  agility: "Agilidade",
  agilityDesc: "Atendimento 40% mais rápido com pedidos integrados.",
  financialControl: "Gestão Financeira",
  financialControlDesc: "Visão completa de vendas e custos em tempo real.",
  security: "Segurança",
  securityDesc: "Proteção de dados com backup e controle de acesso.",

  // Problems Section
  problemsTitle: "Desafios no seu restaurante",
  problemsDesc: "Restaurantes enfrentam problemas que impactam a experiência do cliente e a lucratividade.",
  slowService: "Demora no atendimento",
  slowServiceDesc: "Clientes aguardam mais do que deveriam, causando insatisfação.",
  wrongOrders: "Pedidos errados",
  wrongOrdersDesc: "Anotações manuais e comunicação falha entre salão e cozinha geram erros.",
  inefficientBilling: "Fechamento de contas ineficiente",
  inefficientBillingDesc: "Erros e atrasos no cálculo das contas prejudicam a confiança do cliente.",
  lackOfControl: "Falta de controle gerencial",
  lackOfControlDesc: "Sem dados precisos, não é possível tomar decisões estratégicas.",

  // Solution Section
  solutionTitle: "A solução completa para seu restaurante",
  solutionDesc: "O ComandaTop elimina problemas operacionais e aumenta a lucratividade.",
  waiterApp: "Aplicativo de Atendimento",
  integratedPOS: "PDV Integrado",
  managerialPanel: "Painel Gerencial",

  // Waiter App Benefits
  digitalOrderTaking: "Pedidos digitais sem erros",
  instantCommunication: "Comunicação instantânea com a cozinha",
  accountSeparation: "Separação de contas por cliente",
  complementaryItems: "Sugestão de itens complementares",

  // POS Benefits
  quickCheckout: "Fechamento rápido de contas",
  cardMachineIntegration: "Integração com maquininhas de cartão",
  tableControl: "Controle de mesas em tempo real",
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
  comparisonDesc: "Veja como a gestão digital do ComandaTop transforma a operação do seu restaurante.",
  serviceSpeed: "Velocidade de atendimento",
  manualNotes: "Anotações manuais geram atrasos",
  instantTransmission: "Pedidos transmitidos instantaneamente",
  orderAccuracy: "Precisão dos pedidos",
  frequentErrors: "Erros frequentes de comunicação",
  digitalRecord: "Registro digital elimina confusões",
  closingTime: "Tempo de fechamento",
  minutesToClose: "10-15 minutos para fechar mesa",
  oneMinuteClose: "Fechamento em apenas 1 minuto",
  financialControlComparison: "Gestão financeira",
  hardToTrack: "Difícil rastrear vendas e custos",
  detailedReports: "Relatórios detalhados em tempo real",
  customerExperience: "Experiência do cliente",
  frustrationsWithDelays: "Frustrações com atrasos e erros",
  fluidExperience: "Experiência fluida e satisfatória",

  // FAQ Section
  faqTitle: "Perguntas Frequentes",
  faqDesc: "Tire suas dúvidas sobre o ComandaTop e descubra como podemos ajudar.",

  // CTA Section
  ctaTitle: "Transforme seu restaurante agora",
  ctaDesc: "Junte-se a mais de 2.000 restaurantes que já melhoraram suas operações.",
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
  const [translations, setTranslations] = useState<{ [key: string]: Translations }>({
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
