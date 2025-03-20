
import React from 'react';
import { Check, Smartphone, Laptop, BarChart4 } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Smartphone className="w-8 h-8 text-mesatech-blue" />,
      title: "App para garçons",
      benefits: [
        "Anotação digital de pedidos sem erros",
        "Comunicação instantânea com a cozinha",
        "Separação de contas por cliente com facilidade",
        "Sugestão de itens complementares",
      ]
    },
    {
      icon: <Laptop className="w-8 h-8 text-mesatech-blue" />,
      title: "PDV integrado",
      benefits: [
        "Fechamento de contas em segundos",
        "Integração com maquininhas de cartão",
        "Controle de comandas e mesas em tempo real",
        "Divisão de contas simplificada",
      ]
    },
    {
      icon: <BarChart4 className="w-8 h-8 text-mesatech-blue" />,
      title: "Painel gerencial",
      benefits: [
        "Relatórios de vendas em tempo real",
        "Análise de produtos mais vendidos",
        "Identificação de horários de pico",
        "Controle de estoque automatizado",
      ]
    }
  ];

  return (
    <section id="solution" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A solução completa para seu restaurante</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O MesaTech transforma a experiência do seu restaurante com um sistema integrado que elimina problemas operacionais e aumenta sua lucratividade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-mesatech-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-mesatech-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
