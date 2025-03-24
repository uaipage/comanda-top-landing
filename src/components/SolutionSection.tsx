
import React from 'react';
import { Check, Smartphone, Laptop, BarChart4 } from 'lucide-react';
import { useI18n } from '@/context/i18nContext';

const SolutionSection = () => {
  const { t } = useI18n();
  
  const solutions = [
    {
      icon: <Smartphone className="w-8 h-8 text-mesatech-blue" aria-hidden="true" />,
      title: t("waiterApp"),
      benefits: [
        t("digitalOrderTaking"),
        t("instantCommunication"),
        t("accountSeparation"),
        t("complementaryItems"),
      ]
    },
    {
      icon: <Laptop className="w-8 h-8 text-mesatech-blue" aria-hidden="true" />,
      title: t("integratedPOS"),
      benefits: [
        t("quickCheckout"),
        t("cardMachineIntegration"),
        t("tableControl"),
        t("simplifiedBillDivision"),
      ]
    },
    {
      icon: <BarChart4 className="w-8 h-8 text-mesatech-blue" aria-hidden="true" />,
      title: t("managerialPanel"),
      benefits: [
        t("realTimeSalesReports"),
        t("bestSellerAnalysis"),
        t("peakHoursIdentification"),
        t("automatedInventory"),
      ]
    }
  ];

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 md:px-12 bg-white" aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="solution-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t("solutionTitle")}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t("solutionDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-mesatech-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {solution.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">{solution.title}</h3>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-mesatech-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
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
