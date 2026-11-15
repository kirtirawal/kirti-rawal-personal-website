export const siteContent = {
  name: "Kirti Rawal",
  email: "rawal.dell@gmail.com",
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/kirtirawal/",
    github: "https://github.com/kirtirawal"
  }
};

const englishContent = {
  meta: {
    title: "Kirti Rawal — Medical Software, Healthcare Data & AI",
    description:
      "Medical Systems Engineering student with 3+ years in engineering. Focused on MedTech requirements and documentation, public-health visual analytics and a study project in explainable chest X-ray AI.",
    ogDescription:
      "Medical software and systems, public-health data visualization, and explainable chest X-ray AI research."
  },
  languageSwitch: "DE",
  languageSwitchLabel: "Auf Deutsch wechseln",
  nav: {
    mainLabel: "Main navigation",
    homeLabel: "Kirti Rawal home",
    skipToContent: "Skip to main content",
    work: "Work",
    experience: "Experience",
    about: "About",
    cv: "CV",
    contact: "Let’s connect"
  },
  hero: {
    eyebrow: "MEDICAL SYSTEMS · SOFTWARE · DATA · AI",
    headline: ["I build software", "and data tools"],
    emphasis: ["for healthcare and", "medical technology."],
    intro:
      "M.Sc. student in Medical Systems Engineering with 3+ years in engineering. Current MedTech work focuses on requirements and documentation; public-health analytics and chest X-ray AI are study projects.",
    explore: "Explore my work",
    requestCv: "Request my CV",
    location: "MAGDEBURG, GERMANY",
    field: "MEDICAL SYSTEMS ENGINEERING",
    portraitAlt: "Illustrated portrait",
    portraitLabel: ["KIRTI RAWAL", "SOFTWARE × HEALTHCARE"],
    notes: ["THINK", "EXPLORE"],
    caption: "",
    sideNote: ["ENGINEERING", "CURIOSITY", "CONNECTION"]
  },
  proof: {
    label: "Professional profile",
    experience: ["3+ years", "Engineering experience"],
    education: ["M.Sc.", "Medical Systems Engineering"],
    focus: ["Software · Data · AI", "Healthcare technology"],
    location: ["Germany", "Based in Magdeburg"]
  },
  logistics: {
    label: "Recruiter logistics",
    items: [
      ["Full-time", "Start date by agreement"],
      ["German B1 · English C1", "Languages"],
      ["Magdeburg, Germany", "Mostly remote · flexible location"],
      ["Software · Systems · Data · AI", "MedTech · Regulatory / quality"]
    ]
  },
  ticker: {
    label: "Areas of interest",
    items: ["MEDICAL SYSTEMS", "SOFTWARE ENGINEERING", "HEALTHCARE DATA", "MEDICAL AI", "PEOPLE & STORIES"]
  },
  about: {
    kicker: "01 / THE PERSON BEHIND THE WORK",
    heading: "One life.",
    emphasis: "Many interests.",
    lead:
      "I work across medical technology, software and healthcare data, with attention to the people and needs behind each system.",
    paragraphs: [
      "I started with medical electronics, spent three years in software and systems engineering, and am now studying Medical Systems Engineering at Otto von Guericke University Magdeburg. My professional experience includes systems engineering and current MedTech requirements work; my public-health dashboard and chest X-ray AI study are academic projects.",
      "Outside engineering, I’m interested in people, cultures, places and the stories behind them. This is both a portfolio and a notebook for that wider curiosity."
    ],
    link: "Follow my curiosity",
    values: ["Stay curious", "Build with purpose", "Keep it human"]
  },
  work: {
    kicker: "02 / SELECTED WORK",
    heading: "Questions turned",
    emphasis: "into practice.",
    intro:
      "Professional experience and study projects are labelled separately. Each starts with a real problem to understand.",
    note:
      "Research and professional experience are labelled separately; no unpublished results or employer-confidential work are presented here."
  },
  projects: [
    {
      number: "01",
      id: "public-health-dashboard",
      type: "STUDY PROJECT · PUBLIC-HEALTH DATA",
      title: "Visual analytics for public health",
      description:
        "An R/Shiny dashboard prototype for public-health visual analytics, presented in a seminar for students, policymakers, hospitals, public-health institutions and researchers.",
      tags: ["R", "Shiny", "Public health", "Data visualization"],
      accent: "peach",
      link: "https://kirtirawal.shinyapps.io/landkreis_dashboard_experimental",
      linkLabel: "Open live dashboard"
    },
    {
      number: "02",
      id: "chest-xray-xai",
      type: "MASTER'S THESIS · MEDICAL AI",
      title: "Exploring explainable chest X-ray AI",
      description:
        "This master's thesis compares ResNet-18 and ViT-B/16 for cardiomegaly classification using CheXpert Plus chest X-rays, and examines attribution patterns with Integrated Gradients. Exploratory work only; attribution maps do not establish clinically correct reasoning or clinical suitability.",
      tags: ["CheXpert Plus", "ResNet-18", "ViT-B/16", "Integrated Gradients"],
      accent: "blue",
      link: "https://celadon-crisp-337be4.netlify.app/",
      linkLabel: "Open research prototype"
    },
    {
      number: "03",
      id: "continental-systems",
      type: "PROFESSIONAL · SOFTWARE & SYSTEMS",
      title: "Engineering reliable systems",
      description:
        "Experience at Continental AG spanning system and software testing, integration, fault analysis and technical documentation in international engineering teams.",
      tags: ["System integration", "Software testing", "Engineering"],
      accent: "lavender",
      link: null,
      linkLabel: null
    }
  ],
  experience: {
    kicker: "03 / EXPERIENCE & EDUCATION",
    heading: "Engineering,",
    emphasis: "with context.",
    intro:
      "From medical electronics to software and systems engineering, and now deeper into healthcare technology.",
    education: "EDUCATION",
    items: [
      {
        date: "2026 — PRESENT",
        id: "sedivention-experience",
        organization: "Sedivention GmbH",
        evidenceUrl: "https://www.sedivention.com/",
        evidenceLabel: "Company website",
        role: "Working Student · MedTech",
        description:
          "Working on requirements analysis and MDR-related documentation for medical-device development. Also developing an automation foundation for structured supplier communication, exploring AI use cases and providing IT support. Product-specific details are omitted."
      },
      {
        date: "2025 — PRESENT",
        id: "university-medicine-experience",
        organization: "University Medicine Magdeburg",
        evidenceUrl: "https://isa-ummd.de/notfall-und-intensivmedizin/#w-tabs-0-data-w-pane-0",
        evidenceLabel: "ISA · Implementation Science",
        role: "Research & Data Analysis",
        description:
          "Working with healthcare data through structured analyses, test series, quality checks and project documentation."
      },
      {
        date: "2022 — 2025",
        id: "continental-experience",
        organization: "Continental AG",
        evidenceUrl: "https://www.continental.com/en/",
        evidenceLabel: "Company website",
        role: "Software, Systems & Integration Engineering",
        description:
          "Contributed to system and software integration, testing, fault analysis and technical documentation in international engineering teams."
      }
    ],
    educationItems: [
      {
        qualification: "M.Sc. Medical Systems Engineering",
        institution: "Otto von Guericke University Magdeburg",
        date: "2025 — PRESENT"
      },
      {
        qualification: "B.E. Medical Electronics",
        institution: "Ramaiah Institute of Technology",
        date: "2017 — 2021"
      }
    ]
  },
  currently: {
    kicker: "CURRENTLY",
    items: [
      {
        label: "STUDYING",
        description: "M.Sc. Medical Systems Engineering at Otto von Guericke University Magdeburg"
      },
      {
        label: "WORKING",
        description: "MedTech processes at Sedivention and research/data analysis at University Medicine Magdeburg"
      },
      {
        label: "BUILDING & EXPLORING",
        description: "Healthcare data dashboards and medical imaging and AI workflows"
      }
    ]
  },
  skills: {
    kicker: "04 / PRACTICE & TOOLS",
    heading: "Skills shown",
    emphasis: "through the work.",
    intro: "A selection of methods and technologies reflected in my experience, studies and projects.",
    groups: [
      {
        title: "Medical AI research",
        items: "CheXpert Plus · ResNet-18 · ViT-B/16 · Integrated Gradients",
        href: "#chest-xray-xai",
        linkLabel: "View thesis project"
      },
      {
        title: "Health-data visualization",
        items: "R · Shiny · Public-health visual analytics",
        href: "#public-health-dashboard",
        linkLabel: "View dashboard project"
      },
      {
        title: "Regulatory & quality",
        items: "Requirements analysis · MDR-related documentation · Supplier-communication automation · AI use-case exploration",
        href: "#sedivention-experience",
        linkLabel: "View MedTech experience"
      },
      {
        title: "Software & systems",
        items: "System and software integration · Testing · Fault analysis · Technical documentation",
        href: "#continental-experience",
        linkLabel: "View engineering experience"
      }
    ]
  },
  curiosity: {
    kicker: "05 / BEYOND THE JOB TITLE",
    heading: "What keeps",
    emphasis: "me curious.",
    intro: "A career is one part of a life. I want to keep making room for the other things that make it meaningful.",
    interests: [
      ["01", "Medical technology", "Devices, imaging and technologies that can make healthcare more useful and understandable."],
      ["02", "Artificial intelligence", "Understanding how intelligent systems work — and where human judgement still matters."],
      ["03", "Engineering & software", "Building, integrating and testing systems with care for the people who use them."],
      ["04", "People & cultures", "Learning through conversations, new places and different perspectives."],
      ["05", "Storytelling", "Turning observations, questions and experiences into stories worth sharing."]
    ],
    fieldNotes: "FIELD NOTES / 001",
    fieldNotesTitle: "The world is a classroom.",
    fieldNotesText: ""
  },
  cv: {
    kicker: "06 / CV & ROLE FOCUS",
    heading: "One story.",
    emphasis: "Three perspectives.",
    intro: "My experience can be presented for different roles without losing the same foundation in medical systems and engineering.",
    request: "Request a tailored CV",
    subject: "Request for a tailored CV",
    tracks: [
      {
        title: "Medical Software & Systems",
        description: "Requirements analysis, integration, testing and documentation across MedTech and engineering work."
      },
      {
        title: "Healthcare Data & Analytics",
        description: "Public-health visual analytics and an R/Shiny dashboard prototype presented in a seminar."
      },
      {
        title: "Medical AI & Imaging",
        description: "A study comparing chest X-ray classifiers and examining Integrated Gradients attribution patterns."
      }
    ]
  },
  contact: {
    kicker: "07 / START A CONVERSATION",
    heading: "Have a question,",
    emphasis: "an idea or a good story?",
    intro: "I’m always interested in thoughtful conversations and meaningful collaborations.",
    email: "Write me an email",
    footerPrompt: "REACH OUT · SAY HELLO · SHARE AN IDEA",
    location: "GERMANY / EVERYWHERE"
  },
  footer: {
    copyright: "Built with curiosity.",
    backToTop: "Back to top ↑"
  }
} as const;

