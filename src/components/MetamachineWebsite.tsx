import React, { useState, useEffect } from 'react';
import {
  Code,
  Zap,
  ArrowRight,
  Linkedin,
  Youtube,
  ChevronDown,
  Menu,
  X,
  Play,
  Globe,
  Settings,
  Brain,
  MessageSquare,
  BarChart3,
  Workflow,
  Network,
  Palette
} from 'lucide-react';

const MetamachineWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [scrollY, isMenuOpen]);

  // ======================
  // DATA
  // ======================

  const services = [
    {
      icon: MessageSquare,
      title: 'Comunidades y ventas automatizadas',
      description:
        'MOAI gestiona mensajes en Instagram, WhatsApp, Messenger, Mercado Libre y portales inmobiliarios. Atiende, vende, clasifica y actualiza tus sistemas sin aumentar el equipo.',
      features: ['Atención 24/7', 'Clasificación inteligente de leads', 'Integración con CRMs y catálogos']
    },
    {
      icon: Workflow,
      title: 'Visión computacional para operaciones',
      description:
        'Conectamos cámaras a MOAI para analizar entornos dinámicos: comportamiento, condiciones ambientales y riesgos. La IA detecta patrones, dispara alertas y genera reportes.',
      features: ['Monitoreo continuo desde cámaras', 'Análisis visual inteligente', 'Alertas y reportes automatizados']
    },
    {
      icon: BarChart3,
      title: 'Control inteligente para minería',
      description:
        'Combinamos scanners RFID/códigos con software operativo para administrar stock de muestras geológicas en faenas. Trazabilidad completa desde la toma hasta laboratorio.',
      features: ['Registro con RFID / códigos', 'Estado en tiempo real', 'Integración con sistemas de análisis']
    },
    {
      icon: Zap,
      title: 'Automatización para ecommerce y retail',
      description:
        'Sincronizamos pedidos, pagos, logística y comunicaciones para que MOAI coordine todo el ciclo de compra, entrega y postventa.',
      features: ['Flujos de compra y postventa', 'Notificaciones proactivas', 'Sincronización con tiendas y bodegas']
    },
    {
      icon: Globe,
      title: 'Operaciones en servicios públicos y privados',
      description:
        'Digitalizamos procesos administrativos, atención ciudadana y operaciones internas con software y automatizaciones diseñadas para cada institución.',
      features: ['Procesos digitales trazables', 'Integración con sistemas legados', 'Dashboards y reportes ejecutivos']
    },
    {
      icon: Code,
      title: 'Software a medida impulsado por MOAI',
      description:
        'Desarrollamos plataformas web, sistemas internos y APIs que se conectan nativamente a MOAI para automatizar cualquier parte de la operación.',
      features: ['Plataformas cloud', 'APIs y microservicios', 'Workflows personalizados']
    }
  ];

  const capabilities = [
    {
      icon: Network,
      title: 'Canales y dispositivos conectados',
      description:
        'MOAI se conecta a redes sociales, mensajería, cámaras, sensores y scanners RFID para unificar eventos digitales y físicos.',
      metrics: ['Instagram, WhatsApp, Messenger', 'Cámaras, sensores y lectores', 'Eventos centralizados']
    },
    {
      icon: Brain,
      title: 'Cerebro MOAI',
      description:
        'LLMs, visión computacional y reglas de negocio que deciden cómo responder, qué registrar y qué automatizar en cada flujo.',
      metrics: ['Agentes y flujos multi-etapa', 'IA generativa + visión', 'Decisiones en tiempo real']
    },
    {
      icon: Settings,
      title: 'Integración con sistemas del cliente',
      description:
        'Conectamos MOAI con ERPs, CRMs, catálogos, bases de datos y sistemas internos para cerrar el circuito de la operación.',
      metrics: ['Integraciones profundas', 'Actualización de datos en vivo', 'Procesos auditables']
    },
    {
      icon: BarChart3,
      title: 'Gobernanza, métricas y reportes',
      description:
        'Tableros, métricas y reportes automatizados para operaciones, jefaturas y directorios, desde una única fuente de verdad.',
      metrics: ['KPIs en minutos', 'Alertas configurables', 'Historial y trazabilidad']
    }
  ];

  const cases = [
    {
      title: 'Automatización de atención en redes sociales',
      description:
        'Cómo MOAI permite gestionar miles de conversaciones simultáneas sin aumentar el tamaño del equipo, manteniendo trazabilidad y calidad en las respuestas.',
      tag: 'Comunidades y ventas'
    },
    {
      title: 'Visión computacional para monitoreo operacional',
      description:
        'Implementación de cámaras conectadas a MOAI para analizar video en vivo, detectar eventos críticos y generar alertas y reportes accionables.',
      tag: 'Visión computacional'
    },
    {
      title: 'Trazabilidad avanzada para minería',
      description:
        'Digitalización completa del stock de muestras geológicas utilizando scanners y software conectado a MOAI para seguimiento, control y análisis.',
      tag: 'Minería y terreno'
    }
  ];

  const mobileMenuItems = [
    { name: 'MOAI', href: '#moai', icon: MessageSquare },
    { name: 'Aplicaciones', href: '#cases', icon: BarChart3 },
    { name: 'Soluciones', href: '#services', icon: Zap },
    { name: 'Tecnologías', href: '#tech', icon: Code },
    { name: 'Capacidades', href: '#capabilities', icon: Settings },
    { name: 'Contacto', href: '#contact', icon: MessageSquare }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const nextSibling = target.nextElementSibling as HTMLElement | null;
    target.style.display = 'none';
    if (nextSibling) nextSibling.style.display = 'flex';
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden relative">
      {/* ====================== */}
      {/* BACKGROUND + FX */}
      {/* ====================== */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'circuitPulse 4s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Orbes escala de grises */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gray-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        {/* Scanlines */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            style={{ animation: 'scanLineVertical 8s linear infinite' }}
          ></div>
          <div
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"
            style={{ animation: 'scanLineHorizontal 10s linear infinite' }}
          ></div>
        </div>

        {/* Data stream */}
        <div className="absolute right-10 top-0 h-full w-px overflow-hidden">
          <div
            className="absolute w-full h-32 bg-gradient-to-b from-white/30 to-transparent"
            style={{ animation: 'dataStream 3s linear infinite' }}
          ></div>
        </div>
      </div>

      {/* ====================== */}
      {/* CSS ANIMATIONS */}
      {/* ====================== */}
      <style>{`
        @keyframes circuitPulse { 0%,100%{opacity:0.1;} 50%{opacity:0.3;} }
        @keyframes float { 0%,100%{transform:translateY(0);opacity:0.3;} 50%{transform:translateY(-20px);opacity:0.6;} }
        @keyframes scanLineVertical {0%{top:-100%;}100%{top:100%;}}
        @keyframes scanLineHorizontal {0%{left:-100%;}100%{left:100%;}}
        @keyframes dataStream {0%{top:-128px;}100%{top:100%;}}
        @keyframes glitch {0%,100%{transform:translateX(0);}20%{transform:translateX(-2px);}40%{transform:translateX(2px);}60%{transform:translateX(-1px);}80%{transform:translateX(1px);} }
        @keyframes pulseGlow {0%,100%{box-shadow:0 0 20px rgba(255,255,255,0.12);} 50%{box-shadow:0 0 40px rgba(255,255,255,0.25);} }
        @keyframes autoScroll {0%{transform:translateY(0%);}100%{transform:translateY(-50%);} }
        @keyframes scanCode {0%{top:-2px;opacity:0;}10%{opacity:1;}90%{opacity:1;}100%{top:100%;opacity:0;} }
        @keyframes fadeInUp {0%{opacity:0;transform:translateY(30px);}100%{opacity:1;transform:translateY(0);} }
      `}</style>

      {/* ====================== */}
      {/* NAVBAR */}
      {/* ====================== */}
      <div className="relative z-10">
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src="/logos/metamachinecorp.png"
                    alt="Metamachine"
                    className="w-14 h-14 object-contain"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.25))' }}
                    onError={handleImageError}
                  />
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <span className="text-black font-bold text-xl">M</span>
                  </div>
                </div>
              </div>

              {/* Desktop links */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <a href="#moai" className="text-gray-300 hover:text-white transition-colors">
                    MOAI
                  </a>
                  <a href="#cases" className="text-gray-300 hover:text-white transition-colors">
                    Aplicaciones
                  </a>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Soluciones
                  </a>
                  <a href="#tech" className="text-gray-300 hover:text-white transition-colors">
                    Tecnologías
                  </a>
                  <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors">
                    Capacidades
                  </a>
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-2 rounded-full transition-all hover:scale-105 shadow-lg shadow-black/30"
                  >
                    Contacto
                  </a>
                </div>
              </div>

              {/* Burger menu */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden flex items-center justify-center">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="fixed top-6 right-6 z-50 w-12 h-12 bg-gray-900/80 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex flex-col items-center justify-center space-y-6 px-8 py-16">
                {mobileMenuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gray-900/80 border border-gray-700 rounded-2xl px-8 py-4 flex items-center space-x-4 hover:bg-gray-800 hover:border-gray-500">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-gray-100" />
                      </div>
                      <span className="text-xl font-medium text-white">{item.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* ====================== */}
        {/* HERO */}
        {/* ====================== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight mt-16 sm:mt-0">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Inteligencias artificiales
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
                style={{ animation: 'glitch 8s ease-in-out infinite', textShadow: '0 0 30px rgba(255,255,255,0.25)' }}
              >
                que operan tu negocio, no solo responden mensajes
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              MOAI es la plataforma de agentes y visión computacional creada por Metamachine para automatizar desde un
              mensaje en Instagram hasta el control de procesos físicos en terreno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 shadow-lg shadow-black/30 flex items-center">
                Descubrir MOAI
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full font-semibold hover:bg-white/10 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Hablar sobre tu operación
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.behance.net/metamachine_dev"
                target="_blank"
                className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center"
              >
                <Palette className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/metamachine/"
                target="_blank"
                className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.youtube.com/@metamachine_tech"
                target="_blank"
                className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center"
              >
                <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-300" />
          </div>
        </section>

        {/* ====================== */}
        {/* MOAI SECTION */}
        {/* ====================== */}
        <section id="moai" className="py-20">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MOAI</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                MOAI es nuestra plataforma propia de agentes inteligentes y visión computacional. Automatiza
                conversaciones, operaciones y control de activos conectándose tanto a canales digitales como a
                dispositivos físicos.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Funciona como un cerebro central que recibe eventos desde redes sociales, cámaras, sensores y sistemas
                internos, decide qué hacer y ejecuta acciones en tus plataformas de negocio. Desde ecommerce hasta
                minería y servicios, MOAI adapta sus flujos a cada operación.
              </p>

              <a
                href="https://moaiverse.cloud"
                target="_blank"
                className="inline-flex items-center bg-gradient-to-r from-white to-gray-200 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105"
              >
                Conocer MOAI
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-600 border border-gray-500 flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Plataforma de agentes + visión</h3>
                  <p className="text-sm text-gray-400">Un solo MO para cada parte de tu operación</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Flujos de ventas, soporte y postventa automatizados con IA generativa.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Visión computacional conectada a cámaras y sensores para monitoreo en vivo.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Integración con CRMs, ERPs, catálogos y sistemas internos.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Reportes automáticos, métricas operacionales y trazabilidad completa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== */}
        {/* CASES / APPLICATIONS */}
        {/* ====================== */}
        <section id="cases" className="py-20 bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Aplicaciones de MOAI
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Un mismo cerebro de IA aplicado a distintos contextos: comunidades, operaciones y terreno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cases.map((c, index) => (
                <div
                  key={index}
                  className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:bg-gray-800/60 hover:border-gray-600 transition-all flex flex-col"
                >
                  <div className="text-xs uppercase tracking-wide text-gray-400 mb-3">{c.tag}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{c.title}</h3>
                  <p className="text-gray-300 flex-1">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== */}
        {/* SERVICES (SOLUCIONES) */}
        {/* ====================== */}
        <section id="services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Soluciones impulsadas por MOAI
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Adaptamos MOAI y nuestros desarrollos de software a la realidad de cada operación, desde ecommerce hasta
                minería y servicios públicos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/40 hover:bg-gray-800/50 border border-gray-800 hover:border-gray-600 rounded-2xl p-8 transition-all hover:scale-105 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animation: `float ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random()}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-600 border border-gray-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== */}
        {/* TECH STACK */}
        {/* ====================== */}
        <section id="tech" className="py-16 bg-gray-950/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Stack tecnológico de Metamachine
                </span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div
                className="bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/30 relative h-80"
                style={{
                  animation: 'pulseGlow 6s ease-in-out infinite',
                  background: 'linear-gradient(145deg, rgba(17,17,17,0.8), rgba(31,31,31,0.8))'
                }}
              >
                <div className="px-4 py-3 border-b border-gray-800 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="text-sm text-gray-400 ml-3">metamachine/stack.ts</div>
                </div>

                <div className="p-6 font-mono text-sm text-gray-200 h-[calc(100%-48px)] overflow-hidden relative">
                  {/* Line numbers */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-900/90 border-r border-gray-800 text-right pr-2 pt-2 text-gray-600">
                    {[...Array(18)].map((_, i) => (
                      <div key={i} className="leading-6">
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <div className="ml-14 h-full overflow-hidden relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div
                        className="absolute left-0 right-0 h-8 bg-gradient-to-b from-gray-900 via-transparent to-transparent"
                        style={{ animation: 'scanCode 6s ease-in-out infinite' }}
                      ></div>
                    </div>

                    {/* ACTUAL STACK CONTENT */}
                    <div className="space-y-2 animate-[autoScroll_14s_linear_infinite]">
                      <div className="text-gray-400">
                        // Stack tecnológico real utilizado en proyectos de MOAI y software a medida
                      </div>
                      <div>
                        <span className="text-gray-500">const</span> stack = {'{'}
                      </div>

                      <div className="pl-4 text-gray-200">
                        frontend: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
                      </div>
                      <div className="pl-4 text-gray-200">
                        backend: ['Node.js', 'NestJS', 'FastAPI', 'Python', 'Go'],
                      </div>
                      <div className="pl-4 text-gray-200">
                        databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DB'],
                      </div>

                      <div className="pl-4 text-gray-200">
                        ia: ['LLMs', 'Embeddings', 'RAG', 'Agents', 'OpenAI'],
                      </div>
                      <div className="pl-4 text-gray-200">
                        vision: ['OpenCV', 'YOLO', 'TensorFlow', 'PyTorch'],
                      </div>

                      <div className="pl-4 text-gray-200">
                        automation: ['n8n', 'Webhooks', 'Event Queues', 'Workflows'],
                      </div>
                      <div className="pl-4 text-gray-200">
                        messaging: ['WhatsApp Cloud API', 'Messenger API', 'Instagram API'],
                      </div>
                      <div className="pl-4 text-gray-200">
                        integrations: ['ERP', 'CRM', 'Ecommerce', 'Custom APIs'],
                      </div>

                      <div className="pl-4 text-gray-200">
                        ops: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'],
                      </div>
                      <div className="pl-4 text-gray-200">
                        monitoring: ['Prometheus', 'Grafana', 'Sentry'],
                      </div>
                      <div className="pl-4 text-gray-200">
                        security: ['JWT', 'OAuth2', 'RBAC', 'Encryption'],
                      </div>

                      <div>{'}'};</div>

                      <div className="text-gray-400">
                        // Pensado para soportar MOAI, visión computacional y automatizaciones industriales
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-900/40 border border-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-sm text-gray-400">Tecnologías</div>
                </div>
                <div className="text-center p-4 bg-gray-900/40 border border-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-sm text-gray-400">Lenguajes</div>
                </div>
                <div className="text-center p-4 bg-gray-900/40 border border-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-sm text-gray-400">Disponibilidad</div>
                </div>
                <div className="text-center p-4 bg-gray-900/40 border border-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-white">Multi-sector</div>
                  <div className="text-sm text-gray-400">Privado y público</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== */}
        {/* CAPABILITIES */}
        {/* ====================== */}
        <section id="capabilities" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Cómo automatizamos operaciones completas
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                MOAI conecta canales, dispositivos y sistemas internos bajo un mismo flujo inteligente, con métricas y
                trazabilidad de extremo a extremo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {capabilities.map((c, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/40 hover:bg-gray-800/50 border border-gray-800 hover:border-gray-600 rounded-2xl p-8 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 border border-gray-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <c.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">{c.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{c.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {c.metrics.map((m, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs text-gray-300"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== */}
        {/* CTA SECTION */}
        {/* ====================== */}
        <section className="py-20 bg-gradient-to-br from-gray-950 to-black">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Cuéntanos qué parte de tu operación quieres que MOAI opere por ti
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Diseñamos inteligencia, software y visión computacional adaptada a procesos reales. Desde la primera
              conversación hasta la operación 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 shadow-lg shadow-black/30">
                Iniciar proyecto
              </button>
              <button className="border border-gray-600 hover:border-gray-400 hover:bg-white/10 px-8 py-4 rounded-full font-semibold">
                Consulta estratégica
              </button>
            </div>
          </div>
        </section>

        {/* ====================== */}
        {/* FOOTER */}
        {/* ====================== */}
        <footer id="contact" className="py-16 border-t border-gray-900 bg-gray-950/60">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Columna 1 */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <img
                      src="/logos/Metamachine.svg"
                      alt="Metamachine"
                      className="w-10 h-10 object-contain"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.25))' }}
                      onError={handleImageError}
                    />
                    <div
                      className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center shadow-lg shadow-black/30"
                      style={{ display: 'none' }}
                    >
                      <span className="text-black font-bold text-xl">M</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">Metamachine</h3>
                    <p className="text-xs text-gray-300">IA + Software + Automatización</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Metamachine desarrolla software, automatización e inteligencia artificial aplicada a operaciones
                  reales. Creamos MOAI, nuestra plataforma de agentes y visión computacional, y soluciones a medida para
                  cualquier industria.
                </p>
              </div>

              {/* Columna 2 */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Especialidades
                </h4>

                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Automatización con IA y agentes
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Software a medida conectado a MOAI
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Analítica, datos y reportes
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Visión computacional aplicada
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Operaciones para ecommerce, minería y servicios
                  </li>
                </ul>
              </div>

              {/* Columna 3 */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Conecta
                </h4>

                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <a
                      href="https://www.behance.net/metamachine_dev"
                      target="_blank"
                      className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-xl flex items-center justify-center"
                    >
                      <Palette className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/metamachine/"
                      target="_blank"
                      className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-xl flex items-center justify-center"
                    >
                      <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.youtube.com/@metamachine_tech"
                      target="_blank"
                      className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-xl flex items-center justify-center"
                    >
                      <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                  </div>

                  <p className="text-gray-400 text-sm">
                    Síguenos para conocer las últimas implementaciones de MOAI, software a medida y automatización en
                    distintas industrias.
                  </p>

                  <div className="pt-4">
                    <button className="w-full bg-gradient-to-r from-white to-gray-200 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 shadow-lg shadow-black/30">
                      Iniciar proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2024 Metamachine. IA, software y automatización para cualquier industria.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  Disponible para nuevos proyectos
                </span>
                <span>|</span>
                <span>Operamos globalmente</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MetamachineWebsite;
