
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonItems = [
    {
      aspect: "Velocidade de atendimento",
      traditional: "Anotações manuais geram atrasos",
      digital: "Pedidos transmitidos instantaneamente"
    },
    {
      aspect: "Precisão dos pedidos",
      traditional: "Erros frequentes de comunicação",
      digital: "Registro digital elimina confusões"
    },
    {
      aspect: "Tempo de fechamento",
      traditional: "10-15 minutos para fechar mesa",
      digital: "Fechamento em apenas 1 minuto"
    },
    {
      aspect: "Controle financeiro",
      traditional: "Difícil rastrear vendas e custos",
      digital: "Relatórios detalhados em tempo real"
    },
    {
      aspect: "Experiência do cliente",
      traditional: "Frustrações com atrasos e erros",
      digital: "Experiência fluida e satisfatória"
    }
  ];

  return (
    <section id="comparison" className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare e veja a diferença</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entenda como a gestão digital com ComandaTop transforma a operação do seu restaurante em comparação com métodos tradicionais.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-gray-100 rounded-tl-lg">Aspecto</th>
                <th className="p-4 bg-gray-200 text-center">Gestão Tradicional</th>
                <th className="p-4 bg-mesatech-blue text-white text-center rounded-tr-lg">Gestão com ComandaTop</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-4 font-medium border-b border-gray-200">{item.aspect}</td>
                  <td className="p-4 text-center border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      <X className="w-5 h-5 text-red-500 mr-2" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{item.digital}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
