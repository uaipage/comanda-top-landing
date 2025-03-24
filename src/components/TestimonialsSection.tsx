
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/context/i18nContext';

const TestimonialsSection = () => {
  const { t } = useI18n();
  
  const testimonials = [
    {
      quote: "Depois de implementar o ComandaTop, reduzimos o tempo de atendimento em 40% e aumentamos o faturamento em 25% no primeiro trimestre.",
      author: "Carlos Oliveira",
      role: "Proprietário, Cantina Bella Napoli",
      rating: 5
    },
    {
      quote: "Os garçons adoraram o app, e os clientes comentam sobre como o serviço ficou mais rápido e sem erros. Melhor investimento que fizemos!",
      author: "Ana Lucia Santos",
      role: "Gerente, Restaurante Sabores do Mar",
      rating: 5
    },
    {
      quote: "O painel gerencial me permite tomar decisões baseadas em dados reais. Agora sei exatamente quais pratos são mais lucrativos e quais precisam ser ajustados.",
      author: "Roberto Mendes",
      role: "Chef e Proprietário, Bistrô Gourmet",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 md:px-12 bg-comandatop-blue/5" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t("testimonialsTitle")}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t("testimonialsDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-xl h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <div className="flex mb-4" aria-label={`Avaliação de ${testimonial.rating} de 5 estrelas`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                <footer className="mt-auto">
                  <cite className="not-italic">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </cite>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
