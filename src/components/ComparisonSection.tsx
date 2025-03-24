
import React from 'react';
import { Check, X } from 'lucide-react';
import { useI18n } from '@/context/i18nContext';

const ComparisonSection = () => {
  const { t } = useI18n();
  
  const comparisonItems = [
    {
      aspect: t("serviceSpeed"),
      traditional: t("manualNotes"),
      digital: t("instantTransmission")
    },
    {
      aspect: t("orderAccuracy"),
      traditional: t("frequentErrors"),
      digital: t("digitalRecord")
    },
    {
      aspect: t("closingTime"),
      traditional: t("minutesToClose"),
      digital: t("oneMinuteClose")
    },
    {
      aspect: t("financialControlComparison"),
      traditional: t("hardToTrack"),
      digital: t("detailedReports")
    },
    {
      aspect: t("customerExperience"),
      traditional: t("frustrationsWithDelays"),
      digital: t("fluidExperience")
    }
  ];

  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="comparison-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="comparison-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t("comparisonTitle")}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t("comparisonDesc")}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse" aria-label="Comparação entre gestão tradicional e gestão com ComandaTop">
            <thead>
              <tr>
                <th scope="col" className="text-left p-4 bg-gray-100 rounded-tl-lg">{t("aspect")}</th>
                <th scope="col" className="p-4 bg-gray-200 text-center">Gestão Tradicional</th>
                <th scope="col" className="p-4 bg-mesatech-blue text-white text-center rounded-tr-lg">Gestão com ComandaTop</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-4 font-medium border-b border-gray-200">{item.aspect}</td>
                  <td className="p-4 text-center border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" aria-hidden="true" />
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
