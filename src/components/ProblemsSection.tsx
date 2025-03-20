
import React from 'react';
import { Clock, AlertTriangle, DollarSign, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProblemsSection = () => {
  const problems = [
    {
      icon: <Clock className="w-10 h-10 text-red-500" />,
      title: "Demora no atendimento",
      description: "Clientes aguardam mais do que deveriam para serem atendidos, causando insatisfação e redução no fluxo de mesas."
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-red-500" />,
      title: "Pedidos errados",
      description: "Anotações manuais e comunicação falha entre salão e cozinha resultam em pedidos trocados e retrabalho."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-red-500" />,
      title: "Fechamento de contas ineficiente",
      description: "Calcular contas manualmente causa erros, atrasos e gera desconfiança dos clientes na hora do pagamento."
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Falta de controle gerencial",
      description: "Sem dados precisos sobre vendas e desempenho, é impossível tomar decisões estratégicas para melhorar o negócio."
    }
  ];

  return (
    <section id="problems" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Problemas que atrapalham seu restaurante</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Restaurantes enfrentam desafios diários que impactam diretamente na experiência do cliente e na lucratividade do negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 bg-red-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-center">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