const germanContent = {
  meta: {
    title: "Kirti Rawal — MedTech-Software, Gesundheitsdaten & KI",
    description:
      "Masterstudentin der Medizinischen Systemtechnik mit mehr als drei Jahren Berufserfahrung im Ingenieurwesen. Schwerpunkte: MedTech-Anforderungen und -Dokumentation, Public-Health-Visualisierung und ein Studienprojekt zu erklärbarer Röntgen-KI.",
    ogDescription:
      "Medizinische Software und Systeme, Public-Health-Datenvisualisierung und Forschung zu erklärbarer KI für Röntgenbilder."
  },
  languageSwitch: "EN",
  languageSwitchLabel: "Switch to English",
  nav: {
    mainLabel: "Hauptnavigation",
    homeLabel: "Kirti Rawal — Startseite",
    skipToContent: "Zum Hauptinhalt springen",
    work: "Arbeiten",
    experience: "Erfahrung",
    about: "Über mich",
    cv: "Lebenslauf",
    contact: "Kontakt"
  },
  hero: {
    eyebrow: "MEDIZINTECHNIK · SOFTWARE · DATEN · KI",
    headline: ["Ich entwickle", "Software und"],
    emphasis: ["Datentools für", "das Gesundheitswesen", "und die Medizintechnik."],
    intro:
      "Masterstudentin der Medizinischen Systemtechnik mit mehr als drei Jahren Berufserfahrung im Ingenieurwesen. Meine aktuelle MedTech-Arbeit betrifft Anforderungen und Dokumentation; Public-Health-Analytik und Röntgen-KI sind Studienprojekte.",
    explore: "Meine Arbeit ansehen",
    requestCv: "Lebenslauf anfragen",
    location: "MAGDEBURG, DEUTSCHLAND",
    field: "MEDIZINISCHE SYSTEMTECHNIK",
    portraitAlt: "Illustration eines Porträts",
    portraitLabel: ["KIRTI RAWAL", "SOFTWARE × GESUNDHEIT"],
    notes: ["DENKEN", "ENTDECKEN"],
    caption: "",
    sideNote: ["TECHNIK", "NEUGIER", "VERBINDUNG"]
  },
  proof: {
    label: "Berufliches Profil",
    experience: ["3+ Jahre", "Berufserfahrung im Ingenieurwesen"],
    education: ["M.Sc.", "Medizinische Systemtechnik"],
    focus: ["Software · Daten · KI", "Technologie im Gesundheitswesen"],
    location: ["Deutschland", "In Magdeburg"]
  },
  logistics: {
    label: "Informationen für Recruiter",
    items: [
      ["Vollzeit", "Start nach Absprache"],
      ["Deutsch B1 · Englisch C1", "Sprachen"],
      ["Magdeburg", "Überwiegend remote · standortflexibel"],
      ["Software · Systeme · Daten · KI", "MedTech · Regulierung / Qualität"]
    ]
  },
  ticker: {
    label: "Interessengebiete",
    items: ["MEDIZINTECHNIK", "SOFTWAREENTWICKLUNG", "GESUNDHEITSDATEN", "MEDIZINISCHE KI", "MENSCHEN & GESCHICHTEN"]
  },
  about: {
    kicker: "01 / DIE PERSON HINTER DER ARBEIT",
    heading: "Ein Leben.",
    emphasis: "Viele Interessen.",
    lead:
      "Ich arbeite an der Schnittstelle von Medizintechnik, Software und Gesundheitsdaten — mit Blick auf die Menschen und Bedürfnisse hinter den Systemen.",
    paragraphs: [
      "Mein Weg begann mit medizinischer Elektronik. Danach sammelte ich drei Jahre Berufserfahrung in der Software- und Systemtechnik. Heute studiere ich Medizinische Systemtechnik an der Otto-von-Guericke-Universität Magdeburg. Meine Berufserfahrung umfasst Systemtechnik und aktuelle MedTech-Anforderungsarbeit; das Public-Health-Dashboard und die Röntgen-KI-Studie sind Studienprojekte.",
      "Neben der Technik interessieren mich Menschen, Kulturen, Orte und die Geschichten dahinter. Diese Website ist deshalb Portfolio und Notizbuch zugleich."
    ],
    link: "Was mich neugierig macht",
    values: ["Neugierig bleiben", "Mit Sinn entwickeln", "Den Menschen im Blick"]
  },
  work: {
    kicker: "02 / AUSGEWÄHLTE ARBEITEN",
    heading: "Aus Fragen wird",
    emphasis: "konkrete Arbeit.",
    intro:
      "Berufliche Erfahrung und Studienprojekte sind klar gekennzeichnet. Am Anfang steht jeweils eine Frage, die es zu verstehen gilt.",
    note:
      "Forschungsarbeiten und Berufserfahrung sind getrennt gekennzeichnet. Unveröffentlichte Ergebnisse und vertrauliche Arbeitgeberprojekte werden hier nicht dargestellt."
  },
  projects: [
    {
      number: "01",
      id: "public-health-dashboard",
      type: "STUDIENPROJEKT · PUBLIC-HEALTH-DATEN",
      title: "Visuelle Analysen für Public Health",
      description:
        "Ein R/Shiny-Dashboard-Prototyp für visuelle Analysen im Bereich Public Health, vorgestellt in einem Seminar für Studierende, politische Entscheidungsträger, Kliniken, Institutionen des öffentlichen Gesundheitswesens und Forschende.",
      tags: ["R", "Shiny", "Public Health", "Datenvisualisierung"],
      accent: "peach",
      link: "https://kirtirawal.shinyapps.io/landkreis_dashboard_experimental",
      linkLabel: "Live-Dashboard öffnen"
    },
    {
      number: "02",
      id: "chest-xray-xai",
      type: "MASTERARBEIT · MEDIZINISCHE KI",
      title: "Erklärbare KI für Röntgenbilder untersuchen",
      description:
        "In meiner Masterarbeit vergleiche ich ResNet-18 und ViT-B/16 bei der Klassifikation von Kardiomegalie mit CheXpert-Plus-Röntgenbildern und untersuche Attributionsmuster mit Integrated Gradients. Die explorative Arbeit belegt weder klinisch korrekte Schlussfolgerungen noch klinische Eignung.",
      tags: ["CheXpert Plus", "ResNet-18", "ViT-B/16", "Integrated Gradients"],
      accent: "blue",
      link: "https://celadon-crisp-337be4.netlify.app/",
      linkLabel: "Forschungsprototyp öffnen"
    },
    {
      number: "03",
      id: "continental-systems",
      type: "BERUFSERFAHRUNG · SOFTWARE & SYSTEME",
      title: "Zuverlässige Systeme entwickeln",
      description:
        "Meine Erfahrung bei Continental AG umfasst System- und Softwaretests, Integration, Fehleranalysen und technische Dokumentation in internationalen Entwicklungsteams.",
      tags: ["Systemintegration", "Softwaretests", "Ingenieurwesen"],
      accent: "lavender",
      link: null,
      linkLabel: null
    }
  ],
  experience: {
    kicker: "03 / BERUFSERFAHRUNG & AUSBILDUNG",
    heading: "Technik, die",
    emphasis: "Menschen hilft.",
    intro:
      "Von medizinischer Elektronik über Software- und Systemtechnik bis hin zur Medizintechnik und digitalen Gesundheit.",
    education: "AUSBILDUNG",
    items: [
      {
        date: "SEIT 2026",
        id: "sedivention-experience",
        organization: "Sedivention GmbH",
        evidenceUrl: "https://www.sedivention.com/",
        evidenceLabel: "Unternehmenswebsite",
        role: "Werkstudentin · Medizintechnik",
        description:
          "Mitarbeit an Anforderungsanalysen und MDR-bezogener Dokumentation für die Entwicklung eines Medizinprodukts. Außerdem entwickle ich eine Automatisierungsgrundlage für die strukturierte Kommunikation mit Lieferanten, prüfe mögliche KI-Anwendungsfälle und leiste IT-Unterstützung. Produktspezifische Details bleiben außen vor."
      },
      {
        date: "SEIT 2025",
        id: "university-medicine-experience",
        organization: "Universitätsklinikum Magdeburg",
        evidenceUrl: "https://isa-ummd.de/notfall-und-intensivmedizin/#w-tabs-0-data-w-pane-0",
        evidenceLabel: "ISA · Implementierungsforschung",
        role: "Wissenschaftliche Mitarbeiterin · Prozess- und Datenanalyse",
        description:
          "Analyse von Gesundheitsdaten, strukturierte Testreihen, Qualitätsprüfungen und Projektdokumentation."
      },
      {
        date: "2022 — 2025",
        id: "continental-experience",
        organization: "Continental AG",
        evidenceUrl: "https://www.continental.com/en/",
        evidenceLabel: "Unternehmenswebsite",
        role: "Software, Systeme & Integration",
        description:
          "Mitarbeit an System- und Softwareintegration, Tests, Fehleranalysen und technischer Dokumentation in internationalen Entwicklungsteams."
      }
    ],
    educationItems: [
      {
        qualification: "M.Sc. Medizinische Systemtechnik",
        institution: "Otto-von-Guericke-Universität Magdeburg",
        date: "2025 — HEUTE"
      },
      {
        qualification: "B.E. Medizinische Elektronik",
        institution: "Ramaiah Institute of Technology",
        date: "2017 — 2021"
      }
    ]
  },
  currently: {
    kicker: "WAS ICH GERADE MACHE",
    items: [
      {
        label: "STUDIUM",
        description: "M.Sc. Medizinische Systemtechnik an der Otto-von-Guericke-Universität Magdeburg"
      },
      {
        label: "BERUF",
        description: "MedTech-Prozesse bei Sedivention sowie Forschung und Datenanalyse am Universitätsklinikum Magdeburg"
      },
      {
        label: "PROJEKTE & FORSCHUNG",
        description: "Dashboards für Gesundheitsdaten sowie medizinische Bildgebung und KI"
      }
    ]
  },
  skills: {
    kicker: "04 / METHODEN & WERKZEUGE",
    heading: "Kompetenzen,",
    emphasis: "belegt durch Praxis.",
    intro: "Eine Auswahl an Methoden und Technologien aus meiner Berufserfahrung, meinem Studium und meinen Projekten.",
    groups: [
      {
        title: "Medizinische KI-Forschung",
        items: "CheXpert Plus · ResNet-18 · ViT-B/16 · Integrated Gradients",
        href: "#chest-xray-xai",
        linkLabel: "Studienprojekt ansehen"
      },
      {
        title: "Visualisierung von Gesundheitsdaten",
        items: "R · Shiny · Visuelle Analysen im Bereich Public Health",
        href: "#public-health-dashboard",
        linkLabel: "Dashboard-Projekt ansehen"
      },
      {
        title: "Regulierung & Qualität",
        items: "Anforderungsanalyse · MDR-bezogene Dokumentation · Automatisierung der Lieferantenkommunikation · KI-Anwendungsfälle",
        href: "#sedivention-experience",
        linkLabel: "MedTech-Erfahrung ansehen"
      },
      {
        title: "Software & Systeme",
        items: "Software- und Systemintegration · Tests · Fehleranalysen · Technische Dokumentation",
        href: "#continental-experience",
        linkLabel: "Ingenieurserfahrung ansehen"
      }
    ]
  },
  curiosity: {
    kicker: "05 / MEHR ALS EIN BERUFSBILD",
    heading: "Was meine",
    emphasis: "Neugier weckt.",
    intro: "Der Beruf ist nur ein Teil des Lebens. Die Dinge, die es darüber hinaus bedeutungsvoll machen, sollen ebenfalls Platz haben.",
    interests: [
      ["01", "Medizintechnik", "Geräte, Bildgebung und Technologien, die das Gesundheitswesen hilfreicher und verständlicher machen."],
      ["02", "Künstliche Intelligenz", "Verstehen, wie intelligente Systeme funktionieren — und wo menschliches Urteilsvermögen wichtig bleibt."],
      ["03", "Technik & Software", "Systeme entwickeln, integrieren und testen — mit Blick auf die Menschen, die sie nutzen."],
      ["04", "Menschen & Kulturen", "Durch Gespräche, neue Orte und unterschiedliche Perspektiven lernen."],
      ["05", "Geschichten erzählen", "Beobachtungen, Fragen und Erlebnisse in Geschichten verwandeln, die es wert sind, erzählt zu werden."]
    ],
    fieldNotes: "FELDNOTIZEN / 001",
    fieldNotesTitle: "Die Welt ist ein Klassenzimmer.",
    fieldNotesText: ""
  },
  cv: {
    kicker: "06 / LEBENSLAUF & SCHWERPUNKTE",
    heading: "Eine Geschichte.",
    emphasis: "Drei Perspektiven.",
    intro: "Meine Erfahrung lässt sich auf unterschiedliche Rollen ausrichten — auf derselben Grundlage aus medizinischen Systemen und Ingenieurwesen.",
    request: "Passenden Lebenslauf anfragen",
    subject: "Anfrage: passender Lebenslauf",
    tracks: [
      {
        title: "Medizinische Software & Systeme",
        description: "Anforderungsanalyse, Integration, Tests und Dokumentation in MedTech und Ingenieurwesen."
      },
      {
        title: "Gesundheitsdaten & Analyse",
        description: "Visuelle Analysen im Bereich Public Health und ein in einem Seminar vorgestellter R/Shiny-Dashboard-Prototyp."
      },
      {
        title: "Medizinische KI & Bildgebung",
        description: "Studienprojekt zum Vergleich von Röntgenbild-Klassifikatoren und zur Untersuchung von Integrated-Gradients-Attributionsmustern."
      }
    ]
  },
  contact: {
    kicker: "07 / INS GESPRÄCH KOMMEN",
    heading: "Eine Frage,",
    emphasis: "eine Idee oder gute Geschichte?",
    intro: "Ich freue mich auf interessante Gespräche und sinnvolle Zusammenarbeit.",
    email: "E-Mail schreiben",
    footerPrompt: "MELDEN · HALLO SAGEN · IDEE TEILEN",
    location: "DEUTSCHLAND / ÜBERALL"
  },
  footer: {
    copyright: "Mit Neugier gestaltet.",
    backToTop: "Nach oben ↑"
  }
} as const;

export const pageContent = {
  en: englishContent,
  de: germanContent
};

export type Language = keyof typeof pageContent;
