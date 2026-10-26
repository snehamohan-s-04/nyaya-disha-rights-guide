import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "kn";
export type Bilingual = { en: string; kn: string };

const en: Record<string, string> = {
  "nav.home": "Home",
  "nav.rights": "Know Your Rights",
  "nav.help": "Legal Help",
  "nav.faqs": "FAQs",
  "nav.helplines": "Helplines",
  "brand.tag": "Legal Aid & Rights Awareness Portal",
  "header.menu": "Menu",
  "header.language": "Language",

  "hero.eyebrow": "A Citizen Legal Awareness Initiative",
  "hero.headline": "Know Your Rights. Know Where to Get Help.",
  "hero.sub":
    "Simple legal information, practical next steps and trusted resources for citizens of India.",
  "hero.cta1": "Explore Your Rights",
  "hero.cta2": "Find Legal Help",
  "hero.trust1": "In simple language",
  "hero.trust2": "Official helplines",
  "hero.trust3": "Completely free",

  "home.helpTitle": "How Can We Help?",
  "home.helpSub":
    "Choose what you need — every section takes you to clear, practical guidance.",
  "card.rights.t": "Know Your Rights",
  "card.rights.d": "Understand common legal rights in everyday language.",
  "card.help.t": "Find Legal Help",
  "card.help.d": "Follow a clear step-by-step path from problem to solution.",
  "card.report.t": "Report / Contact",
  "card.report.d": "Know where and how to report an issue.",
  "card.emergency.t": "Emergency & Helpline Numbers",
  "card.emergency.d": "Important numbers to call when you need help fast.",
  "card.faqs.t": "Frequently Asked Questions",
  "card.faqs.d": "Short answers to the questions citizens ask most.",
  "card.resources.t": "Official Resources",
  "card.resources.d": "Trusted government websites and portals.",
  "home.topicsTitle": "Explore Legal Topics",
  "home.topicsSub":
    "Plain-language guides to the situations citizens face most often.",
  "home.viewAll": "View all topics",
  "home.quickTitle": "Quick Help",
  "home.quickSub": "The most urgent actions, one tap away.",
  "quick.112.t": "Emergency? Call 112",
  "quick.112.d": "One number for police, fire and ambulance.",
  "quick.1930.t": "Online fraud? Call 1930",
  "quick.1930.d": "Report quickly — the first hour matters most.",
  "quick.15100.t": "Free legal aid — 15100",
  "quick.15100.d": "Guidance on free legal services near you.",
  "quick.faq.t": "Common questions",
  "quick.faq.d": "Read quick answers before you act.",
  "home.ctaTitle": "Not sure where to start?",
  "home.ctaText":
    "Start with your rights, understand your options, and find the right place to seek help.",
  "home.ctaButton": "Get Started",

  "rights.title": "Know Your Rights",
  "rights.sub": "Understand common legal rights in simple, everyday language.",
  "rights.search": "Search legal topics...",
  "rights.noResults": "No topics match your search. Try a different word.",
  "rights.read": "Read the guide",
  "topic.what": "What is it?",
  "topic.rights": "Know Your Rights",
  "topic.steps": "What Can You Do?",
  "topic.help": "Where Can You Seek Help?",
  "dialog.close": "Close",
  "common.disclaimer":
    "This is general legal awareness information, not legal advice. For your specific situation, consult a lawyer or a Legal Services Authority.",

  "help.title": "Need Legal Help?",
  "help.sub":
    "Follow these six steps to move from problem to solution with confidence.",
  "help.stepLabel": "Step",
  "help.aidTitle": "Free Legal Aid",
  "help.aidText":
    "People who cannot afford a lawyer may be able to receive free legal services through the Legal Services Authorities at the national, state and district level. Eligibility depends on government rules — check the official NALSA website or your District Legal Services Authority for the exact criteria and how to apply.",
  "help.aidButton": "Find Official Legal Aid Resources",
  "help.contactTitle": "In a hurry?",
  "help.contactText":
    "If you need help right now, go straight to the verified helpline numbers.",

  "faq.title": "Frequently Asked Questions",
  "faq.sub": "Short, clear answers to the questions citizens ask most.",

  "helpline.title": "Helpline Numbers",
  "helpline.sub":
    "Important numbers, what they are for, and when to use them.",
  "helpline.verify":
    "Helpline details can change. Please verify each number on its official website before relying on it, especially in an emergency.",
  "helpline.call": "Call now",
  "helpline.when": "When to use it",
  "helpline.website": "Official website",
  "helpline.resourcesTitle": "Official Resources",
  "helpline.resourcesSub":
    "Trusted government portals for further information and complaints.",
  "helpline.visit": "Visit portal",

  "footer.about": "About the Portal",
  "footer.aboutText":
    "NyayaDisha helps citizens of India understand their basic legal rights in simple language, take practical next steps, and find trusted official resources.",
  "footer.quick": "Quick Links",
  "footer.topics": "Legal Topics",
  "footer.helplines": "Helplines",
  "footer.resources": "Official Resources",
  "footer.disclaimer":
    "This portal provides general legal awareness information and is not a substitute for professional legal advice.",
  "footer.academic":
    "NyayaDisha is an academic community project created for legal awareness and education.",
};

