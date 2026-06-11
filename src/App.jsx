import React, { useState } from 'react';
import { Car, MapPin, Calendar, Users, Star, Shield, Heart, Search, Menu, X, ChevronRight, Fuel, Gauge, Settings, Wifi } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredCars = [
    {
      id: 1,
      name: 'Toyota Corolla 2023',
      location: 'Buenos Aires, Argentina',
      price: 45,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1590362891991-f776e740a564?w=800',
      transmission: 'Automático',
      seats: 5,
      fuel: 'Gasolina'
    },
    {
      id: 2,
      name: 'Honda CR-V 2022',
      location: 'Ciudad de México, México',
      price: 65,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800',
      transmission: 'Automático',
      seats: 5,
      fuel: 'Híbrido'
    },
    {
      id: 3,
      name: 'Ford Mustang GT 2024',
      location: 'São Paulo, Brasil',
      price: 120,
      rating: 5.0,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
      transmission: 'Manual',
      seats: 4,
      fuel: 'Gasolina'
    },
    {
      id: 4,
      name: 'Tesla Model 3 2023',
      location: 'Santiago, Chile',
      price: 95,
      rating: 4.9,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
      transmission: 'Automático',
      seats: 5,
      fuel: 'Eléctrico'
    },
    {
      id: 5,
      name: 'Jeep Wrangler 2022',
      location: 'Medellín, Colombia',
      price: 85,
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      transmission: 'Manual',
      seats: 5,
      fuel: 'Gasolina'
    },
    {
      id: 6,
      name: 'Volkswagen Golf 2023',
      location: 'Bogotá, Colombia',
      price: 55,
      rating: 4.6,
      reviews: 93,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c85d?w=800',
      transmission: 'Automático',
      seats: 5,
      fuel: 'Diesel'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Autos disponibles' },
    { number: '12', label: 'Países en LatAm' },
    { number: '2M+', label: 'Viajeros felices' },
    { number: '4.8', label: 'Calificación promedio' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Seguro Incluido',
      description: 'Todos los autos incluyen seguro completo contra todo riesgo'
    },
    {
      icon: Star,
      title: 'Anfitriones Verificados',
      description: 'Cada propietario pasa por un proceso de verificación riguroso'
    },
    {
      icon: Heart,
      title: 'Soporte 24/7',
      description: 'Equipo de soporte disponible en todo momento para ayudarte'
    }
  ];

  return (
    <div className="min-h-screen bg-tura-light">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-tura-red text-white p-2 rounded-lg">
                <Car size={24} />
              </div>
              <span className="text-2xl font-bold text-tura-dark">Tura</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#explorar" className="text-tura-dark hover:text-tura-red transition">Explorar</a>
              <a href="#como-funciona" className="text-tura-dark hover:text-tura-red transition">Cómo funciona</a>
              <a href="#anfitrion" className="text-tura-dark hover:text-tura-red transition">Ser anfitrión</a>
              <button className="btn-secondary py-2 px-4">Iniciar sesión</button>
              <button className="btn-primary py-2 px-4">Registrarse</button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#explorar" className="block text-tura-dark hover:text-tura-red">Explorar</a>
              <a href="#como-funciona" className="block text-tura-dark hover:text-tura-red">Cómo funciona</a>
              <a href="#anfitrion" className="block text-tura-dark hover:text-tura-red">Ser anfitrión</a>
              <button className="btn-secondary w-full">Iniciar sesión</button>
              <button className="btn-primary w-full">Registrarse</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tura-red via-red-600 to-red-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Tu auto perfecto te está esperando
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-red-100">
                Alquila autos únicos de anfitriones locales en toda Latinoamérica. 
                Desde económicos hasta de lujo, encuentra el ideal para tu viaje.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-tura-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition shadow-lg">
                  Explorar autos
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-tura-red transition">
                  Registrar mi auto
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800" 
                alt="Auto en carretera"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white shadow-lg -mt-8 relative z-10 mx-4 lg:mx-auto max-w-5xl rounded-2xl">
        <div className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-tura-dark mb-2">
                <MapPin size={16} className="inline mr-2" />
                Ubicación
              </label>
              <input
                type="text"
                placeholder="¿Dónde necesitas el auto?"
                className="input-field"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-tura-dark mb-2">
                <Calendar size={16} className="inline mr-2" />
                Inicio
              </label>
              <input
                type="date"
                className="input-field"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-tura-dark mb-2">
                <Calendar size={16} className="inline mr-2" />
                Fin
              </label>
              <input
                type="date"
                className="input-field"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Search size={20} />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-tura-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-tura-red mb-2">{stat.number}</div>
                <div className="text-red-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section id="explorar" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-tura-dark mb-4">
              Autos destacados en Latinoamérica
            </h2>
            <p className="text-xl text-gray-600">
              Explora nuestra selección de los mejores autos disponibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div
                key={car.id}
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition">
                    <Heart size={20} className="text-gray-400 hover:text-tura-red" />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${car.price}/día
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-tura-dark mb-2">{car.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <MapPin size={14} className="mr-1" />
                    {car.location}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-tura-yellow fill-tura-yellow" />
                      <span className="font-semibold">{car.rating}</span>
                      <span className="text-gray-500">({car.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 pt-3 border-t">
                    <div className="flex items-center gap-1">
                      <Settings size={14} />
                      {car.transmission}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {car.seats}
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel size={14} />
                      {car.fuel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary inline-flex items-center gap-2">
              Ver todos los autos
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-tura-dark mb-4">
              ¿Por qué elegir Tura?
            </h2>
            <p className="text-xl text-gray-600">
              La plataforma de confianza para compartir autos en Latinoamérica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-tura-light hover:shadow-lg transition"
              >
                <div className="bg-tura-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-tura-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="anfitrion" className="py-20 bg-gradient-to-r from-tura-teal to-tura-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Gana dinero compartiendo tu auto
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Cuando no uses tu auto, haz que trabaje para ti. Publica tu vehículo en Tura y genera ingresos pasivos mientras ayudas a otros viajeros.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-white text-tura-teal p-1 rounded-full">
                    <Shield size={20} />
                  </div>
                  <span>Seguro incluido en cada reserva</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white text-tura-teal p-1 rounded-full">
                    <Users size={20} />
                  </div>
                  <span>Tú eliges quién alquila tu auto</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white text-tura-teal p-1 rounded-full">
                    <Calendar size={20} />
                  </div>
                  <span>Disponibilidad flexible</span>
                </li>
              </ul>
              <button className="bg-white text-tura-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition shadow-lg">
                Registrar mi auto gratis
              </button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800" 
                alt="Persona feliz con su auto"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tura-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-tura-red text-white p-2 rounded-lg">
                  <Car size={24} />
                </div>
                <span className="text-2xl font-bold">Tura</span>
              </div>
              <p className="text-gray-400">
                La plataforma líder de alquiler de autos entre particulares en Latinoamérica.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Carreras</a></li>
                <li><a href="#" className="hover:text-white transition">Prensa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-white transition">Seguridad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos de servicio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hola@tura.lat</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Tura. Todos los derechos reservados. Hecho con ❤️ para Latinoamérica.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
