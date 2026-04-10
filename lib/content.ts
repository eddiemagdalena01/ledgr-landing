export const content = {
  en: {
    nav: {
      logo: "Ledgr",
      toggleEN: "EN",
      toggleES: "ES",
    },
    hero: {
      headline: "Get paid like a pro. Keep what you earn.",
      subheadline:
        "Invoice clients, track income, and stay tax-ready — all in one app built for contractors.",
      cta: "Join the waitlist",
    },
    features: {
      heading: "Why contractors choose Ledgr",
      items: [
        {
          icon: "📄",
          title: "Smart Invoicing",
          description: "Send professional invoices in minutes, get paid faster.",
        },
        {
          icon: "📊",
          title: "Income Tracking",
          description: "See every dollar across all your clients, in real time.",
        },
        {
          icon: "🧾",
          title: "Tax Estimates",
          description: "Know what you owe before April. No surprises.",
        },
      ],
    },
    howItWorks: {
      heading: "How it works",
      steps: [
        {
          step: 1,
          title: "Connect your accounts",
          description: "Link your bank or import transactions manually.",
        },
        {
          step: 2,
          title: "Send your first invoice",
          description: "Create and send a branded invoice in under 2 minutes.",
        },
        {
          step: 3,
          title: "Stay tax-ready",
          description:
            "Ledgr auto-calculates estimated quarterly taxes as you earn.",
        },
      ],
    },
    socialProof: {
      heading: "Trusted by independent workers",
      stats: [
        { value: "2,400+", label: "contractors on the waitlist" },
        { value: "$0", label: "hidden fees" },
        { value: "2", label: "languages supported" },
      ],
      testimonials: [
        {
          quote: "I used to dread tax season. Ledgr makes it manageable.",
          name: "Sofia R.",
          role: "Graphic Designer",
        },
        {
          quote: "Finally an app that works for people like me.",
          name: "Marcus T.",
          role: "Freelance Developer",
        },
      ],
    },
    waitlist: {
      heading: "Be the first to know",
      subheading: "Join 2,400+ contractors already on the list.",
      placeholder: "Enter your email",
      button: "Join the waitlist",
      successMessage: "You're on the list! We'll be in touch.",
    },
    footer: {
      copy: "© 2025 Ledgr. All rights reserved.",
    },
  },
  es: {
    nav: {
      logo: "Ledgr",
      toggleEN: "EN",
      toggleES: "ES",
    },
    hero: {
      headline: "Cobra como un profesional. Conserva lo que ganas.",
      subheadline:
        "Factura a tus clientes, controla tus ingresos y prepárate para los impuestos — todo en una app diseñada para contratistas.",
      cta: "Únete a la lista de espera",
    },
    features: {
      heading: "Por qué los contratistas eligen Ledgr",
      items: [
        {
          icon: "📄",
          title: "Facturación inteligente",
          description: "Envía facturas profesionales en minutos, cobra más rápido.",
        },
        {
          icon: "📊",
          title: "Seguimiento de ingresos",
          description: "Ve cada dólar de todos tus clientes, en tiempo real.",
        },
        {
          icon: "🧾",
          title: "Estimados de impuestos",
          description: "Sabe lo que debes antes de abril. Sin sorpresas.",
        },
      ],
    },
    howItWorks: {
      heading: "Cómo funciona",
      steps: [
        {
          step: 1,
          title: "Conecta tus cuentas",
          description: "Vincula tu banco o importa transacciones manualmente.",
        },
        {
          step: 2,
          title: "Envía tu primera factura",
          description:
            "Crea y envía una factura personalizada en menos de 2 minutos.",
        },
        {
          step: 3,
          title: "Mantente listo para los impuestos",
          description:
            "Ledgr calcula automáticamente tus impuestos trimestrales estimados.",
        },
      ],
    },
    socialProof: {
      heading: "Confiado por trabajadores independientes",
      stats: [
        { value: "2,400+", label: "contratistas en lista de espera" },
        { value: "$0", label: "tarifas ocultas" },
        { value: "2", label: "idiomas disponibles" },
      ],
      testimonials: [
        {
          quote:
            "Antes le temía a la temporada de impuestos. Ledgr lo hace manejable.",
          name: "Sofia R.",
          role: "Diseñadora gráfica",
        },
        {
          quote: "Por fin una app que funciona para gente como yo.",
          name: "Marcus T.",
          role: "Desarrollador freelance",
        },
      ],
    },
    waitlist: {
      heading: "Sé el primero en enterarte",
      subheading: "Únete a más de 2,400 contratistas ya en la lista.",
      placeholder: "Ingresa tu correo",
      button: "Únete a la lista",
      successMessage: "¡Estás en la lista! Te avisaremos pronto.",
    },
    footer: {
      copy: "© 2025 Ledgr. Todos los derechos reservados.",
    },
  },
} as const;

export type Lang = keyof typeof content;
export type Content = typeof content;
