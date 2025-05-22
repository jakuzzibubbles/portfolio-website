// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check for saved user preference
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

// Toggle dark mode
darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Language Switcher
const langSwitcher = document.getElementById("langSwitcher");

const translations = {
  de: {
    pageTitle: "Projektmanagement & Prozessoptimierung",
    darkMode: "Dark Mode",
    about: {
      title: "Über mich",
      p1: "Ich bin Linh, Projektmanagerin mit mehr als drei Jahren Erfahrung in der Umsetzung digitaler Projekte – von Online-Marketing über E-Commerce bis hin zur Softwareentwicklung.",
      p2: "Ich liebe es, Struktur in komplexe Vorhaben zu bringen, technische Teams und Stakeholder auf gemeinsame Ziele einzuschwören und Projekte von der Idee bis zur Umsetzung effizient zu steuern.",
      p3: "Meine Wurzeln liegen im Projektmanagement – doch mein Weg führte mich weiter: Durch meine Begeisterung für Technologie habe ich mich tiefer in Themen wie Cloud Computing (AWS), Linux, Webentwicklung und automatisierte Prozesse eingearbeitet. Das hat meinen Blick erweitert – ich verstehe nun nicht nur, was umgesetzt werden muss, sondern auch, wie.",
    },
    services: {
      title: "Meine Leistungen im Überblick",
      list: [
        "IT-Projektmanagement: klassisch, agil oder hybrid – je nach Projektkontext",
        "Einführung & Optimierung von digitalen Tools & Prozessen",
        "Teamorganisation, Sprintplanung & tägliche Steuerung",
        "Kommunikation mit technischen & nicht-technischen Stakeholdern",
        "Tool-Auswahl, Setup & Integration (z. B. Jira, ClickUp, Notion, Confluence)",
        "Begleitung bei der digitalen Transformation im Team oder Unternehmen",
      ],
    },
    work: {
      title: "So arbeite ich – strukturiert, agil & lösungsorientiert",
      p: "Als Projektmanagerin ist mir eine klare, transparente und pragmatische Arbeitsweise besonders wichtig. Ich begleite Projekte von der ersten Idee bis zur erfolgreichen Umsetzung – je nach Bedarf übernehme ich die komplette Projektleitung oder unterstütze als agile Projekt-Coachin.",
      start: {
        title: "Projektstart & Einarbeitung",
        list: [
          "Kick-off-Meeting mit Stakeholdern zur Zielklärung & Rollenverteilung",
          "Analyse vorhandener Unterlagen & Tools",
          "Schnelle Einarbeitung in Systeme, Prozesse & Teams (remote oder vor Ort)",
          "Gemeinsames Setup für Projektstruktur & Kommunikationskanäle",
        ],
      },
      planning: {
        title: "Projektplanung & Steuerung",
        list: [
          "Auswahl passender Methodik: agil, hybrid oder klassisch",
          "Erstellung und Pflege von Projektplänen, Roadmaps, Backlogs",
          "Einführung klarer Meeting-Formate: Dailys, Reviews, Retros, Jour Fixe",
          "Tracking über Tools wie Jira, Trello, Confluence oder ClickUp",
        ],
      },
      team: {
        title: "Kommunikation & Teamführung",
        list: [
          "Transparente Kommunikation auf Augenhöhe",
          "Klare Erwartungshaltung an alle Beteiligten",
          "Förderung von Eigenverantwortung & Motivation im Team",
        ],
      },
      improvement: {
        title: "Kontinuierliche Weiterentwicklung",
        list: [
          "Regelmäßige Projekt-Reviews & Optimierung der Abläufe",
          "Offenes Feedback & Lessons Learned zur Projektverbesserung",
          "Frühzeitiges Erkennen von Risiken & aktives Stakeholder-Management",
        ],
      },
      result:
        "<strong>Ergebnis:</strong> Meine Arbeitsweise sorgt dafür, dass neue Projekte schnell anlaufen, bestehende Projekte wieder Struktur bekommen, und alle Beteiligten wissen, wo sie stehen und wohin es geht.",
    },
    optimization: {
      title: "Prozessoptimierung – pragmatisch, datenbasiert, teamnah",
      p: "Viele Teams und Unternehmen wissen, dass ihre Abläufe besser laufen könnten – aber der Alltag lässt kaum Raum, bestehende Prozesse kritisch zu hinterfragen. Ich helfe dabei, genau das strukturiert und pragmatisch anzugehen:",
      steps: [
        {
          title: "1. Ist-Zustand verstehen",
          list: [
            "Aufnahme der bestehenden Prozesse, Tools & Rollen",
            "Interviews & Workshops mit Teammitgliedern",
            "Analyse interner & externer Abhängigkeiten",
          ],
        },
        {
          title: "2. Schwachstellen identifizieren",
          list: [
            "Wo sind unnötige Schleifen, Bottlenecks oder doppelte Arbeit?",
            "Welche Tools werden wie (nicht) genutzt?",
            "Wo fehlt Klarheit in Zuständigkeiten & Kommunikation?",
          ],
        },
        {
          title: "3. Ziele definieren",
          list: [
            "Was genau soll verbessert werden? (z. B. Geschwindigkeit, Transparenz, Qualität)",
            "Welche KPIs oder Indikatoren können wir nutzen?",
          ],
        },
        {
          title: "4. Lösungen entwickeln & priorisieren",
          list: [
            "Vorschläge zur Prozessvereinfachung, Tool-Anpassung, Rollenklärung",
            "Agiles Vorgehen mit Quick Wins & Pilotlösungen",
            "Einbindung des Teams für nachhaltige Veränderung",
          ],
        },
        {
          title: "5. Umsetzung & Begleitung",
          list: [
            "Einführung neuer Abläufe und/oder Tools",
            "Schulungen, Dokumentation & Change-Kommunikation",
            "Iterative Anpassung auf Basis von Feedback",
          ],
        },
        {
          title: "6. Nachhaltigkeit sicherstellen",
          list: [
            "Retrospektive nach 4–8 Wochen",
            "Übergabe an interne Projektverantwortliche",
            "Optional: Review oder Follow-Up nach Projektabschluss",
          ],
        },
      ],
      result:
        "<strong>Ergebnis:</strong> Die optimierten Prozesse sind transparenter, effizienter und besser auf eure Ziele abgestimmt – und das Team steht dahinter.",
    },
    experience: {
      title: "Erfahrung & Technisches Profil",
      p: "Ich bringe Erfahrung aus schnelllebigen Startups, dynamischen Agenturen und digitalen Transformationsprojekten mit. Ich kenne sowohl das kreative Chaos als auch die Tücken langsamer Verwaltungsprozesse – und bringe beide Seiten zusammen.",
    },
    skills: {
      title: "Tech Stack & Tools",
      categories: [
        {
          title: "Projektmanagement:",
          list: ["Jira", "Confluence", "ClickUp", "Trello", "Asana", "Notion"],
        },
        {
          title: "Web & Dev Basics:",
          list: ["HTML5", "CSS", "JavaScript", "React", "PHP", "Node.js"],
        },
        {
          title: "Cloud & DevOps:",
          list: ["AWS", "Linux", "Docker", "Bash", "IaC (Grundlagen)"],
        },
        {
          title: "Testing & APIs:",
          list: ["Postman", "Unit Tests", "API-Testing", "A/B Tests"],
        },
      ],
    },
    languages: {
      title: "Sprachen:",
      list: ["Deutsch (C2)", "Englisch (C1)", "Vietnamesisch (Muttersprache)"],
    },
    certifications: {
      title: "Zertifizierungen",
      list: [
        "✓ AWS Certified Cloud Practitioner (2024)",
        "✓ Linux Essentials – LPI (2024)",
        "✓ Projektmanagement mit Scrum – IBB (2021)",
      ],
    },
    collaboration: {
      title: "Zusammenarbeit",
      p1: "Ich bin verfügbar für Remote-Projekte oder Einsätze im DACH-Raum – flexibel, lösungsorientiert und offen für neue Herausforderungen.",
      p2: "Ob als Projektleitung, PMO-Verstärkung, agile Begleiterin oder Sparringspartnerin bei Prozessfragen – ich bringe Struktur, Technik und Energie mit.",
    },
    rates: {
      title: "Konditionen",
      list: [
        "<strong>Stundensatz:</strong> ab 90 €",
        "<strong>Tagessatz:</strong> ab 700 €",
        "Projektlaufzeit: ab 2 Monaten",
      ],
    },
    profilePhoto: {
      headline: "Lust auf ein unverbindliches Kennenlernen?",
      text: '<span style="font-size:1.1em;">Schreib mir einfach, ich freue mich auf deine Nachricht ㄟ(≧◇≦)ㄏ</span>',
    },
    contact: "📍 Kontakt",
    contactInfo: {
      name: "<strong>Name:</strong><br>Linh Nguyen",
      email: "<strong>E-Mail:</strong><br><a href=\"mailto:linh_nguyen@gmx.de\">linh_nguyen@gmx.de</a>",
      linkedin: "<strong>LinkedIn:</strong><br><a href=\"https://www.linkedin.com/in/jakuzzi263/\" target=\"_blank\" rel=\"noopener\">linkedin.com/in/jakuzzi263</a>",
      github: "<strong>Github:</strong><br><a href=\"https://github.com/jakuzzibubbles\" target=\"_blank\" rel=\"noopener\">github.com/jakuzzibubbles</a>",
      location: "<strong>Standort:</strong><br>Berlin / Remote verfügbar",
    },
  },
  en: {
    pageTitle: "Project Management & Process Optimization",
    darkMode: "Dark Mode",
    about: {
      title: "About Me",
      p1: "I'm Linh, a project manager with more than three years of experience in delivering digital projects – from online marketing and e-commerce to software development.",
      p2: "I love bringing structure to complex endeavors, aligning technical teams and stakeholders to common goals, and efficiently managing projects from idea to implementation.",
      p3: "My roots are in project management – but my path led me further: My enthusiasm for technology drove me deeper into topics like cloud computing (AWS), Linux, web development, and automated processes. This broadened my perspective – now I understand not only what needs to be done, but also how.",
    },
    services: {
      title: "My Services at a Glance",
      list: [
        "IT project management: classic, agile or hybrid – depending on the project context",
        "Introduction & optimization of digital tools & processes",
        "Team organization, sprint planning & daily management",
        "Communication with technical & non-technical stakeholders",
        "Tool selection, setup & integration (e.g. Jira, ClickUp, Notion, Confluence)",
        "Support for digital transformation in teams or companies",
      ],
    },
    work: {
      title: "How I Work – Structured, Agile & Solution-Oriented",
      p: "As a project manager, a clear, transparent and pragmatic way of working is especially important to me. I support projects from the first idea to successful implementation – as needed, I take on full project management or support as an agile project coach.",
      start: {
        title: "Project Start & Onboarding",
        list: [
          "Kick-off meeting with stakeholders to clarify goals & roles",
          "Analysis of existing documents & tools",
          "Quick onboarding into systems, processes & teams (remote or on-site)",
          "Joint setup for project structure & communication channels",
        ],
      },
      planning: {
        title: "Project Planning & Management",
        list: [
          "Selection of suitable methodology: agile, hybrid or classic",
          "Creation and maintenance of project plans, roadmaps, backlogs",
          "Introduction of clear meeting formats: dailies, reviews, retros, jour fixe",
          "Tracking via tools like Jira, Trello, Confluence or ClickUp",
        ],
      },
      team: {
        title: "Communication & Team Leadership",
        list: [
          "Transparent communication at eye level",
          "Clear expectations for all participants",
          "Promoting responsibility & motivation in the team",
        ],
      },
      improvement: {
        title: "Continuous Improvement",
        list: [
          "Regular project reviews & process optimization",
          "Open feedback & lessons learned for project improvement",
          "Early identification of risks & active stakeholder management",
        ],
      },
      result:
        "<strong>Result:</strong> My way of working ensures that new projects get off to a quick start, existing projects regain structure, and everyone involved knows where they stand and where they're going.",
    },
    optimization: {
      title: "Process Optimization – Pragmatic, Data-Driven, Team-Oriented",
      p: "Many teams and companies know their workflows could be better – but everyday business leaves little room to critically question existing processes. I help tackle this in a structured and pragmatic way:",
      steps: [
        {
          title: "1. Understand the Current State",
          list: [
            "Recording existing processes, tools & roles",
            "Interviews & workshops with team members",
            "Analysis of internal & external dependencies",
          ],
        },
        {
          title: "2. Identify Weaknesses",
          list: [
            "Where are unnecessary loops, bottlenecks or duplicate work?",
            "Which tools are (not) being used and how?",
            "Where is there a lack of clarity in responsibilities & communication?",
          ],
        },
        {
          title: "3. Define Goals",
          list: [
            "What exactly should be improved? (e.g. speed, transparency, quality)",
            "Which KPIs or indicators can we use?",
          ],
        },
        {
          title: "4. Develop & Prioritize Solutions",
          list: [
            "Suggestions for process simplification, tool adjustments, role clarification",
            "Agile approach with quick wins & pilot solutions",
            "Involving the team for sustainable change",
          ],
        },
        {
          title: "5. Implementation & Support",
          list: [
            "Introduction of new processes and/or tools",
            "Training, documentation & change communication",
            "Iterative adjustment based on feedback",
          ],
        },
        {
          title: "6. Ensure Sustainability",
          list: [
            "Retrospective after 4–8 weeks",
            "Handover to internal project managers",
            "Optional: review or follow-up after project completion",
          ],
        },
      ],
      result:
        "<strong>Result:</strong> The optimized processes are more transparent, efficient and better aligned with your goals – and the team is on board.",
    },
    experience: {
      title: "Experience & Technical Profile",
      p: "I bring experience from fast-paced startups, dynamic agencies and digital transformation projects. I know both the creative chaos and the pitfalls of slow administrative processes – and bring both sides together.",
    },
    skills: {
      title: "Tech Stack & Tools",
      categories: [
        {
          title: "Project Management:",
          list: ["Jira", "Confluence", "ClickUp", "Trello", "Asana", "Notion"],
        },
        {
          title: "Web & Dev Basics:",
          list: ["HTML5", "CSS", "JavaScript", "React", "PHP", "Node.js"],
        },
        {
          title: "Cloud & DevOps:",
          list: ["AWS", "Linux", "Docker", "Bash", "IaC (basics)"],
        },
        {
          title: "Testing & APIs:",
          list: ["Postman", "Unit Tests", "API Testing", "A/B Tests"],
        },
      ],
    },
    languages: {
      title: "Languages:",
      list: ["German (C2)", "English (C1)", "Vietnamese (native)"],
    },
    certifications: {
      title: "Certifications",
      list: [
        "✓ AWS Certified Cloud Practitioner (2024)",
        "✓ Linux Essentials – LPI (2024)",
        "✓ Project Management with Scrum – IBB (2021)",
      ],
    },
    collaboration: {
      title: "Collaboration",
      p1: "I'm available for remote projects or assignments in the DACH region – flexible, solution-oriented and open to new challenges.",
      p2: "Whether as project lead, PMO support, agile coach or sparring partner for process questions – I bring structure, technology and energy.",
    },
    rates: {
      title: "Rates",
      list: [
        "<strong>Hourly rate:</strong> from €90",
        "<strong>Daily rate:</strong> from €700",
        "Project duration: from 2 months",
      ],
    },
    profilePhoto: {
      headline: "Fancy a non-binding chat?",
      text: '<span style="font-size:1.1em;">Just drop me a message, I\'m looking forward to hearing from you ㄟ(≧◇≦)ㄏ</span>',
    },
    contact: "📍 Contact",
    contactInfo: {
      name: "<strong>Name:</strong><br>Linh Nguyen",
      email: "<strong>Email:</strong><br><a href=\"mailto:linh_nguyen@gmx.de\">linh_nguyen@gmx.de</a>",
      linkedin: "<strong>LinkedIn:</strong><br><a href=\"https://www.linkedin.com/in/jakuzzi263/\" target=\"_blank\" rel=\"noopener\">linkedin.com/in/jakuzzi263</a>",
      github: "<strong>Github:</strong><br><a href=\"https://github.com/jakuzzibubbles\" target=\"_blank\" rel=\"noopener\">github.com/jakuzzibubbles</a>",
      location: "<strong>Location:</strong><br>Berlin / available remote",
    },
  },
};

