import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Monitor, 
  Gamepad2, 
  Box, 
  Zap, 
  ArrowRight, 
  ExternalLink,
  Github,
  Linkedin,
  Youtube,
  ChevronDown,
  Menu,
  X,
  Play,
  Star,
  Users,
  Sparkles,
  Globe,
  Database,
  Cpu,
  Cloud,
  Smartphone,
  Palette,
  Settings,
  Layers,
  Brain,
  Rocket,
  Target,
  Bot,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Shield,
  Workflow,
  Network
} from 'lucide-react';

const MetamachineWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Bloquear scroll cuando el menú está abierto
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
      // Limpiar estilos al desmontar
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [scrollY, isMenuOpen]);

  const services = [
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Desarrollamos soluciones de IA de vanguardia que revolucionan industrias. Desde automatización inteligente hasta análisis predictivo avanzado.",
      features: ["Machine Learning avanzado", "Procesamiento de lenguaje natural", "Automatización inteligente"]
    },
    {
      icon: Code,
      title: "Desarrollo de Software",
      description: "Arquitectura de software de primer nivel utilizando las tecnologías más avanzadas. Soluciones escalables y de alto rendimiento.",
      features: ["Arquitectura cloud-native", "APIs robustas", "Microservicios avanzados"]
    },
    {
      icon: ShoppingCart,
      title: "Automatización E-commerce",
      description: "Revolucionamos las operaciones de e-commerce con IA conversacional, automatización de ventas y análisis predictivo de clientes.",
      features: ["Agentes IA 24/7", "Integración omnicanal", "Analytics predictivos"]
    },
    {
      icon: Gamepad2,
      title: "Desarrollo de Videojuegos",
      description: "Experiencias interactivas de última generación con tecnologías emergentes. Desde indie games hasta AAA productions.",
      features: ["Mecánicas innovadoras", "Gráficos de vanguardia", "Multiplayer avanzado"]
    },
    {
      icon: Globe,
      title: "Mundos Virtuales UE5",
      description: "Creación de entornos fotorrealistas y experiencias inmersivas utilizando Unreal Engine 5 y tecnologías de realidad extendida.",
      features: ["Renderizado fotorrealista", "Física en tiempo real", "VR/AR Integration"]
    },
    {
      icon: Workflow,
      title: "Automatización Empresarial",
      description: "Transformamos procesos empresariales con automatización inteligente, optimizando eficiencia y reduciendo costos operativos.",
      features: ["Procesos automatizados", "Integración sistemas", "Optimización continua"]
    }
  ];

  const technologies = [
    // Frontend & UI
    { name: "React", category: "Frontend", official: "React" },
    { name: "Next.js", category: "Frontend", official: "Next.js" },
    { name: "TypeScript", category: "Language", official: "TypeScript" },
    { name: "Tailwind CSS", category: "Styling", official: "Tailwind CSS" },
    { name: "Vue.js", category: "Frontend", official: "Vue.js" },
    
    // Backend & Languages
    { name: "Node.js", category: "Backend", official: "Node.js" },
    { name: "Python", category: "Language", official: "Python" },
    { name: "JavaScript", category: "Language", official: "JavaScript" },
    { name: "C++", category: "Language", official: "C++" },
    { name: "C#", category: "Language", official: "C#" },
    { name: "Go", category: "Language", official: "Go" },
    
    // Game Development
    { name: "Unreal Engine", category: "Game Engine", official: "Unreal Engine" },
    { name: "Unity", category: "Game Engine", official: "Unity" },
    { name: "Godot", category: "Game Engine", official: "Godot" },
    
    // Cloud & Infrastructure
    { name: "AWS", category: "Cloud", official: "Amazon Web Services" },
    { name: "Microsoft Azure", category: "Cloud", official: "Microsoft Azure" },
    { name: "Google Cloud", category: "Cloud", official: "Google Cloud Platform" },
    { name: "Contabo", category: "Hosting", official: "Contabo" },
    { name: "Docker", category: "DevOps", official: "Docker" },
    { name: "Kubernetes", category: "DevOps", official: "Kubernetes" },
    
    // AI & Machine Learning
    { name: "TensorFlow", category: "AI/ML", official: "TensorFlow" },
    { name: "PyTorch", category: "AI/ML", official: "PyTorch" },
    { name: "OpenAI", category: "AI/ML", official: "OpenAI" },
    { name: "Hugging Face", category: "AI/ML", official: "Hugging Face" },
    
    // Databases
    { name: "MongoDB", category: "Database", official: "MongoDB" },
    { name: "PostgreSQL", category: "Database", official: "PostgreSQL" },
    { name: "Redis", category: "Cache", official: "Redis" },
    { name: "Supabase", category: "Database", official: "Supabase" },
    
    // E-commerce & Automation
    { name: "Shopify", category: "E-commerce", official: "Shopify" },
    { name: "WooCommerce", category: "E-commerce", official: "WooCommerce" },
    { name: "N8N", category: "Automation", official: "n8n" },
    { name: "Zapier", category: "Automation", official: "Zapier" },
    
    // Communication & Social
    { name: "WhatsApp Business", category: "Communication", official: "WhatsApp Business API" },
    { name: "Telegram", category: "Communication", official: "Telegram" },
    { name: "Discord", category: "Communication", official: "Discord" },
    { name: "Facebook", category: "Social", official: "Meta for Developers" },
    { name: "Instagram", category: "Social", official: "Instagram Basic Display API" },
    
    // 3D & Design
    { name: "Blender", category: "3D", official: "Blender" },
    { name: "Autodesk Maya", category: "3D", official: "Autodesk Maya" },
    { name: "3ds Max", category: "3D", official: "Autodesk 3ds Max" },
    { name: "Substance Suite", category: "Texturing", official: "Adobe Substance 3D" },
    { name: "ZBrush", category: "Sculpting", official: "ZBrush" },
    
    // Development Tools
    { name: "Git", category: "Version Control", official: "Git" },
    { name: "GitHub", category: "DevOps", official: "GitHub" },
    { name: "GitLab", category: "DevOps", official: "GitLab" },
    { name: "Jira", category: "Project Management", official: "Atlassian Jira" }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "IA Conversacional Avanzada",
      description: "Desarrollamos agentes de IA que mantienen conversaciones naturales y contextuales, capaces de manejar consultas complejas en tiempo real.",
      metrics: ["99.9% Disponibilidad", "< 100ms Respuesta", "Multiidioma"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Automatizado",
      description: "Transformamos tiendas online con automatización completa: desde consultas pre-venta hasta soporte post-venta con IA especializada.",
      metrics: ["450% Aumento ventas", "24/7 Atención", "97% Satisfacción"]
    },
    {
      icon: Network,
      title: "Integración Omnicanal",
      description: "Conectamos todos los puntos de contacto: WhatsApp, redes sociales, web, email. Un ecosistema unificado de comunicación inteligente.",
      metrics: ["15+ Plataformas", "API Unificada", "Sync en tiempo real"]
    },
    {
      icon: BarChart3,
      title: "Analytics Predictivos",
      description: "Análisis de datos en tiempo real con machine learning para predecir comportamientos, optimizar conversiones y maximizar ROI.",
      metrics: ["Predicción 94% exacta", "Insights en vivo", "ROI Optimizado"]
    }
  ];

  // Menú móvil mejorado con iconos
  const mobileMenuItems = [
    { name: 'Servicios', href: '#services', icon: Zap },
    { name: 'Tecnologías', href: '#tech', icon: Code },
    { name: 'Capacidades', href: '#capabilities', icon: Settings },
    { name: 'Contacto', href: '#contact', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Advanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        
        {/* Animated Circuit Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'circuitPulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* Floating Binary Particles - MODIFICADO para incluir colores verdes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => {
            const isGreen = Math.random() > 0.5; // Alternar entre azul y verde
            return (
              <div
                key={i}
                className={`absolute font-mono text-xs select-none pointer-events-none ${
                  isGreen ? 'text-green-400/30' : 'text-cyan-400/30'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              >
                {Math.random() > 0.5 ? '01010011' : '11000101'}
              </div>
            );
          })}
        </div>

        {/* Energy Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>

        {/* Scanning Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
               style={{animation: 'scanLineVertical 8s linear infinite'}}></div>
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
               style={{animation: 'scanLineHorizontal 10s linear infinite'}}></div>
        </div>

        {/* Data Stream */}
        <div className="absolute right-10 top-0 h-full w-px overflow-hidden">
          <div className="absolute w-full h-32 bg-gradient-to-b from-cyan-400/30 to-transparent"
               style={{animation: 'dataStream 3s linear infinite'}}></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
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
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4);
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
        {/* Header Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-blue-500/20' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                {/* Logo limpio sin fondo */}
                <div className="relative">
                  <img 
                    src="/logos/Metamachine.svg" 
                    alt="Metamachine" 
                    className="w-10 h-10 object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback logo simple */}
                  <div 
                    className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center" 
                    style={{display: 'none'}}
                  >
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Servicios</a>
                  <a href="#tech" className="text-gray-300 hover:text-cyan-400 transition-colors">Tecnologías</a>
                  <a href="#capabilities" className="text-gray-300 hover:text-cyan-400 transition-colors">Capacidades</a>
                  <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                    Contacto
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu - CENTRADO PERFECTO */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/20 backdrop-blur-md z-40 md:hidden flex items-center justify-center">
              {/* Botón X para cerrar */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="fixed top-6 right-6 z-50 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full flex items-center justify-center hover:bg-gray-700/80 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Contenedor centrado */}
              <div className="flex flex-col items-center justify-center space-y-6 px-8 py-16">
                {mobileMenuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-8 py-4 flex items-center space-x-4 hover:bg-gray-700/80 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 min-w-[240px]">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="text-xl font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 hidden sm:inline-flex items-center px-4 py-2 bg-gray-900/50 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Tecnologías de Punta • Innovación • Inteligencia Artificial</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight mt-16 sm:mt-0">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                Desarrollamos
              </span>
              <br />
              <span 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                style={{
                  animation: 'glitch 8s ease-in-out infinite',
                  textShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
                }}
              >
                Software de Vanguardia
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Somos desarrolladores de software de primer nivel especializados en <strong className="text-cyan-400">Inteligencia Artificial</strong> y 
              tecnologías emergentes. Automatizamos operaciones de e-commerce, creamos videojuegos innovadores y 
              construimos soluciones que definen el futuro digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center">
                Explorar Soluciones IA
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-blue-500/50 hover:border-blue-400 px-8 py-4 rounded-full font-semibold transition-all hover:bg-blue-500/10 backdrop-blur-sm flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Ver Tecnologías
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.behance.net/metamachine_dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-900/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <Palette className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/metamachine/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-900/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a 
                href="https://www.youtube.com/@metamachine_tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-900/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-gray-700 hover:border-cyan-500/50 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Soluciones Tecnológicas
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Desde IA conversacional hasta mundos virtuales, desarrollamos software que revoluciona industrias
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-gray-900/30 hover:bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Particle effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animation: `float ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random()}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="tech" className="py-16 bg-gray-950/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Stack Tecnológico
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                El código que impulsa nuestras soluciones
              </p>
            </div>

            {/* Unified Code Editor */}
            <div className="max-w-5xl mx-auto">
              <div 
                className="bg-gray-900/80 border border-cyan-500/30 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-cyan-500/10 relative h-80"
                style={{
                  animation: 'pulseGlow 6s ease-in-out infinite',
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))'
                }}
              >
                {/* Holographic overlay */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(45deg, transparent 48%, rgba(6, 182, 212, 0.03) 49%, rgba(6, 182, 212, 0.03) 51%, transparent 52%)',
                      backgroundSize: '20px 20px',
                      animation: 'float 4s ease-in-out infinite'
                    }}
                  ></div>
                </div>

                {/* Scanning Line with Green Neon Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
                       style={{animation: 'scanCode 4s linear infinite'}}></div>
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400/80 to-transparent"
                       style={{animation: 'scanCode 6s linear infinite 2s'}}></div>
                </div>
                
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm font-mono">metamachine-stack.ts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">TypeScript</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </div>

                {/* Code Content with auto-scroll */}
                <div className="relative h-full overflow-hidden">
                  <div 
                    className="absolute inset-0 p-6 font-mono text-sm leading-relaxed"
                    style={{
                      animation: 'autoScroll 20s linear infinite',
                      height: '200%'
                    }}
                  >
                    
                    {/* Frontend Stack */}
                    <div className="mb-6">
                      <div className="text-purple-400 mb-2">// Frontend Technologies</div>
                      <div className="text-cyan-400">const <span className="text-yellow-300">frontend</span> = &#123;</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-gray-300">frameworks: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Next.js'</span>, <span className="text-green-300">'Vue.js'</span>],</div>
                        <div className="text-gray-300">languages: [<span className="text-green-300">'TypeScript'</span>, <span className="text-green-300">'JavaScript'</span>],</div>
                        <div className="text-gray-300">styling: [<span className="text-green-300">'TailwindCSS'</span>, <span className="text-green-300">'CSS3'</span>],</div>
                        <div className="text-gray-300">tools: [<span className="text-green-300">'Vite'</span>, <span className="text-green-300">'Webpack'</span>]</div>
                      </div>
                      <div className="text-cyan-400">&#125;;</div>
                    </div>

                    {/* Backend Stack */}
                    <div className="mb-6">
                      <div className="text-purple-400 mb-2">// Backend & Languages</div>
                      <div className="text-cyan-400">const <span className="text-yellow-300">backend</span> = &#123;</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-gray-300">runtime: [<span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'Deno'</span>],</div>
                        <div className="text-gray-300">languages: [<span className="text-green-300">'Python'</span>, <span className="text-green-300">'Go'</span>, <span className="text-green-300">'C++'</span>, <span className="text-green-300">'C#'</span>],</div>
                        <div className="text-gray-300">databases: [<span className="text-green-300">'MongoDB'</span>, <span className="text-green-300">'PostgreSQL'</span>, <span className="text-green-300">'Redis'</span>]</div>
                      </div>
                      <div className="text-cyan-400">&#125;;</div>
                    </div>

                    {/* Game Development */}
                    <div className="mb-6">
                      <div className="text-purple-400 mb-2">// Game Development</div>
                      <div className="text-cyan-400">const <span className="text-yellow-300">gameEngines</span> = [</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-green-300">'Unreal Engine 5',</div>
                        <div className="text-green-300">'Unity',</div>
                        <div className="text-green-300">'Godot'</div>
                      </div>
                      <div className="text-cyan-400">];</div>
                    </div>

                    {/* Cloud Infrastructure */}
                    <div className="mb-6">
                      <div className="text-purple-400 mb-2">// Cloud & Infrastructure</div>
                      <div className="text-cyan-400">const <span className="text-yellow-300">cloud</span> = &#123;</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-gray-300">providers: [<span className="text-green-300">'AWS'</span>, <span className="text-green-300">'Azure'</span>, <span className="text-green-300">'GCP'</span>, <span className="text-green-300">'Contabo'</span>],</div>
                        <div className="text-gray-300">containers: [<span className="text-green-300">'Docker'</span>, <span className="text-green-300">'Kubernetes'</span>],</div>
                        <div className="text-gray-300">devops: [<span className="text-green-300">'Git'</span>, <span className="text-green-300">'GitHub'</span>, <span className="text-green-300">'GitLab'</span>]</div>
                      </div>
                      <div className="text-cyan-400">&#125;;</div>
                    </div>

                    {/* E-commerce & Automation */}
                    <div className="mb-6">
                      <div className="text-purple-400 mb-2">// E-commerce & Automation</div>
                      <div className="text-cyan-400">const <span className="text-yellow-300">ecommerce</span> = &#123;</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-gray-300">platforms: [<span className="text-green-300">'Shopify'</span>, <span className="text-green-300">'WooCommerce'</span>],</div>
                        <div className="text-gray-300">automation: [<span className="text-green-300">'N8N'</span>, <span className="text-green-300">'Zapier'</span>],</div>
                        <div className="text-gray-300">communication: [<span className="text-green-300">'WhatsApp API'</span>, <span className="text-green-300">'Discord'</span>, <span className="text-green-300">'Telegram'</span>]</div>
                      </div>
                      <div className="text-cyan-400">&#125;;</div>
                    </div>

                    {/* 3D & Design */}
                    <div className="mb-6">
                      <div className="text-purple-400 mb-2">// 3D & Design Tools</div>
                      <div className="text-cyan-400">const <span className="text-yellow-300">design3D</span> = [</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-green-300">'Blender',</div>
                        <div className="text-green-300">'Autodesk Maya',</div>
                        <div className="text-green-300">'3ds Max',</div>
                        <div className="text-green-300">'Substance Suite',</div>
                        <div className="text-green-300">'ZBrush'</div>
                      </div>
                      <div className="text-cyan-400">];</div>
                    </div>

                    {/* Marketing & Social */}
                    <div className="mb-6">
                      <div className="text-purple-400 mb-2">// Marketing & Social APIs</div>
                      <div className="text-cyan-400">const <span className="text-yellow-300">marketing</span> = &#123;</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-gray-300">social: [<span className="text-green-300">'Meta (Facebook/Instagram)'</span>, <span className="text-green-300">'Google Ads'</span>],</div>
                        <div className="text-gray-300">analytics: [<span className="text-green-300">'Google Analytics'</span>, <span className="text-green-300">'Meta Pixel'</span>]</div>
                      </div>
                      <div className="text-cyan-400">&#125;;</div>
                    </div>

                    {/* Export Statement */}
                    <div className="pt-4 border-t border-gray-700/30 mb-6">
                      <div className="text-purple-400">export default</div>
                      <div className="text-cyan-400 ml-2">&#123; frontend, backend, gameEngines, cloud, ecommerce, design3D, marketing &#125;;</div>
                    </div>

                    {/* Duplicate content for seamless loop */}
                    <div className="mb-6">
                      <div className="text-purple-400 mb-2">// Frontend Technologies</div>
                      <div className="text-cyan-400">const <span className="text-yellow-300">frontend</span> = &#123;</div>
                      <div className="ml-4 space-y-1">
                        <div className="text-gray-300">frameworks: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Next.js'</span>, <span className="text-green-300">'Vue.js'</span>],</div>
                        <div className="text-gray-300">languages: [<span className="text-green-300">'TypeScript'</span>, <span className="text-green-300">'JavaScript'</span>],</div>
                        <div className="text-gray-300">styling: [<span className="text-green-300">'TailwindCSS'</span>, <span className="text-green-300">'CSS3'</span>],</div>
                        <div className="text-gray-300">tools: [<span className="text-green-300">'Vite'</span>, <span className="text-green-300">'Webpack'</span>]</div>
                      </div>
                      <div className="text-cyan-400">&#125;;</div>
                    </div>

                  </div>

                  {/* Gradient fade effect at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
                </div>

                {/* Footer Status */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800/90 border-t border-gray-700/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <span className="text-green-400">✓ Compiled successfully</span>
                    <span className="text-gray-500">Lines: 42</span>
                    <span className="text-gray-500">Stack: Production Ready</span>
                  </div>
                  <div className="text-gray-500">
                    Metamachine Stack v2024
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-gray-900/30 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-cyan-400">25+</div>
                <div className="text-sm text-gray-400">Tecnologías</div>
              </div>
              <div className="text-center p-4 bg-gray-900/30 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">8</div>
                <div className="text-sm text-gray-400">Lenguajes</div>
              </div>
              <div className="text-center p-4 bg-gray-900/30 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">3</div>
                <div className="text-sm text-gray-400">Game Engines</div>
              </div>
              <div className="text-center p-4 bg-gray-900/30 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-emerald-400">99%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>

          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Capacidades de Automatización
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transformamos operaciones de e-commerce con tecnología de vanguardia
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="group bg-gray-900/30 hover:bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <capability.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                        {capability.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {capability.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {capability.metrics.map((metric, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-xs text-gray-300 group-hover:border-blue-500/50 transition-colors"
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-950 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ¿Listo para la Transformación Digital?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Únete a las empresas que ya aprovechan nuestras soluciones de IA y automatización de vanguardia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Iniciar Automatización
              </button>
              <button className="border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm">
                Consulta Estratégica
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-16 border-t border-gray-800 bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <img 
                      src="/logos/Metamachine.svg" 
                      alt="Metamachine" 
                      className="w-10 h-10 object-contain"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback logo mejorado */}
                    <div 
                      className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25" 
                      style={{display: 'none'}}
                    >
                      <span className="text-white font-bold text-xl">M</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Metamachine</h3>
                    <p className="text-xs text-cyan-400">Tech Solutions</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Desarrolladores de software de primer nivel especializados en IA, automatización de e-commerce 
                  y tecnologías emergentes que definen el futuro digital.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                  <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                  Especialidades
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    Inteligencia Artificial
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    Automatización E-commerce
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    Desarrollo de Software
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    Videojuegos & UE5
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    Soluciones Cloud
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
                  <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                  Conecta
                </h4>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.behance.net/metamachine_dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <Palette className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/metamachine/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                    <a 
                      href="https://www.youtube.com/@metamachine_tech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <Youtube className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Síguenos para conocer las últimas innovaciones tecnológicas y proyectos destacados.
                  </p>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 text-white">
                      Iniciar Proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Metamachine. Desarrollando el futuro con tecnología de vanguardia.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Disponible para proyectos
                </span>
                <span>|</span>
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MetamachineWebsite;