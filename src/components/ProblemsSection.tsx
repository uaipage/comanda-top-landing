
import React from 'react';
import { Clock, AlertTriangle, DollarSign, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/context/i18nContext';

const ProblemsSection = () => {
  const { t } = useI18n();
  
  const problems = [
    {
      icon: <Clock className="w-10 h-10 text-red-500" aria-hidden="true" />,
      title: t("slowService"),
      description: t("slowServiceDesc")
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-red-500" aria-hidden="true" />,
      title: t("wrongOrders"),
      description: t("wrongOrdersDesc")
    },
    {
      icon: <DollarSign className="w-10 h-10 text-red-500" aria-hidden="true" />,
      title: t("inefficientBilling"),
      description: t("inefficientBillingDesc")
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" aria-hidden="true" />,
      title: t("lackOfControl"),
      description: t("lackOfControlDesc")
    }
  ];

  return (
    <section id="problems" className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-gray-50" aria-labelledby="problems-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="problems-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t("problemsTitle")}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t("problemsDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 bg-red-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  {problem.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">{problem.title}</h3>
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
