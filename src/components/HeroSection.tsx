
import React, { useEffect, useState } from 'react';
import DeviceMockups from './DeviceMockups';
import { useI18n } from '@/context/i18nContext';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative min-h-screen w-full bg-hero-pattern pb-16 overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-comandatop-blue/5 rounded-full filter blur-3xl"
          style={{ transform: 'translate3d(0, 0, 0)' }}
          aria-hidden="true"
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-comandatop-orange/5 rounded-full filter blur-3xl"
          style={{ transform: 'translate3d(0, 0, 0)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative pt-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left column - Text content */}
          <div className="flex flex-col items-start space-y-6 sm:space-y-8">
            <div className={`transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-3 py-1 bg-comandatop-blue/10 rounded-full text-comandatop-blue text-sm font-medium mb-4 sm:mb-6">
                {t('completeSystemForRestaurants')}
              </div>
              <h1 
                id="hero-heading" 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {t('manageRestaurantEfficiently')}
              </h1>
            </div>
            
            <p className={`text-base sm:text-lg text-gray-600 max-w-xl transition-all duration-700 delay-100 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {t('transformService')}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                className="cta-button"
                aria-label={t('tryForFree')}
              >
                {t('tryForFree')}
              </button>
              
              <button 
                className="inline-flex items-center justify-center px-6 py-3 font-medium bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-comandatop-blue"
                aria-label={t('watchDemo')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-comandatop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('watchDemo')}
              </button>
            </div>
            
            <div className={`flex items-center space-x-4 transition-all duration-700 delay-300 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex -space-x-2" aria-hidden="true">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-comandatop-blue">+2.000</span> {t('restaurants')}
                <div className="flex items-center mt-1" aria-label="5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Device mockups */}
          <div className={`h-96 sm:h-[500px] md:h-[540px] transition-all duration-1000 delay-400 transform ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <DeviceMockups />
          </div>
        </div>
        
        {/* Features highlight */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: (
                <svg className="w-10 h-10 text-comandatop-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: t('agility'),
              description: t('agilityDesc')
            },
            {
              icon: (
                <svg className="w-10 h-10 text-comandatop-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: t('financialControl'),
              description: t('financialControlDesc')
            },
            {
              icon: (
                <svg className="w-10 h-10 text-comandatop-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: t('security'),
              description: t('securityDesc')
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-2xl p-6 transition-all duration-700 transform delay-${500 + index * 100} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="rounded-xl bg-white/60 w-16 h-16 flex items-center justify-center mb-4" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
