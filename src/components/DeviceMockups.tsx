
import React, { useState, useEffect } from 'react';
import { Smartphone, Tablet, MonitorSmartphone } from 'lucide-react';

const DeviceMockups = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background decoration elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-orange-50/30 rounded-3xl" />
      <div className="absolute w-40 h-40 bg-mesatech-blue/10 rounded-full -top-10 -left-10 filter blur-xl animate-pulse-soft" />
      <div className="absolute w-40 h-40 bg-mesatech-orange/10 rounded-full -bottom-10 -right-10 filter blur-xl animate-pulse-soft" />
      
      {/* Desktop mockup */}
      <div 
        className={`absolute transform transition-all duration-1000 device-shadow rounded-xl
          ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ 
          width: '550px', 
          height: '310px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}
      >
        <div className="bg-gray-900 w-full h-full rounded-xl p-3">
          <div className="device-screen w-full h-full bg-white rounded-lg flex flex-col">
            <div className="bg-mesatech-blue h-14 flex items-center px-4 rounded-t-lg">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
              </div>
              <div className="text-white text-sm font-medium mx-auto">Painel Administrativo MesaTech</div>
            </div>
            <div className="flex-1 p-4">
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="col-span-2 bg-gray-100 rounded-lg p-3">
                  <div className="h-6 w-32 bg-mesatech-blue/20 rounded-md mb-3"></div>
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-white p-2 rounded shadow flex flex-col justify-between h-24">
                        <div className="h-2 w-12 bg-gray-200 rounded"></div>
                        <div className="h-8 w-full bg-mesatech-blue/10 rounded-md"></div>
                        <div className="h-2 w-8 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 flex flex-col">
                  <div className="h-6 w-24 bg-mesatech-orange/20 rounded-md mb-3"></div>
                  <div className="flex-1 bg-white rounded-lg p-2 shadow">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center py-2 border-b border-gray-100">
                        <div className="h-8 w-8 rounded-full bg-gray-200 mr-2"></div>
                        <div className="flex-1">
                          <div className="h-2 w-16 bg-gray-200 rounded mb-1"></div>
                          <div className="h-2 w-12 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-5 w-10 bg-mesatech-blue/10 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shimmer"></div>
      </div>
      
      {/* Tablet mockup */}
      <div 
        className={`absolute transform transition-all duration-1000 delay-300 device-shadow rounded-2xl
          ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        style={{ 
          width: '220px', 
          height: '300px', 
          left: '15%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2
        }}
      >
        <div className="bg-gray-900 w-full h-full rounded-2xl p-2 relative">
          <div className="absolute top-1/2 -left-1 w-1 h-10 bg-gray-800 rounded-l-md transform -translate-y-1/2"></div>
          <div className="device-screen w-full h-full bg-white rounded-xl flex flex-col">
            <div className="bg-mesatech-blue h-8 flex items-center justify-center rounded-t-xl">
              <div className="text-white text-xs font-medium">Atendimento</div>
            </div>
            <div className="flex-1 p-3">
              <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-100 mb-2 p-2 rounded-lg flex justify-between">
                  <div>
                    <div className="h-2 w-12 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 w-20 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-6 w-6 rounded-full bg-mesatech-orange/20 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-mesatech-orange"></div>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-2 left-2 right-2">
                <div className="h-8 bg-mesatech-blue rounded-lg flex items-center justify-center">
                  <div className="h-2 w-16 bg-white/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shimmer"></div>
      </div>
      
      {/* Smartphone mockup */}
      <div 
        className={`absolute transform transition-all duration-1000 delay-500 device-shadow rounded-2xl
          ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        style={{ 
          width: '140px', 
          height: '280px', 
          right: '15%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3
        }}
      >
        <div className="bg-gray-900 w-full h-full rounded-2xl p-2 relative">
          <div className="absolute top-8 -right-1 w-1 h-6 bg-gray-800 rounded-r-md"></div>
          <div className="absolute top-20 -right-1 w-1 h-10 bg-gray-800 rounded-r-md"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-b-lg"></div>
          <div className="device-screen w-full h-full bg-white rounded-xl flex flex-col">
            <div className="h-6 bg-mesatech-orange flex items-center justify-center rounded-t-xl">
              <div className="text-white text-xs font-medium">MesaTech</div>
            </div>
            <div className="flex-1 p-2">
              <div className="h-3 w-12 bg-gray-200 rounded mb-1"></div>
              <div className="grid grid-cols-2 gap-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-gray-100 p-1 rounded flex flex-col items-center h-16">
                    <div className="h-2 w-8 bg-gray-300 rounded mb-1"></div>
                    <div className="h-8 w-8 rounded-full bg-mesatech-blue/10 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-mesatech-blue/30"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="h-6 bg-mesatech-orange rounded-lg flex items-center justify-center">
                  <div className="h-2 w-10 bg-white/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shimmer"></div>
      </div>
      
      {/* Device indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-8 z-20">
        <div className="flex flex-col items-center opacity-70">
          <Tablet className="h-6 w-6 text-mesatech-blue" />
          <div className="text-xs text-gray-700 mt-1">Garçons</div>
        </div>
        <div className="flex flex-col items-center opacity-70">
          <Smartphone className="h-6 w-6 text-mesatech-orange" />
          <div className="text-xs text-gray-700 mt-1">App Móvel</div>
        </div>
        <div className="flex flex-col items-center opacity-70">
          <MonitorSmartphone className="h-6 w-6 text-mesatech-blue-dark" />
          <div className="text-xs text-gray-700 mt-1">Administração</div>
        </div>
      </div>
    </div>
  );
};

export default DeviceMockups;
