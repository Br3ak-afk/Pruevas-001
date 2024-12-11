import React, { useState } from 'react';
import { Camera, CheckCircle, Globe, Menu, X } from 'lucide-react';

const UnaLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="px-4 md:px-6 py-4 flex justify-between items-center shadow-sm relative">
        <div className="text-2xl font-bold text-blue-600">Una</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Características</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">Precios</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Comenzar
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600"
                onClick={toggleMobileMenu}
              >
                Características
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-blue-600"
                onClick={toggleMobileMenu}
              >
                Precios
              </a>
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={toggleMobileMenu}
              >
                Comenzar
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="flex-grow container mx-auto px-4 py-12 md:py-16 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Simplifica tu Flujo de Trabajo con Una
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
            Una es tu plataforma de productividad todo en uno diseñada para agilizar 
            tu trabajo y potenciar la colaboración en equipo.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition">
              Iniciar Prueba Gratuita
            </button>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-50 transition">
              Más Información
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/api/placeholder/600/400" 
            alt="Una Dashboard" 
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900">
            Funciones Poderosas para tu Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <Camera className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mb-4">Colaboración Visual</h3>
              <p className="text-gray-600">
                Colabora en tiempo real con herramientas visuales intuitivas y espacios de trabajo compartidos.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <CheckCircle className="mx-auto mb-4 text-green-600" size={40} />
              <h3 className="text-xl font-semibold mb-4">Gestión de Tareas</h3>
              <p className="text-gray-600">
                Organiza, rastrea y completa tareas con nuestro sistema inteligente de gestión de proyectos.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <Globe className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-xl font-semibold mb-4">Conectividad Global</h3>
              <p className="text-gray-600">
                Conéctate con miembros del equipo en diferentes zonas horarias y ubicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900">
            Precios Flexibles para Cada Equipo
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg w-full md:w-72 shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Básico</h3>
              <p className="text-4xl font-bold mb-4 text-blue-600">$9</p>
              <p className="text-gray-600 mb-6">por usuario/mes</p>
              <ul className="mb-8 space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" size={18} />
                  Hasta 5 miembros del equipo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" size={18} />
                  Herramientas básicas de colaboración
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" size={18} />
                  Soporte comunitario
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Elegir Básico
              </button>
            </div>
            <div className="bg-blue-600 text-white p-6 md:p-8 rounded-lg w-full md:w-72 shadow-2xl md:transform md:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-4">$29</p>
              <p className="mb-6">por usuario/mes</p>
              <ul className="mb-8 space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-300" size={18} />
                  Miembros del equipo ilimitados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-300" size={18} />
                  Colaboración avanzada
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-300" size={18} />
                  Soporte prioritario
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-300" size={18} />
                  Integraciones personalizadas
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition">
                Elegir Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4 text-blue-400">Una</h4>
            <p className="text-gray-400">
              Transformando la colaboración en equipo, un espacio de trabajo a la vez.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center md:text-left">
              <h5 className="font-semibold mb-4">Producto</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Características</a></li>
                <li><a href="#" className="hover:text-white">Precios</a></li>
                <li><a href="#" className="hover:text-white">Integraciones</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-semibold mb-4">Empresa</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Carreras</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-semibold mb-4">Soporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-gray-500">
          © 2024 Una. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default UnaLandingPage;