let currentLang = "de"; // oder "en" als Startsprache

function setLanguage(lang) {
  currentLang = lang;

  // ABOUT
  document.querySelector("#about h2").textContent = translations[lang].about.title;
  const aboutPs = document.querySelectorAll("#about p");
  aboutPs[0].textContent = translations[lang].about.p1;
  aboutPs[1].textContent = translations[lang].about.p2;
  aboutPs[2].textContent = translations[lang].about.p3;

  // SERVICES
  document.querySelector("#services h2").textContent = translations[lang].services.title;
  const servicesList = document.querySelectorAll("#services ul li");
  translations[lang].services.list.forEach((item, i) => {
    servicesList[i].textContent = item;
  });

  // WORK
  document.querySelector("#work h2").textContent = translations[lang].work.title;
  document.querySelector("#work > p").textContent = translations[lang].work.p;
  const workSections = ["start", "planning", "team", "improvement"];
  workSections.forEach((section, idx) => {
    document.querySelectorAll("#work h3")[idx].textContent = translations[lang].work[section].title;
    const ul = document.querySelectorAll("#work ul")[idx];
    ul.innerHTML = translations[lang].work[section].list.map(item => `<li>${item}</li>`).join("");
  });
  document.querySelector("#work > p:last-of-type").innerHTML = translations[lang].work.result;

  // OPTIMIZATION
  document.querySelector("#optimization h2").textContent = translations[lang].optimization.title;
  document.querySelector("#optimization > p").textContent = translations[lang].optimization.p;
  translations[lang].optimization.steps.forEach((step, idx) => {
    document.querySelectorAll("#optimization h3")[idx].textContent = step.title;
    document.querySelectorAll("#optimization ul")[idx].innerHTML = step.list.map(item => `<li>${item}</li>`).join("");
  });
  document.querySelector("#optimization > p:last-of-type").innerHTML = translations[lang].optimization.result;

  // EXPERIENCE
  document.querySelector("#experience h2").textContent = translations[lang].experience.title;
  document.querySelector("#experience p").textContent = translations[lang].experience.p;

  // SKILLS
  document.querySelector("#skills h2").textContent = translations[lang].skills.title;
  const skillCats = document.querySelectorAll("#skills .skill-category");
  translations[lang].skills.categories.forEach((cat, i) => {
    skillCats[i].querySelector("h4").textContent = cat.title;
    const ul = skillCats[i].querySelector("ul");
    ul.innerHTML = cat.list.map(item => `<li>${item}</li>`).join("");
  });

  // LANGUAGES
  document.querySelector("#languages h4").textContent = translations[lang].languages.title;
  const langList = document.querySelectorAll("#languages ul li");
  translations[lang].languages.list.forEach((item, i) => {
    langList[i].textContent = item;
  });

  // CERTIFICATIONS
  document.querySelector("#certifications h2").textContent = translations[lang].certifications.title;
  const certList = document.querySelectorAll("#certifications ul li");
  translations[lang].certifications.list.forEach((item, i) => {
    certList[i].textContent = item;
  });

  // COLLABORATION
  document.querySelector("#collaboration h2").textContent = translations[lang].collaboration.title;
  const collabPs = document.querySelectorAll("#collaboration p");
  collabPs[0].textContent = translations[lang].collaboration.p1;
  collabPs[1].textContent = translations[lang].collaboration.p2;

  // RATES
  document.querySelector("#rates h2").textContent = translations[lang].rates.title;
  const ratesList = document.querySelectorAll("#rates ul li");
  translations[lang].rates.list.forEach((item, i) => {
    ratesList[i].innerHTML = item;
  });

  // PROFILE PHOTO
  const profileCard = document.querySelector("#profile-photo p");
  profileCard.innerHTML = `<strong>${translations[lang].profilePhoto.headline}</strong><br><br>${translations[lang].profilePhoto.text}`;

  // CONTACT
  document.querySelector(".contact h2").textContent = translations[lang].contact;
  const contactInfo = document.querySelectorAll(".contact-info > div");
  contactInfo[0].innerHTML = translations[lang].contactInfo.name + "<br>" + translations[lang].contactInfo.email;
  contactInfo[1].innerHTML = translations[lang].contactInfo.linkedin + "<br>" + translations[lang].contactInfo.github;
  contactInfo[2].innerHTML = translations[lang].contactInfo.location;

  // HEADER
  document.querySelector("header h1").textContent = translations[lang].pageTitle;
  document.querySelector(".toggle-label").textContent = translations[lang].darkMode;

  // BUTTON
  langSwitcher.textContent = lang === "de" ? "EN" : "DE";
}

// Initial setzen
setLanguage(currentLang);

langSwitcher.addEventListener("click", function () {
  setLanguage(currentLang === "de" ? "en" : "de");
});
