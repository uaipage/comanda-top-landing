
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Como funciona o cadastro?",
      answer: "O processo é simples, com um formulário básico que leva apenas alguns minutos para preencher. Você terá acesso imediato ao sistema após o cadastro, sem necessidade de configurações complexas."
    },
    {
      question: "O sistema é compatível com meu restaurante?",
      answer: "Sim, o ComandaTop funciona em qualquer tipo de estabelecimento gastronômico (restaurantes, bares, cafeterias, food trucks) e é compatível com qualquer dispositivo, seja smartphone, tablet ou desktop."
    },
    {
      question: "É necessário treinamento para usar o sistema?",
      answer: "Não! A interface do ComandaTop é simples e intuitiva, projetada para ser usada sem treinamento extensivo. Oferecemos tutoriais rápidos dentro do aplicativo que sua equipe pode acessar a qualquer momento."
    },
    {
      question: "O ComandaTop oferece suporte técnico?",
      answer: "Sim, contamos com suporte técnico completo disponível via chat, e-mail ou telefone. Nossa equipe está sempre pronta para ajudar com qualquer dúvida ou necessidade que você possa ter."
    },
    {
      question: "É possível integrar com outros sistemas que já uso?",
      answer: "Sim, o ComandaTop oferece integrações com os principais sistemas de gestão, contabilidade e delivery do mercado. Nossa API aberta também permite desenvolver integrações personalizadas."
    },
    {
      question: "Quanto tempo leva para implementar o sistema no meu restaurante?",
      answer: "A maioria dos nossos clientes consegue implementar o ComandaTop em menos de 24 horas. O processo é simples e nossa equipe está disponível para auxiliar em cada etapa."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o ComandaTop e descubra como podemos ajudar seu restaurante.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
