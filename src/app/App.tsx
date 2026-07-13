import { useState, useEffect } from "react";
import {
  Menu, X, Github, Linkedin, Mail,
  Code2, Smartphone, Database, Globe, ArrowUpRight,
  MapPin, Briefcase, ChevronRight, Terminal, Download, Languages
} from "lucide-react";

type Lang = "es" | "en";

const T = {
  es: {
    portfolio: "Portfolio",
    role: "Digital Product & Tech Strategy",
    roleShort: "Mobile Solutions · AI Implementation",
    navItems: ["Inicio", "Sobre mí", "Habilidades", "Experiencia", "Proyectos", "Contacto"],
    heroLabel: "hideki.sotero —— digital product & tech strategy",
    heroSubtitle: ["Mobile Solutions | AI Implementation", "| Banking Tech"],
    heroDesc: "Desarrollo aplicaciones Android de alto impacto para el sector financiero. Especializado en Kotlin y Jetpack Compose, con experiencia adicional en React y ciencia de datos con Python.",
    heroLocation: "Open to opportunities · Remoto / Presencial",
    btnProjects: "Ver proyectos",
    btnContact: "Contactar",
    stats: [
      { label: "Años de experiencia", value: "6+" },
      { label: "Apps Android publicadas", value: "8+" },
      { label: "Sector actual", value: "Banking" },
      { label: "Lenguajes dominados", value: "5" },
    ],
    aboutTitle: "Sobre mí",
    aboutBio: [
      "Ingeniero de Sistemas dedicado a conectar la estrategia técnica de alto nivel con productos digitales escalables. Apasionado por construir ecosistemas móviles robustos y aprovechar la IA para impulsar la innovación y la eficiencia operativa.",
      "Con experiencia sólida en desarrollo Android para el sector bancario, también domino el desarrollo web con React y la ciencia de datos con Python — lo que me permite entender el stack completo y tomar decisiones técnicas alineadas con el negocio.",
      "Me interesa profundamente el business analytics y el core del negocio, buscando siempre traducir datos e insights técnicos en estrategia digital y valor real para las organizaciones.",
    ],
    aboutHighlight1: "business analytics",
    aboutHighlight2: "estrategia digital y valor real",
    interestsLabel: "Intereses actuales",
    interests: ["Android Banking", "Fintech", "Project Management", "Team Leadership", "Agile / Scrum", "Clean Architecture"],
    skillsTitle: "Habilidades",
    skills: [
      { domain: "Android Development", level: "Expert", items: ["Kotlin", "Jetpack Compose", "Android SDK", "MVVM / MVI", "Coroutines", "Room DB", "Retrofit", "Hilt"] },
      { domain: "Web Development", level: "Proficient", items: ["React", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS", "REST APIs"] },
      { domain: "Data Science", level: "Proficient", items: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Jupyter", "SQL"] },
      { domain: "Otros Lenguajes & Herramientas", level: "Familiar", items: ["Java", "C++", "Git", "CI/CD", "Agile / Scrum", "Figma"] },
    ],
    expTitle: "Experiencia",
    actualBadge: "ACTUAL",
    experience: [
      {
        period: "2026 — Presente",
        role: "Mobile Software Developer",
        company: "Moventi – Santander",
        current: true,
        description: "Desarrollo de app de gestión de créditos para PYMEs en el ecosistema bancario de Santander. Trabajo conjunto con equipos de Backend y UX para identificación de requerimientos e integración de soluciones móviles.",
        highlights: ["Kotlin", "Jetpack Compose", "Banking", "UX Collaboration", "Agile"],
      },
      {
        period: "2024 — 2025",
        role: "Desarrollador Android",
        company: "Universidad de Lima",
        current: false,
        description: "Validación de requerimientos funcionales y generación de métricas de uso para la app universitaria. Controles técnicos en APIs REST, facilitación de sesiones con stakeholders y automatización de flujos de información.",
        highlights: ["Business Analysis", "Métricas & KPIs", "REST APIs", "Stakeholder Management", "Kotlin"],
      },
      {
        period: "2024",
        role: "Desarrollador Multiplataforma (Móvil)",
        company: "Universidad de Lima",
        current: false,
        description: "Automatización de procesos de sincronización entre frontend y backend. Auditorías técnicas y seguimiento de requerimientos bajo SCRUM, asegurando trazabilidad y resolución colaborativa de incidencias.",
        highlights: ["React Native", "TypeScript", "SCRUM", "Integración de Sistemas"],
      },
    ],
    projectsTitle: "Proyectos",
    projects: [
      {
        number: "01", name: "Crypto Wallet App", type: "Mobile",
        description: "App Android para seguimiento de criptomonedas en tiempo real. Portafolio, historial de precios y alertas personalizadas con arquitectura MVVM y Clean Architecture.",
        stack: ["Kotlin", "Jetpack Compose", "Retrofit", "Room DB", "Hilt", "CoinGecko API"],
      },
      {
        number: "02", name: "Predicción de Préstamos Bancarios", type: "Data Science",
        description: "Modelo ML para predecir aprobación de préstamos bancarios según historial crediticio e ingresos. Análisis exploratorio y visualización de factores clave de decisión.",
        stack: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter", "XGBoost"],
      },
      {
        number: "03", name: "Predicción de Mantenimiento NASA", type: "Data Science",
        description: "Modelo predictivo aplicado a datasets de turbinas de la NASA. Estimación de vida útil restante (RUL) mediante series temporales y aprendizaje automático.",
        stack: ["Python", "scikit-learn", "LSTM", "Pandas", "NumPy", "Seaborn"],
      },
      {
        number: "04", name: "Predicción de Abandono de Clientes", type: "Data Science",
        description: "Modelo de clasificación para identificar clientes con alta probabilidad de churn. Análisis de comportamiento, segmentación y recomendaciones estratégicas para retención.",
        stack: ["Python", "scikit-learn", "Pandas", "SHAP", "Plotly", "Random Forest"],
      },
    ],
    contactTitle: "Contacto",
    contactHeading: "Hablemos.",
    contactDesc: "Estoy abierto a oportunidades en desarrollo Android, roles en fintech, y posiciones que combinen liderazgo técnico con gestión de proyectos. No dudes en escribirme.",
    contactLinks: [
      { label: "hideki.sotero@gmail.com", href: "mailto:hideki.sotero@gmail.com" },
      { label: "linkedin.com/in/hideki-sotero", href: "https://www.linkedin.com/in/hideki-sotero/" },
      { label: "github.com/Hiidekii", href: "https://github.com/Hiidekii" },
    ],
    downloadCV: "Descargar CV",
    formName: "Nombre", formNamePH: "Tu nombre completo",
    formEmail: "Email", formEmailPH: "tu@email.com",
    formSubject: "Asunto", formSubjectPH: "Oportunidad / Colaboración / Consulta",
    formMessage: "Mensaje", formMessagePH: "Cuéntame sobre tu proyecto u oportunidad...",
    formSend: "Enviar mensaje",
    copyright: "© 2026 H. Sotero",
  },
  en: {
    portfolio: "Portfolio",
    role: "Digital Product & Tech Strategy",
    roleShort: "Mobile Solutions · AI Implementation",
    navItems: ["Home", "About", "Skills", "Experience", "Projects", "Contact"],
    heroLabel: "hideki.sotero —— digital product & tech strategy",
    heroSubtitle: ["Mobile Solutions | AI Implementation", "| Banking Tech"],
    heroDesc: "I build high-impact Android applications for the financial sector. Specialized in Kotlin and Jetpack Compose, with additional experience in React and data science with Python.",
    heroLocation: "Open to opportunities · Remote / On-site",
    btnProjects: "View projects",
    btnContact: "Contact me",
    stats: [
      { label: "Years of experience", value: "6+" },
      { label: "Android apps published", value: "8+" },
      { label: "Current sector", value: "Banking" },
      { label: "Languages mastered", value: "5" },
    ],
    aboutTitle: "About me",
    aboutBio: [
      "Systems Engineer dedicated to bridging high-level technical strategy with scalable digital products. Passionate about building robust mobile ecosystems and leveraging AI to drive innovation and operational efficiency.",
      "With solid experience in Android development for the banking sector, I also master web development with React and data science with Python — allowing me to understand the full stack and make technical decisions aligned with business goals.",
      "I am deeply interested in business analytics and the core of the business, always seeking to translate data and technical insights into digital strategy and real value for organizations.",
    ],
    aboutHighlight1: "business analytics",
    aboutHighlight2: "digital strategy and real value",
    interestsLabel: "Current interests",
    interests: ["Android Banking", "Fintech", "Project Management", "Team Leadership", "Agile / Scrum", "Clean Architecture"],
    skillsTitle: "Skills",
    skills: [
      { domain: "Android Development", level: "Expert", items: ["Kotlin", "Jetpack Compose", "Android SDK", "MVVM / MVI", "Coroutines", "Room DB", "Retrofit", "Hilt"] },
      { domain: "Web Development", level: "Proficient", items: ["React", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS", "REST APIs"] },
      { domain: "Data Science", level: "Proficient", items: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Jupyter", "SQL"] },
      { domain: "Other Languages & Tools", level: "Familiar", items: ["Java", "C++", "Git", "CI/CD", "Agile / Scrum", "Figma"] },
    ],
    expTitle: "Experience",
    actualBadge: "CURRENT",
    experience: [
      {
        period: "2026 — Present",
        role: "Mobile Software Developer",
        company: "Moventi – Santander",
        current: true,
        description: "Development of a credit management app for SMEs within the Santander banking ecosystem. Collaborative work with Backend and UX teams for requirements identification and mobile solution integration.",
        highlights: ["Kotlin", "Jetpack Compose", "Banking", "UX Collaboration", "Agile"],
      },
      {
        period: "2024 — 2025",
        role: "Android Developer",
        company: "Universidad de Lima",
        current: false,
        description: "Functional requirements validation and usage metrics generation for the university app. Technical controls on REST APIs, stakeholder sessions facilitation and information flow automation.",
        highlights: ["Business Analysis", "Metrics & KPIs", "REST APIs", "Stakeholder Management", "Kotlin"],
      },
      {
        period: "2024",
        role: "Cross-Platform Developer (Mobile)",
        company: "Universidad de Lima",
        current: false,
        description: "Automation of data synchronization processes between frontend and backend. Technical audits and requirements tracking under SCRUM, ensuring traceability and collaborative incident resolution.",
        highlights: ["React Native", "TypeScript", "SCRUM", "Systems Integration"],
      },
    ],
    projectsTitle: "Projects",
    projects: [
      {
        number: "01", name: "Crypto Wallet App", type: "Mobile",
        description: "Android app for real-time cryptocurrency tracking. Portfolio, price history and custom alerts with MVVM and Clean Architecture.",
        stack: ["Kotlin", "Jetpack Compose", "Retrofit", "Room DB", "Hilt", "CoinGecko API"],
      },
      {
        number: "02", name: "Bank Loan Prediction", type: "Data Science",
        description: "ML model to predict bank loan approval based on credit history and income. Exploratory analysis and visualization of key decision factors.",
        stack: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter", "XGBoost"],
      },
      {
        number: "03", name: "NASA Maintenance Prediction", type: "Data Science",
        description: "Predictive model applied to NASA turbine datasets. Estimation of remaining useful life (RUL) using time series and machine learning.",
        stack: ["Python", "scikit-learn", "LSTM", "Pandas", "NumPy", "Seaborn"],
      },
      {
        number: "04", name: "Customer Churn Prediction", type: "Data Science",
        description: "Classification model to identify customers with high churn probability. Behavior analysis, segmentation and strategic retention recommendations.",
        stack: ["Python", "scikit-learn", "Pandas", "SHAP", "Plotly", "Random Forest"],
      },
    ],
    contactTitle: "Contact",
    contactHeading: "Let's talk.",
    contactDesc: "I'm open to opportunities in Android development, fintech roles, and positions that combine technical leadership with project management. Feel free to reach out.",
    contactLinks: [
      { label: "hideki.sotero@gmail.com", href: "mailto:hideki.sotero@gmail.com" },
      { label: "linkedin.com/in/hideki-sotero", href: "https://www.linkedin.com/in/hideki-sotero/" },
      { label: "github.com/Hiidekii", href: "https://github.com/Hiidekii" },
    ],
    downloadCV: "Download CV",
    formName: "Name", formNamePH: "Your full name",
    formEmail: "Email", formEmailPH: "you@email.com",
    formSubject: "Subject", formSubjectPH: "Opportunity / Collaboration / Inquiry",
    formMessage: "Message", formMessagePH: "Tell me about your project or opportunity...",
    formSend: "Send message",
    copyright: "© 2026 H. Sotero",
  },
};

const SKILL_ICONS = [Smartphone, Globe, Database, Code2];
const CONTACT_ICONS = [Mail, Linkedin, Github];
const NAV_IDS = ["hero", "about", "skills", "experience", "projects", "contact"];

export default function App() {
  const [lang, setLang] = useState<Lang>("es");
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const t = T[lang];

  const handleDownloadCV = () => {
    // Al estar en la carpeta 'public', el archivo se sirve en la raíz.
    // Usamos una ruta absoluta sin el slash inicial redundante si estamos en producción.
    const fileName = "Hideki_Sotero_Business_Analyst.pdf";
  
    // Esta es la forma más segura de obtener la ruta raíz correcta en Vite
    const filePath = `${import.meta.env.BASE_URL}${fileName}`.replace(/\/+/g, '/');

    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Hideki_Sotero_CV.pdf";
  
    // Forzamos la descarga
    link.target = "_blank"; 
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, email, asunto, mensaje } = formData;
    const text = `Hola soy ${nombre} te contacto por ${asunto} ${mensaje}. Mi email de contacto es ${email}`;
    const url = `https://wa.me/51989184213?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.25, rootMargin: "-80px 0px -60% 0px" }
    );
    NAV_IDS.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className={`flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded-sm border border-border text-muted-foreground hover:text-accent hover:border-accent/40 transition-all ${className}`}
    >
      <Languages size={14} />
      {lang === "es" ? "EN" : "ES"}
    </button>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Sidebar Desktop ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-56 flex-col border-r border-border bg-card z-40 px-6 py-8">
        <div className="mb-6">
          <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-2">{t.portfolio}</p>
          <h1 className="text-xl font-bold text-foreground leading-tight tracking-tight">Hideki<br />Sotero</h1>
          <p className="text-xs text-accent mt-1.5 font-mono">{t.role}</p>
        </div>

        <LangToggle className="mb-6 self-start" />

        <nav className="flex-1">
          <ul className="space-y-0.5">
            {t.navItems.map((label, i) => (
              <li key={NAV_IDS[i]}>
                <button
                  onClick={() => scrollTo(NAV_IDS[i])}
                  className={`w-full text-left text-sm px-3 py-2 rounded-sm transition-all duration-150 flex items-center gap-2.5 ${
                    activeSection === NAV_IDS[i]
                      ? "text-accent bg-accent/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {activeSection === NAV_IDS[i] && <span className="w-1 h-1 rounded-full bg-accent shrink-0" />}
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-6 border-t border-border">
          <div className="flex gap-4 mb-4 justify-center">
            <a href="https://github.com/Hiidekii" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/hideki-sotero/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn"><Linkedin size={28} /></a>
            <a href="mailto:hideki.sotero@gmail.com" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email"><Mail size={28} /></a>
          </div>
          <p className="text-sm font-mono text-muted-foreground/60 text-center">{t.copyright}</p>
        </div>
      </aside>

      {/* ── Mobile Header ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border px-5 py-3.5 flex justify-between items-center">
        <div>
          <p className="text-sm font-bold text-foreground leading-tight">Hideki Sotero</p>
          <p className="text-[10px] font-mono text-accent">{t.roleShort}</p>
        </div>
        <div className="flex items-center gap-3">
          <LangToggle />
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground p-1" aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/97 backdrop-blur-md flex flex-col items-center justify-center gap-7 pt-16">
          {t.navItems.map((label, i) => (
            <button key={NAV_IDS[i]} onClick={() => scrollTo(NAV_IDS[i])} className="text-2xl font-semibold text-foreground hover:text-accent transition-colors flex items-center gap-3">
              <span className="text-sm font-mono text-muted-foreground/60">0{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
      )}

      {/* ── Main Content ── */}
      <main className="lg:pl-56">

        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center px-8 md:px-14 lg:px-16 pt-20 lg:pt-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative w-full flex flex-col xl:flex-row xl:items-center">
            <div className="flex-1 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Terminal size={12} className="text-accent" />
                <span className="font-mono text-xs text-accent/80 tracking-widest">{t.heroLabel}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-none tracking-tighter mb-5">
                Hideki<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(96,165,250,0.5)" }}>Sotero</span>
              </h1>

              <div className="mb-5">
                <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide leading-snug">
                  {t.heroSubtitle[0]}<br />{t.heroSubtitle[1]}
                </p>
              </div>

              <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-4">{t.heroDesc}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <MapPin size={13} className="text-accent" />
                <span>{t.heroLocation}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollTo("projects")} className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/80 transition-colors flex items-center gap-2">
                  {t.btnProjects} <ArrowUpRight size={15} />
                </button>
                <button onClick={() => scrollTo("contact")} className="px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:border-accent/60 hover:text-accent transition-all">
                  {t.btnContact}
                </button>
              </div>
            </div>

            <div className="hidden xl:flex flex-col gap-6 shrink-0 border-l border-border pl-10 pr-10 ml-auto">
              {t.stats.map(({ label, value }) => (
                <div key={label} className="text-right">
                  <div className="text-4xl font-extrabold text-accent leading-none">{value}</div>
                  <div className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="min-h-screen flex items-center px-8 md:px-14 lg:px-16 py-28">
          <div className="w-full max-w-5xl">
            <SectionLabel number="01" title={t.aboutTitle} />
            <div className="grid lg:grid-cols-5 gap-12 mt-14">
              <div className="lg:col-span-3 space-y-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{t.aboutBio[0]}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.aboutBio[1]}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es"
                    ? <>Me interesa profundamente el <span className="text-foreground font-semibold">business analytics</span> y el core del negocio, buscando siempre traducir datos e insights técnicos en <span className="text-foreground font-semibold">estrategia digital y valor real</span> para las organizaciones.</>
                    : <>I am deeply interested in <span className="text-foreground font-semibold">business analytics</span> and the core of the business, always seeking to translate data and technical insights into <span className="text-foreground font-semibold">digital strategy and real value</span> for organizations.</>
                  }
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={15} className="text-accent" />
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{t.interestsLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.interests.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-secondary rounded-sm text-secondary-foreground border border-border">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                {t.stats.map(({ label, value }) => (
                  <div key={label} className="border border-border rounded-sm p-5 bg-card hover:border-accent/30 transition-colors">
                    <div className="text-2xl font-extrabold text-accent mb-1">{value}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="min-h-screen flex items-center px-8 md:px-14 lg:px-16 py-28 bg-card/30">
          <div className="w-full max-w-5xl">
            <SectionLabel number="02" title={t.skillsTitle} />
            <div className="grid md:grid-cols-2 gap-5 mt-14">
              {t.skills.map(({ domain, level, items }, i) => {
                const Icon = SKILL_ICONS[i];
                return (
                  <div key={domain} className="border border-border rounded-sm p-6 bg-card hover:border-accent/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-sm bg-primary/10 border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                        <Icon size={16} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{domain}</p>
                        <p className="text-xs font-mono text-muted-foreground">{level}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span key={item} className="text-xs px-2.5 py-1 rounded-sm bg-secondary text-secondary-foreground border border-border/80 group-hover:border-accent/15 transition-colors">{item}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="min-h-screen flex items-center px-8 md:px-14 lg:px-16 py-28">
          <div className="w-full max-w-4xl">
            <SectionLabel number="03" title={t.expTitle} />
            <div className="mt-14">
              {t.experience.map((exp, i) => (
                <div key={i} className="flex gap-6 md:gap-10">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${exp.current ? "bg-accent" : "bg-border"}`} />
                    {i < t.experience.length - 1 && <div className="w-px flex-1 bg-border mt-1.5" />}
                  </div>
                  <div className="pb-12">
                    <p className="text-sm font-mono text-muted-foreground mb-2 tracking-wider">{exp.period}</p>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                      {exp.current && <span className="text-[10px] font-mono px-2 py-0.5 bg-accent/10 text-accent rounded-sm border border-accent/20">{t.actualBadge}</span>}
                    </div>
                    <p className="text-sm text-accent mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-2xl">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.highlights.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-0.5 bg-primary/10 text-accent/80 rounded-sm border border-accent/15">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="min-h-screen flex items-center px-8 md:px-14 lg:px-16 py-28 bg-card/30">
          <div className="w-full max-w-5xl">
            <SectionLabel number="04" title={t.projectsTitle} />
            <div className="grid md:grid-cols-2 gap-5 mt-14">
              {t.projects.map((project) => (
                <div key={project.number} className="border border-border rounded-sm p-6 bg-card hover:border-accent/40 transition-all duration-300 group flex flex-col">
                  <div className="flex justify-between items-start mb-5">
                    <span className="text-4xl font-extrabold text-border group-hover:text-accent/15 transition-colors font-mono leading-none">{project.number}</span>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-1 bg-secondary rounded-sm border border-border">{project.type}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-0.5 bg-primary/10 text-accent/80 rounded-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="min-h-screen flex items-center px-8 md:px-14 lg:px-16 py-28">
          <div className="w-full max-w-4xl">
            <SectionLabel number="05" title={t.contactTitle} />
            <div className="grid md:grid-cols-2 gap-14 mt-14">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{t.contactHeading}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.contactDesc}</p>
                <div className="space-y-3">
                  {t.contactLinks.map(({ label, href }, i) => {
                    const Icon = CONTACT_ICONS[i];
                    return (
                      <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group">
                        <Icon size={15} className="text-accent shrink-0" />
                        <span>{label}</span>
                        <ChevronRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <button
                    onClick={handleDownloadCV}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-extrabold rounded-sm hover:bg-accent/80 transition-colors"
                  >
                    <Download size={18} />
                    {t.downloadCV}
                  </button>
                </div>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-4">
                <FormField label={t.formName} type="text" placeholder={t.formNamePH} value={formData.nombre} onChange={(v) => setFormData({ ...formData, nombre: v })} />
                <FormField label={t.formEmail} type="email" placeholder={t.formEmailPH} value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} />
                <FormField label={t.formSubject} type="text" placeholder={t.formSubjectPH} value={formData.asunto} onChange={(v) => setFormData({ ...formData, asunto: v })} />
                <div>
                  <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-1.5">{t.formMessage}</label>
                  <textarea
                    rows={4}
                    placeholder={t.formMessagePH}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-2.5 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="w-full py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/80 transition-colors flex items-center justify-center gap-2">
                  {t.formSend} <ArrowUpRight size={15} />
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-base font-bold text-accent/60">{number}</span>
      <div className="w-px h-5 bg-border" />
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
      <div className="h-px flex-1 max-w-20 bg-border" />
    </div>
  );
}

function FormField({ label, type, placeholder, value = "", onChange = () => {} }: { label: string; type: string; placeholder: string; value?: string; onChange?: (v: string) => void }) {
  return (
    <div>
      <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block mb-1.5">{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-2.5 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/60 transition-colors" />
    </div>
  );
}
