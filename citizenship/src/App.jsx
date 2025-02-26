import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <a href="#" className="text-2xl font-bold text-teal-600">¡CittadinoItaliano!</a>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-teal-600">Servicios</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Contáctanos</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Sobre Nosotros</a>
          </nav>
          <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full">Iniciar Sesión</a>
        </div>
      </header>

      {/* Hero Section - MODIFIED */}
      <section className="py-16 md:py-24 w-full relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-b from-teal-100/40 to-blue-100/40 rounded-bl-[100px] -z-10 transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-100/30 to-blue-100/30 rounded-tr-[120px] -z-10 transform -rotate-6"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center max-w-7xl">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Comienza tu viaje hacia la ciudadanía italiana con un solo clic
            </h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Planifica e inicia tu camino hacia la ciudadanía italiana con orientación experta. Desde la evaluación de elegibilidad hasta la preparación de documentos, estamos aquí para ayudarte a reclamar tu herencia.
            </p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <a href="#" className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white hover:text-white px-8 py-3.5 rounded-full flex items-center font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                <span className="relative">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-20 duration-1000 group-hover:opacity-40"></span>
                  <span>Comenzar</span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#" className="bg-white border-2 border-teal-200 text-teal-700 hover:text-teal-800 hover:border-teal-500 px-8 py-3.5 rounded-full flex items-center font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Más Información</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-teal-500/10 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-blue-500/10 z-0"></div>
              
              <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1824&q=80" 
                  alt="Coliseo Romano - Símbolo de Italia" 
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg transform translate-y-0 hover:-translate-y-2 transition-all duration-300">
                    <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                      <span className="bg-gradient-to-r from-teal-500 to-blue-500 w-1.5 h-6 mr-3 rounded-full"></span>
                      Descubre tu Herencia Italiana
                    </h3>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-teal-500 mr-3 flex-shrink-0 animate-pulse"></div>
                      <span className="text-gray-700 font-medium">Jure Sanguinis & Jure Matrimonii</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a href="#" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center group">
                        Explorar opciones
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Italian flag ribbon removed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white w-full relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="absolute -bottom-10 right-0 w-72 h-72 rounded-full bg-teal-50/50 -z-10"></div>
        <div className="absolute top-40 left-10 w-40 h-40 rounded-full bg-blue-50/50 -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-4">NUESTROS SERVICIOS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Servicios de Ciudadanía Italiana</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Soluciones integrales para hacer tu viaje hacia la ciudadanía lo más sencillo posible, sin importar la vía para la que califiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Evaluación de Elegibilidad" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Evaluación de Elegibilidad</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Análisis completo de tu línea ancestral para determinar tu elegibilidad para la ciudadanía italiana.</p>
                <a href="#" className="text-teal-600 font-medium flex items-center group-hover:text-teal-700 transition-colors">
                  Más información 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1586081983982-35132a8975a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Recopilación de Documentos" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Recopilación de Documentos</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Te ayudamos a reunir y verificar todos los registros vitales y certificados necesarios.</p>
                <a href="#" className="text-teal-600 font-medium flex items-center group-hover:text-teal-700 transition-colors">
                  Más información 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Traducción y Apostilla" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Traducción y Apostilla</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Traducción profesional y certificación legal de todos tus documentos.</p>
                <a href="#" className="text-teal-600 font-medium flex items-center group-hover:text-teal-700 transition-colors">
                  Más información 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1608497348666-9ce20a282021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Presentación de Solicitud" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Presentación de Solicitud</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Asistencia completa con tu proceso de solicitud en consulados o en Italia.</p>
                <a href="#" className="text-teal-600 font-medium flex items-center group-hover:text-teal-700 transition-colors">
                  Más información 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 w-full bg-gradient-to-b from-blue-50 to-teal-50 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-teal-100/40 -z-10"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-blue-100/40 -z-10"></div>
        <div className="absolute top-40 right-10 w-20 h-20 rounded-full bg-teal-200/30 -z-10"></div>
        <div className="absolute bottom-40 left-10 w-16 h-16 rounded-full bg-blue-200/30 -z-10"></div>
        
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center max-w-7xl">
          <div className="lg:w-1/2 mb-16 lg:mb-0 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="w-64 h-64 bg-teal-100 rounded-full absolute -z-10 -left-8 -top-8"></div>
              <div className="w-40 h-40 bg-blue-100 rounded-full absolute -z-10 -right-8 bottom-20"></div>
              
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556797816-77a7ed085eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Familia feliz con ciudadanía italiana" 
                  className="rounded-[2rem] shadow-xl z-10 relative w-full object-cover h-[450px] transform transition duration-500 hover:scale-105"
                />
                {/* Italian flag ribbon in the corner */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="absolute top-0 right-0 transform rotate-45 translate-y-16 -translate-x-4 shadow-md">
                    <div className="w-[120px] h-8 bg-green-500"></div>
                    <div className="w-[120px] h-8 bg-white"></div>
                    <div className="w-[120px] h-8 bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-4">¿POR QUÉ ELEGIRNOS?</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Expertos en Ciudadanía Italiana</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-2 mb-6"></div>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Disfruta de un servicio personalizado en cada paso de tu viaje hacia la ciudadanía italiana con nuestro experimentado equipo de expertos legales.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-teal-600 transition-colors">Orientación Experta</h3>
                  <p className="text-gray-600 text-lg">Nuestro equipo ha gestionado cientos de solicitudes de ciudadanía exitosas.</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-teal-600 transition-colors">Ahorro de Tiempo</h3>
                  <p className="text-gray-600 text-lg">Navegamos por la compleja burocracia para que no tengas que perder tiempo valioso.</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-teal-600 transition-colors">Paquetes Todo Incluido</h3>
                  <p className="text-gray-600 text-lg">Transparencia total para tu tranquilidad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-4">PROCESO SIMPLIFICADO</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Planifica Tu Viaje Hacia la Ciudadanía</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 text-center mb-4 max-w-3xl mx-auto text-lg">
              Para muchas personas, solicitar la ciudadanía italiana puede ser abrumador. Lo hacemos simple con nuestro proceso probado.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-teal-400 via-teal-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-20 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold mb-4 text-teal-700">Consulta Gratuita</h3>
                    <p className="text-gray-600 text-lg">
                      Programa una llamada con nuestros expertos para discutir tu historia familiar y opciones de ciudadanía.
                    </p>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-100/20 rounded-full z-0"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg relative">
                  <span className="absolute w-full h-full rounded-full border-4 border-teal-200 animate-ping opacity-20"></span>
                  1
                </div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 md:order-1 md:order-none"></div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg relative">
                  <span className="absolute w-full h-full rounded-full border-4 border-teal-200 animate-ping opacity-20"></span>
                  2
                </div>
                <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-teal-400 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold mb-4 text-teal-700">Evaluación de Elegibilidad</h3>
                    <p className="text-gray-600 text-lg">
                      Investigaremos a fondo tu historia familiar para establecer tu camino de elegibilidad.
                    </p>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-100/20 rounded-full z-0"></div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold mb-4 text-teal-700">Recopilación de Documentos</h3>
                    <p className="text-gray-600 text-lg">
                      Te guiamos a través de la recopilación de registros vitales tanto de tu país de origen como de Italia.
                    </p>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-100/20 rounded-full z-0"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg relative">
                  <span className="absolute w-full h-full rounded-full border-4 border-teal-200 animate-ping opacity-20"></span>
                  3
                </div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 md:order-1 md:order-none"></div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg relative">
                  <span className="absolute w-full h-full rounded-full border-4 border-teal-200 animate-ping opacity-20"></span>
                  4
                </div>
                <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-teal-400 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold mb-4 text-teal-700">Presentación de la Solicitud</h3>
                    <p className="text-gray-600 text-lg">
                      Completamos y presentamos tu solicitud, ya sea a través de un consulado o directamente en Italia.
                    </p>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-100/20 rounded-full z-0"></div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold mb-4 text-teal-700">Pasaporte y Beneficios</h3>
                    <p className="text-gray-600 text-lg">
                      Una vez reconocido, te ayudamos a solicitar tu pasaporte italiano y a entender tus nuevos beneficios.
                    </p>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-100/20 rounded-full z-0"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg relative">
                  <span className="absolute w-full h-full rounded-full border-4 border-teal-200 animate-ping opacity-20"></span>
                  5
                </div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 w-full">
        <div className="container mx-auto px-4 text-center max-w-7xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-500 opacity-20 rounded-full"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500 opacity-20 rounded-full"></div>
          
          <div className="relative z-10 py-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Comienza Tu Viaje Hacia la Ciudadanía Italiana</h2>
            <div className="w-24 h-1.5 bg-white rounded-full mx-auto mt-2 mb-6"></div>
            <p className="max-w-2xl mx-auto mb-10 text-teal-50 text-lg">
              Da el primer paso para abrazar tu herencia italiana y abrir las puertas a la Unión Europea.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3.5 rounded-full font-medium shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Regístrate Ahora</span>
              </a>
              <a href="#" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3.5 rounded-full font-medium transform transition duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Más Información</span>
              </a>
            </div>
            
            {/* Italian flag accent */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <div className="flex">
                <div className="w-32 h-1.5 bg-green-500"></div>
                <div className="w-32 h-1.5 bg-white"></div>
                <div className="w-32 h-1.5 bg-red-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-teal-400 mb-4 inline-block relative">
                ¡CittadinoItaliano!
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-transparent"></div>
              </h2>
              <p className="text-gray-300 max-w-xs">
                Tu socio de confianza para navegar por el proceso de ciudadanía italiana con facilidad y confianza.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.055 10.055 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 inline-block relative">
                Servicios
                <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-teal-400"></div>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center"><span className="mr-2">→</span> Evaluación de Elegibilidad</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center"><span className="mr-2">→</span> Recopilación de Documentos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center"><span className="mr-2">→</span> Servicios de Traducción</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center"><span className="mr-2">→</span> Apoyo con la Solicitud</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 inline-block relative">
                Compañía
                <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-teal-400"></div>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center"><span className="mr-2">→</span> Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center"><span className="mr-2">→</span> Contacto</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center"><span className="mr-2">→</span> Política de Privacidad</a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition duration-300 flex items-center"><span className="mr-2">→</span> Términos de Servicio</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 inline-block relative">
                Contáctanos
                <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-teal-400"></div>
              </h3>
              <div className="flex items-start space-x-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <p>Via Roma 123, 00187 Roma, Italia</p>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>info@cittadinoitaliano.com</p>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>+39 06 1234 5678</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2023 CittadinoItaliano. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">Preguntas Frecuentes</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">Soporte</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