const kn: Record<string, string> = {
  "nav.home": "ಮುಖಪುಟ",
  "nav.rights": "ನಿಮ್ಮ ಹಕ್ಕುಗಳು",
  "nav.help": "ಕಾನೂನು ಸಹಾಯ",
  "nav.faqs": "ಪ್ರಶ್ನೋತ್ತರ",
  "nav.helplines": "ಸಹಾಯವಾಣಿಗಳು",
  "brand.tag": "ಕಾನೂನು ಸಹಾಯ ಮತ್ತು ಹಕ್ಕುಗಳ ಜಾಗೃತಿ ಪೋರ್ಟಲ್",
  "header.menu": "ಮೆನು",
  "header.language": "ಭಾಷೆ",

  "hero.eyebrow": "ನಾಗರಿಕ ಕಾನೂನು ಜಾಗೃತಿ ಉಪಕ್ರಮ",
  "hero.headline":
    "ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ತಿಳಿಯಿರಿ. ಸಹಾಯ ಎಲ್ಲಿದೆ ಎಂದು ತಿಳಿಯಿರಿ.",
  "hero.sub":
    "ಭಾರತದ ನಾಗರಿಕರಿಗಾಗಿ ಸರಳ ಕಾನೂನು ಮಾಹಿತಿ, ಪ್ರಾಯೋಗಿಕ ಮುಂದಿನ ಹೆಜ್ಜೆಗಳು ಮತ್ತು ನಂಬಲರ್ಹ ಸಂಪನ್ಮೂಲಗಳು.",
  "hero.cta1": "ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
  "hero.cta2": "ಕಾನೂನು ಸಹಾಯ ಹುಡುಕಿ",
  "hero.trust1": "ಸರಳ ಭಾಷೆಯಲ್ಲಿ",
  "hero.trust2": "ಅಧಿಕೃತ ಸಹಾಯವಾಣಿಗಳು",
  "hero.trust3": "ಸಂಪೂರ್ಣ ಉಚಿತ",

  "home.helpTitle": "ನಾವು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
  "home.helpSub":
    "ನಿಮಗೆ ಬೇಕಾದುದನ್ನು ಆಯ್ಕೆ ಮಾಡಿ — ಪ್ರತಿ ವಿಭಾಗವೂ ಸ್ಪಷ್ಟ, ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕೆ ಕರ್ಕೊಳ್ಳುತ್ತದೆ.",
  "card.rights.t": "ನಿಮ್ಮ ಹಕ್ಕುಗಳು",
  "card.rights.d": "ದೈನಂದಿನ ಭಾಷೆಯಲ್ಲಿ ಸಾಮಾನ್ಯ ಕಾನೂನು ಹಕ್ಕುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
  "card.help.t": "ಕಾನೂನು ಸಹಾಯ ಹುಡುಕಿ",
  "card.help.d": "ಸಮಸ್ಯೆಯಿಂದ ಪರಿಹಾರದವರೆಗೆ ಸ್ಪಷ್ಟ ಹೆಜ್ಜೆ-ಹೆಜ್ಜೆ ಮಾರ್ಗವನ್ನು ಅನುಸರಿಸಿ.",
  "card.report.t": "ದೂರು / ಸಂಪರ್ಕ",
  "card.report.d": "ಸಮಸ್ಯೆಯನ್ನು ಎಲ್ಲಿ ಮತ್ತು ಹೇಗೆ ದೂರು ಮಾಡಬೇಕೆಂದು ತಿಳಿಯಿರಿ.",
  "card.emergency.t": "ತುರ್ತು ಮತ್ತು ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು",
  "card.emergency.d": "ತ್ವರಿತ ಸಹಾಯ ಬೇಕಾದಾಗ ಕರೆ ಮಾಡಬೇಕಾದ ಪ್ರಮುಖ ಸಂಖ್ಯೆಗಳು.",
  "card.faqs.t": "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
  "card.faqs.d": "ನಾಗರಿಕರು ಹೆಚ್ಚಾಗಿ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಣ್ಣ ಉತ್ತರಗಳು.",
  "card.resources.t": "ಅಧಿಕೃತ ಸಂಪನ್ಮೂಲಗಳು",
  "card.resources.d": "ನಂಬಲರ್ಹ ಸರ್ಕಾರಿ ಜಾಲತಾಣಗಳು ಮತ್ತು ಪೋರ್ಟಲ್‌ಗಳು.",
  "home.topicsTitle": "ಕಾನೂನು ವಿಷಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
  "home.topicsSub": "ನಾಗರಿಕರು ಆಗಾಗ್ಗೆ ಎದುರಿಸುವ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಸರಳ ಭಾಷೆಯ ಮಾರ್ಗದರ್ಶಿಗಳು.",
  "home.viewAll": "ಎಲ್ಲಾ ವಿಷಯಗಳನ್ನು ನೋಡಿ",
  "home.quickTitle": "ತ್ವರಿತ ಸಹಾಯ",
  "home.quickSub": "ಅತ್ಯಂತ ತುರ್ತು ಕ್ರಮಗಳು, ಒಂದು ಸ್ಪರ್ಶದಲ್ಲಿ.",
  "quick.112.t": "ತುರ್ತು? 112 ಗೆ ಕರೆ ಮಾಡಿ",
  "quick.112.d": "ಪೊಲೀಸ್, ಅಗ್ನಿಶಾಮಕ ಮತ್ತು ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಒಂದೇ ಸಂಖ್ಯೆ.",
  "quick.1930.t": "ಆನ್‌ಲೈನ್ ವಂಚನೆ? 1930 ಗೆ ಕರೆ ಮಾಡಿ",
  "quick.1930.d": "ಬೇಗ ದೂರು ನೀಡಿ — ಮೊದಲ ಗಂಟೆ ಅತಿ ಮುಖ್ಯ.",
  "quick.15100.t": "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ — 15100",
  "quick.15100.d": "ನಿಮ್ಮ ಹತ್ತಿರದ ಉಚಿತ ಕಾನೂನು ಸೇವೆಯ ಮಾರ್ಗದರ್ಶನ.",
  "quick.faq.t": "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
  "quick.faq.d": "ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ಸಣ್ಣ ಉತ್ತರಗಳನ್ನು ಓದಿ.",
  "home.ctaTitle": "ಎಲ್ಲಿಂದ ಆರಂಭಿಸಬೇಕೆಂದು ಖಚಿತವಿಲ್ಲವೇ?",
  "home.ctaText":
    "ನಿಮ್ಮ ಹಕ್ಕುಗಳಿಂದ ಆರಂಭಿಸಿ, ನಿಮ್ಮ ಆಯ್ಕೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಸಹಾಯ ಪಡೆಯಲು ಸರಿಯಾದ ಸ್ಥಳವನ್ನು ಹುಡುಕಿ.",
  "home.ctaButton": "ಆರಂಭಿಸಿ",

  "rights.title": "ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ತಿಳಿಯಿರಿ",
  "rights.sub": "ಸರಳ, ದೈನಂದಿನ ಭಾಷೆಯಲ್ಲಿ ಸಾಮಾನ್ಯ ಕಾನೂನು ಹಕ್ಕುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
  "rights.search": "ಕಾನೂನು ವಿಷಯಗಳನ್ನು ಹುಡುಕಿ...",
  "rights.noResults": "ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ವಿಷಯಗಳಿಲ್ಲ. ಬೇರೆ ಪದವನ್ನು ಪ್ರಯತ್ನಿಸಿ.",
  "rights.read": "ಮಾರ್ಗದರ್ಶಿ ಓದಿ",
  "topic.what": "ಇದು ಎಂತಹದು?",
  "topic.rights": "ನಿಮ್ಮ ಹಕ್ಕುಗಳು",
  "topic.steps": "ನೀವು ಏನು ಮಾಡಬಹುದು?",
  "topic.help": "ಸಹಾಯ ಎಲ್ಲಿ ಪಡೆಯಬಹುದು?",
  "dialog.close": "ಮುಚ್ಚಿ",
  "common.disclaimer":
    "ಇದು ಸಾಮಾನ್ಯ ಕಾನೂನು ಜಾಗೃತಿ ಮಾಹಿತಿ, ಕಾನೂನು ಸಲಹೆಯಲ್ಲ. ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಪರಿಸ್ಥಿತಿಗೆ ವಕೀಲರು ಅಥವಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಸಂಪರ್ಕಿಸಿ.",

  "help.title": "ಕಾನೂನು ಸಹಾಯ ಬೇಕಾಗಿದೆಯೇ?",
  "help.sub":
    "ಸಮಸ್ಯೆಯಿಂದ ಪರಿಹಾರದವರೆಗೆ ವಿಶ್ವಾಸದೊಂದಿಗೆ ಸಾಗಲು ಈ ಆರು ಹೆಜ್ಜೆಗಳನ್ನು ಅನುಸರಿಸಿ.",
  "help.stepLabel": "ಹೆಜ್ಜೆ",
  "help.aidTitle": "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ",
  "help.aidText":
    "ವಕೀಲರ ಖರ್ಚು ವಹಿಸಲಾಗದ ಜನರಿಗೆ ರಾಷ್ಟ್ರ, ರಾಜ್ಯ ಮತ್ತು ಜಿಲ್ಲಾ ಮಟ್ಟದ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳ ಮೂಲಕ ಉಚಿತ ಕಾನೂನು ಸೇವೆ ಸಿಗಬಹುದು. ಅರ್ಹತೆ ಸರ್ಕಾರಿ ನಿಯಮಗಳನ್ನು ಅವಲಂಬಿಸಿದೆ — ನಿಖರವಾದ ಮಾನದಂಡ ಮತ್ತು ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆಗೆ ಅಧಿಕೃತ NALSA ಜಾಲತಾಣ ಅಥವಾ ನಿಮ್ಮ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವನ್ನು ನೋಡಿ.",
  "help.aidButton": "ಅಧಿಕೃತ ಕಾನೂನು ಸಹಾಯ ಸಂಪನ್ಮೂಲಗಳು",
  "help.contactTitle": "ಆತುರದಲ್ಲಿದ್ದೀರಾ?",
  "help.contactText":
    "ಈಗಲೇ ಸಹಾಯ ಬೇಕಿದ್ದರೆ, ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಿದ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳಿಗೆ ಹೋಗಿ.",

  "faq.title": "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
  "faq.sub": "ನಾಗರಿಕರು ಹೆಚ್ಚಾಗಿ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಣ್ಣ, ಸ್ಪಷ್ಟ ಉತ್ತರಗಳು.",

  "helpline.title": "ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು",
  "helpline.sub": "ಪ್ರಮುಖ ಸಂಖ್ಯೆಗಳು, ಅವು ಯಾವುದಕ್ಕಾಗಿ, ಮತ್ತು ಯಾವಾಗ ಬಳಸಬೇಕು.",
  "helpline.verify":
    "ಸಹಾಯವಾಣಿ ವಿವರಗಳು ಬದಲಾಗಬಹುದು. ಅದನ್ನು ಅವಲಂಬಿಸುವ ಮೊದಲು — ವಿಶೇಷವಾಗಿ ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ — ಅಧಿಕೃತ ಜಾಲತಾಣದಲ್ಲಿ ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
  "helpline.call": "ಈಗ ಕರೆ ಮಾಡಿ",
  "helpline.when": "ಯಾವಾಗ ಬಳಸಬೇಕು",
  "helpline.website": "ಅಧಿಕೃತ ಜಾಲತಾಣ",
  "helpline.resourcesTitle": "ಅಧಿಕೃತ ಸಂಪನ್ಮೂಲಗಳು",
  "helpline.resourcesSub": "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಮತ್ತು ದೂರುಗಳಿಗೆ ನಂಬಲರ್ಹ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳು.",
  "helpline.visit": "ಪೋರ್ಟಲ್ ನೋಡಿ",

  "footer.about": "ಪೋರ್ಟಲ್ ಬಗ್ಗೆ",
  "footer.aboutText":
    "ನ್ಯಾಯದಿಶಾ ಭಾರತದ ನಾಗರಿಕರಿಗೆ ತಮ್ಮ ಮೂಲ ಕಾನೂನು ಹಕ್ಕುಗಳನ್ನು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ಪ್ರಾಯೋಗಿಕ ಮುಂದಿನ ಹೆಜ್ಜೆಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಮತ್ತು ನಂಬಲರ್ಹ ಅಧಿಕೃತ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
  "footer.quick": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
  "footer.topics": "ಕಾನೂನು ವಿಷಯಗಳು",
  "footer.helplines": "ಸಹಾಯವಾಣಿಗಳು",
  "footer.resources": "ಅಧಿಕೃತ ಸಂಪನ್ಮೂಲಗಳು",
  "footer.disclaimer":
    "ಈ ಪೋರ್ಟಲ್ ಸಾಮಾನ್ಯ ಕಾನೂನು ಜಾಗೃತಿ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ ಮತ್ತು ವೃತ್ತಿಪರ ಕಾನೂನು ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.",
  "footer.academic":
    "ನ್ಯಾಯದಿಶಾ ಕಾನೂನು ಜಾಗೃತಿ ಮತ್ತು ಶಿಕ್ಷಣಕ್ಕಾಗಿ ರಚಿಸಲಾದ ಶೈಕ್ಷಣಿಕ ಸಮುದಾಯ ಯೋಜನೆ.",
};

const dictionaries: Record<Lang, Record<string, string>> = { en, kn };

const STORAGE_KEY = "nyayadisha-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  bi: (value: Bilingual) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the saved language after mount (hydration-safe).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "kn" || saved === "en") setLangState(saved);
  }, []);

  // Keep <html lang> and the saved preference in sync.
  useEffect(() => {
    document.documentElement.lang = lang === "kn" ? "kn" : "en";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const t = (key: string) => dictionaries[lang][key] ?? en[key] ?? key;

  const bi = (value: Bilingual) => value[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, bi }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
