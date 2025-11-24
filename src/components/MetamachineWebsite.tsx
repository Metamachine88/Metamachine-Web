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
  Sparkles,
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

  const services = [
    {
      icon: Brain,
      title: 'Automatización total con IA',
      description:
        'Orquestamos flujos end-to-end que conectan sistemas, equipos y canales. Automatizamos operaciones, atención al cliente y flujos de venta o postventa con decisiones inteligentes.',
      features: ['RPA y agentes', 'Integraciones profundas', 'Flujos multietapa']
    },
    {
      icon: Code,
      title: 'Software a medida para cualquier industria',
      description:
        'Diseñamos plataformas web, aplicaciones empresariales y sistemas internos que se adaptan a cada operación, con arquitectura segura y escalable.',
      features: ['Plataformas cloud', 'APIs y microservicios', 'Sistemas internos a medida']
    },
    {
      icon: BarChart3,
      title: 'Datos, analítica y reportes ejecutivos',
      description:
        'Construimos pipelines, tableros y modelos que convierten datos en decisiones. Reportes automatizados y monitoreo continuo para equipos operativos y directivos.',
      features: ['ETL/ELT moderno', 'Dashboards en tiempo real', 'Modelos predictivos']
    },
    {
      icon: Zap,
      title: 'Automatizaciones para ecommerce',
      description:
        'Optimizamos tiendas online, logística y experiencia del cliente con integraciones, notificaciones inteligentes y seguimiento automatizado.',
      features: ['Logística y órdenes', 'Notificaciones proactivas', 'Experiencia omnicanal']
    },
    {
      icon: Globe,
      title: 'Software para servicios públicos y privados',
      description:
        'Creamos soluciones confiables para organizaciones, empresas y entidades gubernamentales. Digitalizamos procesos, control y trazabilidad.',
      features: ['Operaciones administrativas', 'Integraciones con sistemas legados', 'Gestión y cumplimiento']
    },
    {
      icon: Workflow,
      title: 'Visión computacional y control inteligente',
      description:
        'Aplicamos computer vision para monitoreo y análisis en entornos industriales, mejorando seguridad, calidad y eficiencia.',
      features: ['Análisis visual en vivo', 'Alertas automáticas', 'Integración con sensores']
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'Automatización guiada por IA',
      description:
        'Flujos inteligentes que conectan sistemas, personas y máquinas con trazabilidad completa y decisiones autónomas.',
      metrics: ['Reducción de tiempos', 'Respuestas en vivo', 'Operación 24/7']
    },
    {
      icon: Network,
      title: 'Computer vision adaptable',
      description:
        'Algoritmos de visión por computador para análisis y control en distintos sectores, incluyendo monitoreo en vivo en entornos productivos.',
      metrics: ['Análisis continuo', 'Integración con IoT', 'Modelos entrenables']
    },
    {
      icon: Settings,
      title: 'Software operativo personalizado',
      description:
        'Plataformas que se ajustan a las operaciones de minería, logística, retail o servicios, digitalizando procesos y mejorando la seguridad.',
      metrics: ['Workflows a medida', 'Compatibilidad OT/IT', 'Optimización continua']
    },
    {
      icon: BarChart3,
      title: 'Analítica y reportes automatizados',
      description:
        'Modelos predictivos, monitoreo y paneles ejecutivos que convierten datos dispersos en decisiones accionables.',
      metrics: ['Forecasting confiable', 'KPIs en minutos', 'Insights auditables']
    }
  ];

  const mobileMenuItems = [
    { name: 'Servicios', href: '#services', icon: Zap },
    { name: 'Tecnologías', href: '#tech', icon: Code },
    { name: 'MOAI', href: '#moai', icon: MessageSquare },
    { name: 'Capacidades', href: '#capabilities', icon: Settings },
    { name: 'Contacto', href: '#contact', icon: MessageSquare }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const nextSibling = target.nextElementSibling as HTMLElement | null;
    target.style.display = 'none';
    if (nextSibling) {
      nextSibling.style.display = 'flex';
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'circuitPulse 4s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Orbes en escala de grises */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gray-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>

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

        <div className="absolute right-10 top-0 h-full w-px overflow-hidden">
          <div
            className="absolute w-full h-32 bg-gradient-to-b from-white/30 to-transparent"
            style={{ animation: 'dataStream 3s linear infinite' }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes circuitPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes scanLineVertical {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        @keyframes scanLineHorizontal {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes dataStream {
          0% { top: -128px; }
          100% { top: 100%; }
        }

        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.12);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.25), 0 0 60px rgba(255, 255, 255, 0.15);
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes autoScroll {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }

        @keyframes scanCode {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>

      <div className="relative z-10">
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src="/logos/Metamachine.svg"
                    alt="Metamachine"
                    className="w-10 h-10 object-contain"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.25))' }}
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

              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
                  <a href="#tech" className="text-gray-300 hover:text-white transition-colors">Tecnologías</a>
                  <a href="#moai" className="text-gray-300 hover:text-white transition-colors">MOAI</a>
                  <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors">Capacidades</a>
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-black/30"
                  >
                    Contacto
                  </a>
                </div>
              </div>

              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white transition-colors">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden flex items-center justify-center">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="fixed top-6 right-6 z-50 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex flex-col items-center justify-center space-y-6 px-8 py-16">
                {mobileMenuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl px-8 py-4 flex items-center space-x-4 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 shadow-lg shadow-black/40 min-w-[240px]">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-gray-700 group-hover:to-gray-600 transition-all duration-300">
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

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 hidden sm:inline-flex items-center px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-gray-200 mr-2 animate-pulse" />
              <span className="text-gray-200 text-sm font-medium">Software a medida • Automatización • IA aplicada</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight mt-16 sm:mt-0">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">Automatizamos</span>
              <br />
              <span
                className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
                style={{
                  animation: 'glitch 8s ease-in-out infinite',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.25)'
                }}
              >
                cualquier operación con software hecho a medida
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Somos MetaMachine. Creamos software personalizado y automatizaciones inteligentes para empresas de cualquier sector. Integramos IA generativa, análisis de datos y computer vision para digitalizar procesos, conectar canales y optimizar operaciones en comercio electrónico, servicios privados y públicos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-black/30 flex items-center">
                Explorar soluciones
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10 backdrop-blur-sm flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Ver capacidades
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.behance.net/metamachine_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <Palette className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/metamachine/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@metamachine_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-300" />
          </div>
        </section>

        <section id="services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Soluciones en IA y software</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Desarrollamos software, analítica y automatizaciones que se ajustan a cualquier industria y necesidad operativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/40 hover:bg-gray-800/50 border border-gray-800 hover:border-gray-600 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
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

                  <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-600 border border-gray-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gray-100 transition-colors">{service.title}</h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tech" className="py-16 bg-gray-950/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Stack tecnológico</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Arquitecturas modernas, IA generativa, APIs seguras y pipelines listos para automatizar cualquier flujo.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div
                className="bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/30 relative h-80"
                style={{
                  animation: 'pulseGlow 6s ease-in-out infinite',
                  background: 'linear-gradient(145deg, rgba(17, 17, 17, 0.8), rgba(31, 31, 31, 0.8))'
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
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-900/90 border-r border-gray-800 text-right pr-2 pt-2 text-gray-600">
                    {[...Array(14)].map((_, i) => (
                      <div key={i} className="leading-6">{i + 1}</div>
                    ))}
                  </div>

                  <div className="ml-14 h-full overflow-hidden relative">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div
                        className="absolute left-0 right-0 h-8 bg-gradient-to-b from-gray-900 via-transparent to-transparent"
                        style={{ animation: 'scanCode 6s ease-in-out infinite' }}
                      ></div>
                    </div>

                    <div className="space-y-2 animate-[autoScroll_14s_linear_infinite]">
                      <div className="text-gray-400">// Sistemas a medida + automatización</div>
                      <div>
                        <span className="text-gray-500">const</span> stack = {'{'}
                      </div>
                      <div className="pl-4 text-gray-200">frontend: ['Next.js', 'React', 'Tailwind'],</div>
                      <div className="pl-4 text-gray-200">backend: ['Node.js', 'Python', 'Go', 'Rust'],</div>
                      <div className="pl-4 text-gray-200">ia: ['LLMs', 'Vision', 'RPA', 'GenAI'],</div>
                      <div className="pl-4 text-gray-200">data: ['Pipelines', 'Dashboards', 'Forecasting'],</div>
                      <div className="pl-4 text-gray-200">ops: ['CI/CD', 'Observability', 'Infra as Code'],</div>
                      <div className="pl-4 text-gray-200">automation: ['Ecommerce', 'Soporte', 'Operaciones'],</div>
                      <div className="pl-4 text-gray-200">integrations: ['APIs', 'ERP/CRM', 'Mensajería'],</div>
                      <div className="pl-4 text-gray-200">vision: ['Monitoreo en vivo', 'Calidad', 'Seguridad'],</div>
                      <div className="pl-4 text-gray-200">security: ['SSO', 'Auditoría', 'Compliance'],</div>
                      <div>{'}'};</div>
                      <div className="text-gray-400">// Software y automatizaciones capaces de cubrir cualquier industria</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-900/40 border border-gray-800 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-sm text-gray-400">Tecnologías</div>
                </div>
                <div className="text-center p-4 bg-gray-900/40 border border-gray-800 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-sm text-gray-400">Lenguajes</div>
                </div>
                <div className="text-center p-4 bg-gray-900/40 border border-gray-800 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-sm text-gray-400">Disponibilidad</div>
                </div>
                <div className="text-center p-4 bg-gray-900/40 border border-gray-800 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">Multi-sector</div>
                  <div className="text-sm text-gray-400">Privado y público</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="moai" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MOAI</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                MOAI es nuestra plataforma propia de automatización conversacional y gestión inteligente de clientes. Automatiza conversaciones, soporte, prospección y generación de leads a través de WhatsApp, Instagram, Facebook Messenger y otros canales, integrándose con catálogos, bases de datos y workflows para aumentar ventas y reducir carga operativa.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Funciona como un asistente multicanal personalizable que conecta con los sistemas internos de cada empresa y optimiza el flujo de atención en todo tipo de industrias.
              </p>
              <a
                href="https://moaiverse.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-white to-gray-200 text-black px-6 py-3 rounded-full font-semibold shadow-lg shadow-black/30 hover:scale-105 transition-transform"
              >
                Conocer MOAI
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm shadow-xl shadow-black/40">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-600 border border-gray-500 flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Automatización conversacional</h3>
                  <p className="text-sm text-gray-400">Mensajería multiplataforma + generación de leads</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-200">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Flujos de ventas, soporte y postventa automatizados con IA generativa.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Integración con catálogos, CRMs y sistemas internos para respuestas en tiempo real.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Orquestación multicanal en WhatsApp, Instagram, Facebook Messenger y más.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <p>Reportes automáticos y KPIs para equipos comerciales y de atención.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Capacidades clave</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automatizamos cualquier proceso y desarrollamos software que se adapta a la operación de cada cliente, sin importar la industria.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/40 hover:bg-gray-800/50 border border-gray-800 hover:border-gray-600 rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 border border-gray-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-100 transition-colors">
                        {capability.title}
                      </h3>

                      <p className="text-gray-300 mb-4 leading-relaxed">{capability.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {capability.metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs text-gray-300"
                          >
                            {metric}
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

        <section className="py-20 bg-gradient-to-br from-gray-950 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Automatizamos lo que tu operación necesita
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Diseñamos software, analítica y flujos automatizados que conectan datos, equipos y canales. Desde ecommerce hasta servicios públicos, somos capaces de implementar cualquier solución.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-white to-gray-200 text-black px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-black/30">
                Iniciar automatización
              </button>
              <button className="border border-gray-600 hover:border-gray-400 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm">
                Consulta estratégica
              </button>
            </div>
          </div>
        </section>

        <footer id="contact" className="py-16 border-t border-gray-900 bg-gray-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <img
                      src="/logos/Metamachine.svg"
                      alt="Metamachine"
                      className="w-10 h-10 object-contain"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.25))' }}
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
                    <p className="text-xs text-gray-300">Software + Automatización</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Ingeniería de software con inteligencia artificial, analítica y automatización para empresas que necesitan sistemas confiables, medibles y alineados con sus operaciones.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                  <Zap className="w-5 h-5 text-white mr-2" />
                  Especialidades
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Automatización con IA
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Software a medida
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Analítica y datos
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Computer vision aplicada
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    Automatizaciones para ecommerce y servicios
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                  <Globe className="w-5 h-5 text-white mr-2" />
                  Conecta
                </h4>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <a
                      href="https://www.behance.net/metamachine_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-xl flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <Palette className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/metamachine/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-xl flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.youtube.com/@metamachine_tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-xl flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Síguenos para conocer las últimas innovaciones en software, IA aplicada y automatización.
                  </p>

                  <div className="pt-4">
                    <button className="w-full bg-gradient-to-r from-white to-gray-200 text-black px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-black/30">
                      Iniciar proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2024 Metamachine. Software y automatización para cualquier industria.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  Disponible para proyectos
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
