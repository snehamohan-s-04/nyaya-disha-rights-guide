import { topics, type Topic } from "@/data/content";
import type { Bilingual } from "@/lib/i18n";

export interface CitizenCategory {
  id: string;
  icon: Topic["icon"];
  title: Bilingual;
  description: Bilingual;
  topicIds: string[];
}

export interface OfficialGuideResource {
  title: Bilingual;
  url: string;
}

export interface TopicGuideDetails {
  law: Bilingual;
  purpose: Bilingual;
  situations: Bilingual[];
  resources: OfficialGuideResource[];
}

export const additionalTopics: Topic[] = [
  {
    id: "child-safety",
    icon: "shield",
    categoryId: "people-family",
    title: { en: "Child Safety & Protection", kn: "ಮಕ್ಕಳ ಸುರಕ್ಷತೆ ಮತ್ತು ರಕ್ಷಣೆ" },
    summary: {
      en: "Understand child-protection support and where to turn when a child may be unsafe.",
      kn: "ಮಗುವಿನ ಸುರಕ್ಷತೆಗೆ ಅಪಾಯವಿದ್ದಾಗ ಮಕ್ಕಳ ರಕ್ಷಣಾ ಸಹಾಯ ಮತ್ತು ಸಂಪರ್ಕಿಸಬೇಕಾದ ಸ್ಥಳ ತಿಳಿಯಿರಿ.",
    },
    what: {
      en: "Indian law provides child-specific safeguards and child-friendly procedures. A trusted adult or appropriate authority can help a child reach protection and support.",
      kn: "ಭಾರತದ ಕಾನೂನು ಮಕ್ಕಳಿಗೆ ವಿಶೇಷ ರಕ್ಷಣೆ ಮತ್ತು ಮಕ್ಕಳ ಸ್ನೇಹಿ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ನಂಬಿಕಸ್ಥ ವಯಸ್ಕರು ಅಥವಾ ಸೂಕ್ತ ಪ್ರಾಧಿಕಾರವು ಮಗುವಿಗೆ ರಕ್ಷಣೆ ಮತ್ತು ಬೆಂಬಲ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡಬಹುದು.",
    },
    rights: [
      { en: "A child is entitled to protection from sexual offences and to child-sensitive legal procedures.", kn: "ಮಗುವಿಗೆ ಲೈಂಗಿಕ ಅಪರಾಧಗಳಿಂದ ರಕ್ಷಣೆ ಮತ್ತು ಮಕ್ಕಳಿಗೆ ಸೂಕ್ತವಾದ ಕಾನೂನು ಪ್ರಕ್ರಿಯೆಗಳ ಹಕ್ಕಿದೆ." },
      { en: "A child in immediate danger should be connected with emergency or child-protection services.", kn: "ತಕ್ಷಣದ ಅಪಾಯದಲ್ಲಿರುವ ಮಗುವನ್ನು ತುರ್ತು ಅಥವಾ ಮಕ್ಕಳ ರಕ್ಷಣಾ ಸೇವೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಬೇಕು." },
    ],
    steps: [
      { en: "If danger is immediate, contact emergency services at 112.", kn: "ತಕ್ಷಣದ ಅಪಾಯವಿದ್ದರೆ 112 ತುರ್ತು ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ." },
      { en: "Tell a trusted adult or contact the Child Helpline at 1098 for support.", kn: "ನಂಬಿಕಸ್ಥ ವಯಸ್ಕರಿಗೆ ತಿಳಿಸಿ ಅಥವಾ ಬೆಂಬಲಕ್ಕಾಗಿ ಮಕ್ಕಳ ಸಹಾಯವಾಣಿ 1098 ಅನ್ನು ಸಂಪರ್ಕಿಸಿ." },
      { en: "For a suspected offence, contact police or a child-protection authority; do not investigate or share a child's private details online.", kn: "ಅಪರಾಧದ ಅನುಮಾನವಿದ್ದರೆ ಪೊಲೀಸರನ್ನು ಅಥವಾ ಮಕ್ಕಳ ರಕ್ಷಣಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಸಂಪರ್ಕಿಸಿ; ಮಗುವಿನ ಖಾಸಗಿ ವಿವರಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಂಚಬೇಡಿ." },
    ],
    help: {
      en: "For immediate danger call 112. The Child Helpline 1098 and local child-protection authorities can guide next steps.",
      kn: "ತಕ್ಷಣದ ಅಪಾಯಕ್ಕೆ 112 ಗೆ ಕರೆ ಮಾಡಿ. ಮಕ್ಕಳ ಸಹಾಯವಾಣಿ 1098 ಮತ್ತು ಸ್ಥಳೀಯ ಮಕ್ಕಳ ರಕ್ಷಣಾ ಪ್ರಾಧಿಕಾರಗಳು ಮುಂದಿನ ಕ್ರಮ ತಿಳಿಸಬಹುದು.",
    },
  },
  {
    id: "senior-support",
    icon: "heartHandshake",
    categoryId: "people-family",
    title: { en: "Senior Citizen Support", kn: "ಹಿರಿಯ ನಾಗರಿಕರ ಬೆಂಬಲ" },
    summary: {
      en: "Learn about support for parents and senior citizens, including where to seek local guidance.",
      kn: "ಪೋಷಕರು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಲಭ್ಯವಿರುವ ಬೆಂಬಲ ಹಾಗೂ ಸ್ಥಳೀಯ ಮಾರ್ಗದರ್ಶನ ಎಲ್ಲಿ ಪಡೆಯುವುದು ತಿಳಿಯಿರಿ.",
    },
    what: {
      en: "The Maintenance and Welfare of Parents and Senior Citizens Act, 2007 addresses maintenance and welfare, with procedures and implementation details that can depend on the relevant state or territory.",
      kn: "ಪೋಷಕರು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರ ಪಾಲನೆ ಮತ್ತು ಕಲ್ಯಾಣ ಕಾಯ್ದೆ, 2007 ಪಾಲನೆ ಮತ್ತು ಕಲ್ಯಾಣಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ; ಪ್ರಕ್ರಿಯೆಗಳು ಮತ್ತು ಅನುಷ್ಠಾನದ ವಿವರಗಳು ಸಂಬಂಧಿತ ರಾಜ್ಯ ಅಥವಾ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶವನ್ನು ಅವಲಂಬಿಸಬಹುದು.",
    },
    rights: [
      { en: "Parents and senior citizens can seek information from their local authorities about the support and processes available under applicable law.", kn: "ಅನ್ವಯಿಸುವ ಕಾನೂನಿನಡಿ ಲಭ್ಯವಿರುವ ಬೆಂಬಲ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಗಳ ಬಗ್ಗೆ ಪೋಷಕರು ಹಾಗೂ ಹಿರಿಯ ನಾಗರಿಕರು ಸ್ಥಳೀಯ ಪ್ರಾಧಿಕಾರದಿಂದ ಮಾಹಿತಿ ಪಡೆಯಬಹುದು." },
      { en: "The exact process and available services may differ by state or territory.", kn: "ನಿಖರ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಲಭ್ಯವಿರುವ ಸೇವೆಗಳು ರಾಜ್ಯ ಅಥವಾ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶದ ಪ್ರಕಾರ ಬದಲಾಗಬಹುದು." },
    ],
    steps: [
      { en: "Keep relevant documents and a brief record of the issue, if it is safe to do so.", kn: "ಸುರಕ್ಷಿತವಾಗಿದ್ದರೆ ಸಂಬಂಧಿತ ದಾಖಲೆಗಳು ಮತ್ತು ಸಮಸ್ಯೆಯ ಸಂಕ್ಷಿಪ್ತ ದಾಖಲೆಯನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ." },
      { en: "Ask the district social-welfare office or local Legal Services Authority about the process in your area.", kn: "ನಿಮ್ಮ ಪ್ರದೇಶದ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಜಿಲ್ಲಾ ಸಮಾಜ ಕಲ್ಯಾಣ ಕಚೇರಿ ಅಥವಾ ಸ್ಥಳೀಯ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಕೇಳಿ." },
      { en: "For immediate danger, call 112.", kn: "ತಕ್ಷಣದ ಅಪಾಯವಿದ್ದರೆ 112 ಗೆ ಕರೆ ಮಾಡಿ." },
    ],
    help: {
      en: "Contact your district social-welfare office or District Legal Services Authority for local guidance. Call 112 in an emergency.",
      kn: "ಸ್ಥಳೀಯ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಜಿಲ್ಲಾ ಸಮಾಜ ಕಲ್ಯಾಣ ಕಚೇರಿ ಅಥವಾ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಸಂಪರ್ಕಿಸಿ. ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ 112 ಗೆ ಕರೆ ಮಾಡಿ.",
    },
  },
  {
    id: "farmer-rights",
    icon: "home",
    categoryId: "work-study",
    title: { en: "Farmers’ Rights & Plant Varieties", kn: "ರೈತರ ಹಕ್ಕುಗಳು ಮತ್ತು ಸಸ್ಯ ತಳಿಗಳು" },
    summary: {
      en: "An introduction to protections for farmers and plant varieties under Indian law.",
      kn: "ಭಾರತದ ಕಾನೂನಿನಡಿ ರೈತರು ಮತ್ತು ಸಸ್ಯ ತಳಿಗಳಿಗೆ ಇರುವ ರಕ್ಷಣೆಯ ಪರಿಚಯ.",
    },
    what: {
      en: "The Protection of Plant Varieties and Farmers’ Rights Act, 2001 sets out a framework for plant-variety protection and specified farmers’ rights. The exact right depends on the facts and the Act.",
      kn: "ಸಸ್ಯ ತಳಿಗಳು ಮತ್ತು ರೈತರ ಹಕ್ಕುಗಳ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆ, 2001 ಸಸ್ಯ ತಳಿ ರಕ್ಷಣೆ ಮತ್ತು ನಿರ್ದಿಷ್ಟ ರೈತರ ಹಕ್ಕುಗಳಿಗೆ ಚೌಕಟ್ಟು ಒದಗಿಸುತ್ತದೆ. ನಿಖರ ಹಕ್ಕು ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಕಾಯ್ದೆಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.",
    },
    rights: [
      { en: "The Act recognises specified farmers’ rights relating to varieties, subject to the Act’s conditions.", kn: "ಕಾಯ್ದೆಯ ಷರತ್ತುಗಳಿಗೆ ಒಳಪಟ್ಟು ಸಸ್ಯ ತಳಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ನಿರ್ದಿಷ್ಟ ರೈತರ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದೆ ಗುರುತಿಸುತ್ತದೆ." },
      { en: "The official Authority publishes the Act and information about registration and related processes.", kn: "ಅಧಿಕೃತ ಪ್ರಾಧಿಕಾರವು ಕಾಯ್ದೆ ಹಾಗೂ ನೋಂದಣಿ ಮತ್ತು ಸಂಬಂಧಿತ ಪ್ರಕ್ರಿಯೆಗಳ ಮಾಹಿತಿಯನ್ನು ಪ್ರಕಟಿಸುತ್ತದೆ." },
    ],
    steps: [
      { en: "Keep seed, purchase, sale, and registration records relevant to your question.", kn: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗೆ ಸಂಬಂಧಿಸಿದ ಬೀಜ, ಖರೀದಿ, ಮಾರಾಟ ಮತ್ತು ನೋಂದಣಿ ದಾಖಲೆಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ." },
      { en: "Check the current Act and guidance on the official PPV&FR Authority website.", kn: "ಅಧಿಕೃತ PPV&FR ಪ್ರಾಧಿಕಾರದ ಜಾಲತಾಣದಲ್ಲಿ ಪ್ರಸ್ತುತ ಕಾಯ್ದೆ ಮತ್ತು ಮಾರ್ಗದರ್ಶನವನ್ನು ಪರಿಶೀಲಿಸಿ." },
      { en: "For a dispute about land, credit, insurance, or a sale, ask the appropriate local authority or a lawyer about the rules that apply.", kn: "ಭೂಮಿ, ಸಾಲ, ವಿಮೆ ಅಥವಾ ಮಾರಾಟದ ವಿವಾದಕ್ಕೆ ಅನ್ವಯಿಸುವ ನಿಯಮಗಳ ಬಗ್ಗೆ ಸ್ಥಳೀಯ ಪ್ರಾಧಿಕಾರ ಅಥವಾ ವಕೀಲರನ್ನು ಕೇಳಿ." },
    ],
    help: {
      en: "The Protection of Plant Varieties and Farmers’ Rights Authority publishes official Act and registration information. Local Legal Services Authorities can explain how to seek legal help.",
      kn: "ಸಸ್ಯ ತಳಿಗಳು ಮತ್ತು ರೈತರ ಹಕ್ಕುಗಳ ಪ್ರಾಧಿಕಾರವು ಅಧಿಕೃತ ಕಾಯ್ದೆ ಮತ್ತು ನೋಂದಣಿ ಮಾಹಿತಿಯನ್ನು ಪ್ರಕಟಿಸುತ್ತದೆ. ಸ್ಥಳೀಯ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳು ಕಾನೂನು ಸಹಾಯ ಪಡೆಯುವ ವಿಧಾನ ತಿಳಿಸಬಹುದು.",
    },
  },
  {
    id: "msme-payment",
    icon: "briefcase",
    categoryId: "money-online",
    title: { en: "Small Business & Delayed Payments", kn: "ಸಣ್ಣ ಉದ್ಯಮ ಮತ್ತು ತಡವಾದ ಪಾವತಿಗಳು" },
    summary: {
      en: "Explore the official information available to micro and small enterprises about delayed payments.",
      kn: "ತಡವಾದ ಪಾವತಿಗಳ ಬಗ್ಗೆ ಸೂಕ್ಷ್ಮ ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಗಳಿಗೆ ಲಭ್ಯವಿರುವ ಅಧಿಕೃತ ಮಾಹಿತಿ ತಿಳಿಯಿರಿ.",
    },
    what: {
      en: "The Micro, Small and Medium Enterprises Development Act, 2006 includes provisions on delayed payments to micro and small enterprises. The official MSME Samadhaan portal explains its filing process and who may apply.",
      kn: "ಸೂಕ್ಷ್ಮ, ಸಣ್ಣ ಮತ್ತು ಮಧ್ಯಮ ಉದ್ಯಮಗಳ ಅಭಿವೃದ್ಧಿ ಕಾಯ್ದೆ, 2006 ಸೂಕ್ಷ್ಮ ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಗಳಿಗೆ ತಡವಾದ ಪಾವತಿಗಳ ಕುರಿತ ನಿಯಮಗಳನ್ನು ಹೊಂದಿದೆ. ಅಧಿಕೃತ MSME ಸಮಾಧಾನ ಪೋರ್ಟಲ್ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು ಎಂಬುದನ್ನು ವಿವರಿಸುತ್ತದೆ.",
    },
    rights: [
      { en: "The Act contains provisions concerning delayed payments to micro and small enterprises; the facts and applicable requirements matter.", kn: "ಸೂಕ್ಷ್ಮ ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಗಳಿಗೆ ತಡವಾದ ಪಾವತಿಗಳ ಕುರಿತು ಕಾಯ್ದೆಯಲ್ಲಿ ನಿಯಮಗಳಿವೆ; ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಅನ್ವಯಿಸುವ ಅವಶ್ಯಕತೆಗಳು ಮುಖ್ಯ." },
      { en: "The official Samadhaan portal says a valid Udyam Registration is required for its filing process; confirm current requirements on the portal.", kn: "ಅಧಿಕೃತ ಸಮಾಧಾನ ಪೋರ್ಟಲ್ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆಗೆ ಮಾನ್ಯ ಉದ್ಯಮ್ ನೋಂದಣಿ ಬೇಕೆಂದು ತಿಳಿಸುತ್ತದೆ; ಪ್ರಸ್ತುತ ಅವಶ್ಯಕತೆಗಳನ್ನು ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ." },
    ],
    steps: [
      { en: "Keep invoices, purchase orders, delivery or service records, and written communications.", kn: "ಇನ್‌ವಾಯ್ಸ್‌ಗಳು, ಖರೀದಿ ಆದೇಶಗಳು, ವಿತರಣೆ ಅಥವಾ ಸೇವಾ ದಾಖಲೆಗಳು ಮತ್ತು ಬರಹದ ಸಂವಹನಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ." },
      { en: "Check the current eligibility and filing steps on the official MSME Samadhaan portal.", kn: "ಅಧಿಕೃತ MSME ಸಮಾಧಾನ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪ್ರಸ್ತುತ ಅರ್ಹತೆ ಮತ್ತು ಅರ್ಜಿ ಹಂತಗಳನ್ನು ಪರಿಶೀಲಿಸಿ." },
      { en: "If you are unsure whether the rules apply, consult the relevant Facilitation Council or a qualified adviser.", kn: "ನಿಯಮಗಳು ಅನ್ವಯಿಸುತ್ತವೆಯೇ ಎಂಬ ಅನುಮಾನವಿದ್ದರೆ ಸಂಬಂಧಿತ ಸೌಲಭ್ಯ ಮಂಡಳಿ ಅಥವಾ ಅರ್ಹ ಸಲಹೆಗಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ." },
    ],
    help: {
      en: "The MSME Samadhaan portal and the Micro and Small Enterprises Facilitation Council provide the official route described for delayed-payment matters.",
      kn: "ತಡವಾದ ಪಾವತಿ ವಿಷಯಗಳಿಗೆ ಅಧಿಕೃತವಾಗಿ ಸೂಚಿಸಿರುವ ಮಾರ್ಗ MSME ಸಮಾಧಾನ ಪೋರ್ಟಲ್ ಮತ್ತು ಸೂಕ್ಷ್ಮ ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಗಳ ಸೌಲಭ್ಯ ಮಂಡಳಿಯಾಗಿದೆ.",
    },
  },
];

export const allTopics: Topic[] = [...topics, ...additionalTopics];

export const citizenCategories: CitizenCategory[] = [
  {
    id: "common-citizens",
    icon: "users",
    title: { en: "Common Citizens", kn: "ಸಾಮಾನ್ಯ ನಾಗರಿಕರು" },
    description: { en: "Everyday rights, consumer concerns, police matters and online safety.", kn: "ದೈನಂದಿನ ಹಕ್ಕುಗಳು, ಗ್ರಾಹಕ ಸಮಸ್ಯೆಗಳು, ಪೊಲೀಸ್ ವಿಷಯಗಳು ಮತ್ತು ಆನ್‌ಲೈನ್ ಸುರಕ್ಷತೆ." },
    topicIds: ["constitutional", "consumer", "police", "cyber"],
  },
  {
    id: "women",
    icon: "heartHandshake",
    title: { en: "Women", kn: "ಮಹಿಳೆಯರು" },
    description: { en: "Safety, workplace protections, family matters and legal support.", kn: "ಸುರಕ್ಷತೆ, ಕಾರ್ಯಸ್ಥಳದ ರಕ್ಷಣೆ, ಕುಟುಂಬ ವಿಷಯಗಳು ಮತ್ತು ಕಾನೂನು ಬೆಂಬಲ." },
    topicIds: ["women", "family", "property", "legalaid"],
  },
  {
    id: "children",
    icon: "graduationCap",
    title: { en: "Children", kn: "ಮಕ್ಕಳು" },
    description: { en: "Education, safety and support for children and their caregivers.", kn: "ಮಕ್ಕಳು ಮತ್ತು ಆರೈಕೆದಾರರಿಗೆ ಶಿಕ್ಷಣ, ಸುರಕ್ಷತೆ ಮತ್ತು ಬೆಂಬಲ." },
    topicIds: ["child-safety", "students", "legalaid"],
  },
  {
    id: "senior-citizens",
    icon: "heartHandshake",
    title: { en: "Senior Citizens", kn: "ಹಿರಿಯ ನಾಗರಿಕರು" },
    description: { en: "Welfare, family property questions and finding local legal help.", kn: "ಕಲ್ಯಾಣ, ಕುಟುಂಬದ ಆಸ್ತಿ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಕಾನೂನು ಸಹಾಯ ಹುಡುಕುವುದು." },
    topicIds: ["senior-support", "property", "legalaid"],
  },
  {
    id: "students",
    icon: "graduationCap",
    title: { en: "Students", kn: "ವಿದ್ಯಾರ್ಥಿಗಳು" },
    description: { en: "Education, anti-ragging support, consumer concerns and online safety.", kn: "ಶಿಕ್ಷಣ, ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ಬೆಂಬಲ, ಗ್ರಾಹಕ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಆನ್‌ಲೈನ್ ಸುರಕ್ಷತೆ." },
    topicIds: ["students", "cyber", "consumer"],
  },
  {
    id: "workers",
    icon: "briefcase",
    title: { en: "Workers", kn: "ಕಾರ್ಮಿಕರು" },
    description: { en: "Workplace protections, wages and access to legal services.", kn: "ಕಾರ್ಯಸ್ಥಳದ ರಕ್ಷಣೆ, ವೇತನ ಮತ್ತು ಕಾನೂನು ಸೇವೆಗಳ ಪ್ರವೇಶ." },
    topicIds: ["workplace", "women", "legalaid"],
  },
  {
    id: "farmers",
    icon: "home",
    title: { en: "Farmers", kn: "ರೈತರು" },
    description: { en: "Farmers’ rights, sales and consumer or property questions.", kn: "ರೈತರ ಹಕ್ಕುಗಳು, ಮಾರಾಟ ಮತ್ತು ಗ್ರಾಹಕ ಅಥವಾ ಆಸ್ತಿ ಪ್ರಶ್ನೆಗಳು." },
    topicIds: ["farmer-rights", "consumer", "property"],
  },
  {
    id: "businesses",
    icon: "briefcase",
    title: { en: "Businesses & Companies", kn: "ವ್ಯವಹಾರಗಳು ಮತ್ತು ಕಂಪನಿಗಳು" },
    description: { en: "Small-business payment concerns, consumer responsibilities and workplace matters.", kn: "ಸಣ್ಣ ಉದ್ಯಮದ ಪಾವತಿ ಸಮಸ್ಯೆಗಳು, ಗ್ರಾಹಕ ಜವಾಬ್ದಾರಿಗಳು ಮತ್ತು ಕಾರ್ಯಸ್ಥಳದ ವಿಷಯಗಳು." },
    topicIds: ["msme-payment", "consumer", "workplace"],
  },
];

const resource = (title: string, url: string): OfficialGuideResource => ({
  title: { en: title, kn: title },
  url,
});

export const topicGuideDetails: Record<string, TopicGuideDetails> = {
  constitutional: {
    law: { en: "Constitution of India, including Fundamental Rights", kn: "ಮೂಲಭೂತ ಹಕ್ಕುಗಳನ್ನು ಒಳಗೊಂಡ ಭಾರತದ ಸಂವಿಧಾನ" },
    purpose: { en: "Fundamental Rights set limits on public power and protect equality, liberty and access to constitutional remedies. The exact right depends on the facts and the provision involved.", kn: "ಮೂಲಭೂತ ಹಕ್ಕುಗಳು ಸಾರ್ವಜನಿಕ ಅಧಿಕಾರಕ್ಕೆ ಮಿತಿ ವಿಧಿಸಿ ಸಮಾನತೆ, ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಸಂವಿಧಾನಾತ್ಮಕ ಪರಿಹಾರಗಳ ಪ್ರವೇಶವನ್ನು ರಕ್ಷಿಸುತ್ತವೆ. ನಿಖರ ಹಕ್ಕು ಪರಿಸ್ಥಿತಿ ಮತ್ತು ಸಂಬಂಧಿತ ವಿಧಿಯನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ." },
    situations: [{ en: "A resident believes a public office treated them differently. They can keep the decision and relevant correspondence, ask the office for its reason, and seek advice about the appropriate complaint or court process.", kn: "ಸಾರ್ವಜನಿಕ ಕಚೇರಿ ತಮ್ಮನ್ನು ವಿಭಿನ್ನವಾಗಿ ನಡೆಸಿಕೊಂಡಿದೆ ಎಂದು ನಿವಾಸಿಗೆ ಅನಿಸಿದರೆ, ನಿರ್ಧಾರ ಮತ್ತು ಸಂಬಂಧಿತ ಪತ್ರವ್ಯವಹಾರವನ್ನು ಉಳಿಸಿ, ಕಾರಣ ಕೇಳಿ, ಸೂಕ್ತ ದೂರು ಅಥವಾ ನ್ಯಾಯಾಲಯದ ಪ್ರಕ್ರಿಯೆಯ ಬಗ್ಗೆ ಸಲಹೆ ಪಡೆಯಬಹುದು." }],
    resources: [resource("Constitution of India — India Code", "https://www.indiacode.nic.in/handle/123456789/15240?lang=en&locale=en")],
  },
  cyber: {
    law: { en: "Information Technology Act, 2000; reporting through the National Cyber Crime Reporting Portal", kn: "ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಕಾಯ್ದೆ, 2000; ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಪೋರ್ಟಲ್ ಮೂಲಕ ದೂರು" },
    purpose: { en: "Indian law addresses specified offences involving computers and electronic communications. The facts determine which law and reporting route apply.", kn: "ಕಂಪ್ಯೂಟರ್ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಂವಹನಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ನಿರ್ದಿಷ್ಟ ಅಪರಾಧಗಳನ್ನು ಭಾರತೀಯ ಕಾನೂನು ಒಳಗೊಂಡಿದೆ. ಯಾವ ಕಾನೂನು ಮತ್ತು ದೂರು ಮಾರ್ಗ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂಬುದು ಪರಿಸ್ಥಿತಿಯನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ." },
    situations: [{ en: "A person notices an unauthorised payment. They should contact their bank or payment provider promptly, preserve transaction records, and use the official cybercrime reporting channels.", kn: "ಅನುಮತಿಯಿಲ್ಲದ ಪಾವತಿ ಕಂಡುಬಂದರೆ, ಬ್ಯಾಂಕ್ ಅಥವಾ ಪಾವತಿ ಸೇವಾ ಸಂಸ್ಥೆಯನ್ನು ತಕ್ಷಣ ಸಂಪರ್ಕಿಸಿ, ವಹಿವಾಟಿನ ದಾಖಲೆಗಳನ್ನು ಉಳಿಸಿ, ಅಧಿಕೃತ ಸೈಬರ್ ಅಪರಾಧ ದೂರು ಮಾರ್ಗಗಳನ್ನು ಬಳಸಿ." }],
    resources: [resource("Information Technology Act — India Code", "https://www.indiacode.nic.in/handle/123456789/1999"), resource("National Cyber Crime Reporting Portal", "https://cybercrime.gov.in")],
  },
  consumer: {
    law: { en: "Consumer Protection Act, 2019", kn: "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆ, 2019" },
    purpose: { en: "The Act provides a framework for consumer protection and resolving consumer disputes. The suitable process depends on the product, service and facts.", kn: "ಗ್ರಾಹಕರ ರಕ್ಷಣೆ ಮತ್ತು ಗ್ರಾಹಕ ವಿವಾದ ಪರಿಹಾರಕ್ಕೆ ಕಾಯ್ದೆ ಚೌಕಟ್ಟು ಒದಗಿಸುತ್ತದೆ. ಸೂಕ್ತ ಪ್ರಕ್ರಿಯೆ ಉತ್ಪನ್ನ, ಸೇವೆ ಮತ್ತು ಪರಿಸ್ಥಿತಿಯನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ." },
    situations: [{ en: "A customer receives a product that does not match the order. They can keep the invoice and order details, contact the seller in writing, and seek guidance from the National Consumer Helpline.", kn: "ಆದೇಶಕ್ಕೆ ಹೊಂದದ ಉತ್ಪನ್ನ ಬಂದರೆ, ಗ್ರಾಹಕರು ಬಿಲ್ ಮತ್ತು ಆದೇಶದ ವಿವರ ಉಳಿಸಿ, ಮಾರಾಟಗಾರರನ್ನು ಬರಹದಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ, ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿಯಿಂದ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಬಹುದು." }],
    resources: [resource("Consumer Protection Act — India Code", "https://www.indiacode.nic.in/handle/123456789/15256?locale=en"), resource("National Consumer Helpline", "https://consumerhelpline.gov.in/public/about")],
  },
  women: {
    law: { en: "Workplace sexual-harassment protections and the Protection of Women from Domestic Violence Act, 2005", kn: "ಕಾರ್ಯಸ್ಥಳದ ಲೈಂಗಿಕ ಕಿರುಕುಳದ ರಕ್ಷಣೆ ಮತ್ತು ಮಹಿಳೆಯರ ಗೃಹ ಹಿಂಸೆಯಿಂದ ರಕ್ಷಣಾ ಕಾಯ್ದೆ, 2005" },
    purpose: { en: "Indian laws provide routes to address sexual harassment at work and domestic violence. Which route applies depends on where the conduct happened and the circumstances.", kn: "ಕಾರ್ಯಸ್ಥಳದ ಲೈಂಗಿಕ ಕಿರುಕುಳ ಮತ್ತು ಗೃಹ ಹಿಂಸೆಯನ್ನು ಎದುರಿಸಲು ಭಾರತೀಯ ಕಾನೂನುಗಳು ಮಾರ್ಗಗಳನ್ನು ಒದಗಿಸುತ್ತವೆ. ಯಾವ ಮಾರ್ಗ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂಬುದು ಘಟನೆ ನಡೆದ ಸ್ಥಳ ಮತ್ತು ಪರಿಸ್ಥಿತಿಯನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ." },
    situations: [{ en: "An employee experiences unwanted conduct at work. If safe, she can preserve relevant records and ask about the workplace Internal Committee or district Local Committee process; urgent safety concerns call for immediate support.", kn: "ಉದ್ಯೋಗಿಗೆ ಕೆಲಸದ ಸ್ಥಳದಲ್ಲಿ ಅನಗತ್ಯ ವರ್ತನೆ ಎದುರಾದರೆ, ಸುರಕ್ಷಿತವಾಗಿದ್ದಲ್ಲಿ ಸಂಬಂಧಿತ ದಾಖಲೆ ಉಳಿಸಿ, ಕಾರ್ಯಸ್ಥಳದ ಆಂತರಿಕ ಸಮಿತಿ ಅಥವಾ ಜಿಲ್ಲಾ ಸ್ಥಳೀಯ ಸಮಿತಿಯ ಪ್ರಕ್ರಿಯೆ ವಿಚಾರಿಸಬಹುದು; ತುರ್ತು ಸುರಕ್ಷತಾ ಸಮಸ್ಯೆಗೆ ತಕ್ಷಣದ ಬೆಂಬಲ ಪಡೆಯಬೇಕು." }],
    resources: [resource("Workplace Sexual Harassment Act — India Code", "https://www.indiacode.nic.in/handle/123456789/2104"), resource("Domestic Violence Act — India Code", "https://www.indiacode.nic.in/handle/123456789/2021"), resource("NALSA legal aid", "https://nalsa.gov.in/legal-aid/")],
  },
  students: {
    law: { en: "Right to Education Act, 2009 and UGC anti-ragging regulations for higher education", kn: "ಶಿಕ್ಷಣದ ಹಕ್ಕು ಕಾಯ್ದೆ, 2009 ಮತ್ತು ಉನ್ನತ ಶಿಕ್ಷಣದ UGC ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ನಿಯಮಗಳು" },
    purpose: { en: "Indian law provides for free and compulsory elementary education for children aged 6–14 and for measures against ragging in higher educational institutions.", kn: "6–14 ವರ್ಷದ ಮಕ್ಕಳಿಗೆ ಉಚಿತ ಮತ್ತು ಕಡ್ಡಾಯ ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣ ಹಾಗೂ ಉನ್ನತ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ರ್ಯಾಗಿಂಗ್ ತಡೆ ಕ್ರಮಗಳನ್ನು ಭಾರತೀಯ ಕಾನೂನು ಒದಗಿಸುತ್ತದೆ." },
    situations: [{ en: "A student faces ragging in a college. They can approach the institution's anti-ragging committee and use the National Anti-Ragging Helpline or official complaint portal.", kn: "ಕಾಲೇಜಿನಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗೆ ರ್ಯಾಗಿಂಗ್ ಎದುರಾದರೆ, ಸಂಸ್ಥೆಯ ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ಸಮಿತಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ ರಾಷ್ಟ್ರೀಯ ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ಸಹಾಯವಾಣಿ ಅಥವಾ ಅಧಿಕೃತ ದೂರು ಪೋರ್ಟಲ್ ಬಳಸಿ." }],
    resources: [resource("Right to Education Act — India Code", "https://www.indiacode.nic.in/handle/123456789/2086"), resource("National Anti-Ragging Portal", "https://www.antiragging.in/"), resource("UGC student regulations", "https://www.ugc.gov.in/regulations/UGC_Regulations_Student")],
  },
  workplace: {
    law: { en: "Code on Wages, 2019 and applicable workplace laws; rules and implementation may vary", kn: "ವೇತನ ಸಂಹಿತೆ, 2019 ಮತ್ತು ಅನ್ವಯಿಸುವ ಕಾರ್ಯಸ್ಥಳದ ಕಾನೂನುಗಳು; ನಿಯಮಗಳು ಮತ್ತು ಅನುಷ್ಠಾನ ಬದಲಾಗಬಹುದು" },
    purpose: { en: "Indian workplace laws address matters such as wages, safety and discrimination. Applicable requirements can depend on the work, establishment, state and commencement notifications.", kn: "ವೇತನ, ಸುರಕ್ಷತೆ ಮತ್ತು ತಾರತಮ್ಯದಂತಹ ವಿಷಯಗಳನ್ನು ಭಾರತೀಯ ಕಾರ್ಯಸ್ಥಳದ ಕಾನೂನುಗಳು ಒಳಗೊಂಡಿವೆ. ಅನ್ವಯಿಸುವ ಅವಶ್ಯಕತೆಗಳು ಕೆಲಸ, ಸಂಸ್ಥೆ, ರಾಜ್ಯ ಮತ್ತು ಜಾರಿಗೆ ಸಂಬಂಧಿಸಿದ ಅಧಿಸೂಚನೆಗಳನ್ನು ಅವಲಂಬಿಸಬಹುದು." },
    situations: [{ en: "A worker believes wages are missing or incorrect. They can compare their payslip, attendance and payment records, raise the matter in writing, and ask the relevant labour department or adviser which rule applies.", kn: "ವೇತನ ಪಾವತಿಯಾಗಿಲ್ಲ ಅಥವಾ ತಪ್ಪಾಗಿದೆ ಎಂದು ಕಾರ್ಮಿಕರಿಗೆ ಅನಿಸಿದರೆ, ವೇತನಪಟ್ಟಿ, ಹಾಜರಾತಿ ಮತ್ತು ಪಾವತಿ ದಾಖಲೆಗಳನ್ನು ಹೋಲಿಸಿ, ಬರಹದಲ್ಲಿ ವಿಷಯ ತಿಳಿಸಿ, ಯಾವ ನಿಯಮ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದು ಸಂಬಂಧಿತ ಕಾರ್ಮಿಕ ಇಲಾಖೆಯನ್ನು ಅಥವಾ ಸಲಹೆಗಾರರನ್ನು ಕೇಳಬಹುದು." }],
    resources: [resource("Code on Wages — India Code", "https://www.indiacode.nic.in/handle/123456789/15793"), resource("NALSA legal aid", "https://nalsa.gov.in/legal-aid/")],
  },
  property: {
    law: { en: "Property and tenancy rules vary by state, type of property and personal-law context", kn: "ಆಸ್ತಿ ಮತ್ತು ಬಾಡಿಗೆ ನಿಯಮಗಳು ರಾಜ್ಯ, ಆಸ್ತಿಯ ವಿಧ ಮತ್ತು ವೈಯಕ್ತಿಕ ಕಾನೂನು ಸಂದರ್ಭದಂತೆ ಬದಲಾಗುತ್ತವೆ" },
    purpose: { en: "Written records and applicable local rules help clarify ownership, tenancy and inheritance questions. No single rule covers every property dispute.", kn: "ಬರಹದ ದಾಖಲೆಗಳು ಮತ್ತು ಅನ್ವಯಿಸುವ ಸ್ಥಳೀಯ ನಿಯಮಗಳು ಒಡೆತನ, ಬಾಡಿಗೆ ಮತ್ತು ಆನುವಂಶಿಕ ಪ್ರಶ್ನೆಗಳನ್ನು ಸ್ಪಷ್ಟಪಡಿಸುತ್ತವೆ. ಒಂದೇ ನಿಯಮ ಎಲ್ಲ ಆಸ್ತಿ ವಿವಾದಗಳಿಗೂ ಅನ್ವಯಿಸುವುದಿಲ್ಲ." },
    situations: [{ en: "A tenant is asked to leave unexpectedly. They can keep the rental agreement, receipts and notices, and seek local advice before taking action because state rules and the agreement matter.", kn: "ಬಾಡಿಗೆದಾರರನ್ನು ಅನಿರೀಕ್ಷಿತವಾಗಿ ಮನೆ ಖಾಲಿ ಮಾಡಲು ಕೇಳಿದರೆ, ಬಾಡಿಗೆ ಒಪ್ಪಂದ, ರಸೀದಿ ಮತ್ತು ನೋಟಿಸ್ ಉಳಿಸಿ, ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಸ್ಥಳೀಯ ಸಲಹೆ ಪಡೆಯಬಹುದು; ರಾಜ್ಯದ ನಿಯಮ ಮತ್ತು ಒಪ್ಪಂದ ಮುಖ್ಯ." }],
    resources: [resource("NALSA legal aid and local assistance", "https://nalsa.gov.in/legal-aid/"), resource("Hindu Succession Act — India Code (where applicable)", "https://www.indiacode.nic.in/handle/123456789/1713")],
  },
  police: {
    law: { en: "Bharatiya Nagarik Suraksha Sanhita, 2023 and other applicable criminal laws", kn: "ಭಾರತೀಯ ನಾಗರಿಕ ಸುರಕ್ಷಾ ಸಂಹಿತೆ, 2023 ಮತ್ತು ಅನ್ವಯಿಸುವ ಇತರ ಅಪರಾಧ ಕಾನೂನುಗಳು" },
    purpose: { en: "The Sanhita sets out criminal procedure, including how information about offences is handled. The applicable process depends on the nature of the issue and current law.", kn: "ಅಪರಾಧಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ನಿರ್ವಹಿಸುವ ವಿಧಾನ ಸೇರಿದಂತೆ ಅಪರಾಧ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸಂಹಿತೆ ನಿರ್ಧರಿಸುತ್ತದೆ. ಅನ್ವಯಿಸುವ ಪ್ರಕ್ರಿಯೆ ಸಮಸ್ಯೆಯ ಸ್ವರೂಪ ಮತ್ತು ಪ್ರಸ್ತುತ ಕಾನೂನನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ." },
    situations: [{ en: "A person wants to report an incident. They can write down the basic facts, keep relevant records, approach the police, and request local legal assistance if they need help understanding the process.", kn: "ಘಟನೆಯನ್ನು ವರದಿ ಮಾಡಲು ಬಯಸುವವರು ಮೂಲ ಸಂಗತಿಗಳನ್ನು ಬರೆಯಿರಿ, ಸಂಬಂಧಿತ ದಾಖಲೆ ಉಳಿಸಿ, ಪೊಲೀಸರನ್ನು ಸಂಪರ್ಕಿಸಿ, ಪ್ರಕ್ರಿಯೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸ್ಥಳೀಯ ಕಾನೂನು ಸಹಾಯ ಪಡೆಯಬಹುದು." }],
    resources: [resource("Bharatiya Nagarik Suraksha Sanhita — India Code", "https://www.indiacode.nic.in/handle/123456789/20099"), resource("NALSA legal aid", "https://nalsa.gov.in/legal-aid/")],
  },
  traffic: {
    law: { en: "Motor Vehicles Act, 1988 and applicable state rules", kn: "ಮೋಟಾರು ವಾಹನಗಳ ಕಾಯ್ದೆ, 1988 ಮತ್ತು ಅನ್ವಯಿಸುವ ರಾಜ್ಯ ನಿಯಮಗಳು" },
    purpose: { en: "The Act covers motor-vehicle licensing, traffic control, insurance and claims. State rules and the facts of an incident can affect the next step.", kn: "ವಾಹನ ಪರವಾನಗಿ, ಸಂಚಾರ ನಿಯಂತ್ರಣ, ವಿಮೆ ಮತ್ತು ಹಕ್ಕುಹೇಳಿಕೆಗಳನ್ನು ಕಾಯ್ದೆ ಒಳಗೊಂಡಿದೆ. ರಾಜ್ಯದ ನಿಯಮಗಳು ಮತ್ತು ಘಟನೆಯ ಸಂಗತಿಗಳು ಮುಂದಿನ ಕ್ರಮದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತವೆ." },
    situations: [{ en: "A driver receives a challan they believe is incorrect. They can keep the notice and related documents, check the official transport or traffic portal for the listed process, and seek advice if needed.", kn: "ತಪ್ಪಾಗಿದೆ ಎಂದು ಅನಿಸುವ ದಂಡ ಪತ್ರ ಬಂದರೆ, ಪತ್ರ ಮತ್ತು ಸಂಬಂಧಿತ ದಾಖಲೆ ಉಳಿಸಿ, ಸೂಚಿಸಿರುವ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಅಧಿಕೃತ ಸಾರಿಗೆ ಅಥವಾ ಸಂಚಾರ ಪೋರ್ಟಲ್ ಪರಿಶೀಲಿಸಿ, ಅಗತ್ಯವಿದ್ದರೆ ಸಲಹೆ ಪಡೆಯಬಹುದು." }],
    resources: [resource("Motor Vehicles Act — India Code", "https://www.indiacode.nic.in/handle/123456789/1798"), resource("Emergency Response Support System", "https://112.gov.in")],
  },
  family: {
    law: { en: "Family laws differ by issue and personal-law context; the Hindu Marriage Act is one example where applicable", kn: "ಕುಟುಂಬ ಕಾನೂನುಗಳು ವಿಷಯ ಮತ್ತು ವೈಯಕ್ತಿಕ ಕಾನೂನು ಸಂದರ್ಭದಂತೆ ಬದಲಾಗುತ್ತವೆ; ಅನ್ವಯಿಸಿದಲ್ಲಿ ಹಿಂದೂ ವಿವಾಹ ಕಾಯ್ದೆ ಒಂದು ಉದಾಹರಣೆ" },
    purpose: { en: "Family law provides processes for matters such as marriage, maintenance and child welfare. The relevant law depends on the people, issue and circumstances involved.", kn: "ವಿವಾಹ, ಜೀವನಾಂಶ ಮತ್ತು ಮಕ್ಕಳ ಕಲ್ಯಾಣದಂತಹ ವಿಷಯಗಳಿಗೆ ಕುಟುಂಬ ಕಾನೂನು ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ಸಂಬಂಧಿತ ಕಾನೂನು ವ್ಯಕ್ತಿಗಳು, ವಿಷಯ ಮತ್ತು ಸಂದರ್ಭವನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ." },
    situations: [{ en: "Parents disagree about a child's arrangements. They can keep the child's needs central and seek advice from a family-law professional or Legal Services Authority about the process that applies.", kn: "ಮಗುವಿನ ವ್ಯವಸ್ಥೆಗಳ ಬಗ್ಗೆ ಪೋಷಕರಲ್ಲಿ ಭಿನ್ನಾಭಿಪ್ರಾಯವಿದ್ದರೆ, ಮಗುವಿನ ಅಗತ್ಯಗಳನ್ನು ಮುಖ್ಯವಾಗಿಟ್ಟು ಅನ್ವಯಿಸುವ ಪ್ರಕ್ರಿಯೆಗಾಗಿ ಕುಟುಂಬ ಕಾನೂನು ತಜ್ಞರು ಅಥವಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರದಿಂದ ಸಲಹೆ ಪಡೆಯಬಹುದು." }],
    resources: [resource("Hindu Marriage Act — India Code (where applicable)", "https://www.indiacode.nic.in/handle/123456789/1560"), resource("NALSA legal aid", "https://nalsa.gov.in/legal-aid/")],
  },
  legalaid: {
    law: { en: "Legal Services Authorities Act, 1987; NALSA explains eligibility and how to apply", kn: "ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳ ಕಾಯ್ದೆ, 1987; ಅರ್ಹತೆ ಮತ್ತು ಅರ್ಜಿ ವಿಧಾನವನ್ನು NALSA ವಿವರಿಸುತ್ತದೆ" },
    purpose: { en: "The Act establishes legal-services authorities to provide free and competent legal services to people who qualify under its criteria. The authority decides individual applications.", kn: "ಕಾಯ್ದೆಯ ಮಾನದಂಡಗಳಿಗೆ ಅರ್ಹರಾದವರಿಗೆ ಉಚಿತ ಮತ್ತು ಸಮರ್ಥ ಕಾನೂನು ಸೇವೆ ಒದಗಿಸಲು ಪ್ರಾಧಿಕಾರಗಳನ್ನು ಕಾಯ್ದೆ ಸ್ಥಾಪಿಸುತ್ತದೆ. ವೈಯಕ್ತಿಕ ಅರ್ಜಿಗಳ ನಿರ್ಧಾರವನ್ನು ಪ್ರಾಧಿಕಾರವೇ ಮಾಡುತ್ತದೆ." },
    situations: [{ en: "A person needs legal help but is unsure whether they qualify. They can contact the District Legal Services Authority or consult NALSA's current eligibility and application information; this guide does not decide eligibility.", kn: "ಕಾನೂನು ಸಹಾಯ ಬೇಕಾದರೂ ಅರ್ಹತೆಯ ಬಗ್ಗೆ ಖಚಿತವಿಲ್ಲದವರು ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು ಅಥವಾ NALSA ಯ ಪ್ರಸ್ತುತ ಅರ್ಹತೆ ಮತ್ತು ಅರ್ಜಿ ಮಾಹಿತಿಯನ್ನು ನೋಡಬಹುದು; ಈ ಮಾರ್ಗದರ್ಶಿ ಅರ್ಹತೆ ನಿರ್ಧರಿಸುವುದಿಲ್ಲ." }],
    resources: [resource("NALSA legal aid and application information", "https://nalsa.gov.in/legal-aid/"), resource("Legal Services Authorities Act — India Code", "https://www.indiacode.nic.in/handle/123456789/1925?view_type=browse")],
  },
  "child-safety": {
    law: { en: "Protection of Children from Sexual Offences Act, 2012 (POCSO Act)", kn: "ಲೈಂಗಿಕ ಅಪರಾಧಗಳಿಂದ ಮಕ್ಕಳ ರಕ್ಷಣಾ ಕಾಯ್ದೆ, 2012 (POCSO ಕಾಯ್ದೆ)" },
    purpose: { en: "The Act provides a legal framework to protect children from specified sexual offences and includes procedures designed for children.", kn: "ನಿರ್ದಿಷ್ಟ ಲೈಂಗಿಕ ಅಪರಾಧಗಳಿಂದ ಮಕ್ಕಳನ್ನು ರಕ್ಷಿಸಲು ಕಾಯ್ದೆ ಕಾನೂನು ಚೌಕಟ್ಟು ಮತ್ತು ಮಕ್ಕಳಿಗಾಗಿ ರೂಪಿಸಿದ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ." },
    situations: [{ en: "A child tells a trusted adult that someone has made them feel unsafe. The adult can listen calmly, avoid pressing the child for details, and contact child-protection or emergency services for guidance.", kn: "ಯಾರೋ ಅಸುರಕ್ಷಿತ ಭಾವನೆ ಉಂಟುಮಾಡಿದ್ದಾರೆ ಎಂದು ಮಗು ನಂಬಿಕಸ್ಥ ವಯಸ್ಕರಿಗೆ ಹೇಳಿದರೆ, ವಯಸ್ಕರು ಶಾಂತವಾಗಿ ಕೇಳಿ, ಹೆಚ್ಚಿನ ವಿವರಕ್ಕೆ ಒತ್ತಾಯಿಸದೆ ಮಕ್ಕಳ ರಕ್ಷಣಾ ಅಥವಾ ತುರ್ತು ಸೇವೆಗಳಿಂದ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಬಹುದು." }],
    resources: [resource("POCSO Act — India Code", "https://www.indiacode.nic.in/handle/123456789/2079"), resource("Child Helpline information — Government of India", "https://www.india.gov.in/spotlight/childline-1098")],
  },
  "senior-support": {
    law: { en: "Maintenance and Welfare of Parents and Senior Citizens Act, 2007", kn: "ಪೋಷಕರು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರ ಪಾಲನೆ ಮತ್ತು ಕಲ್ಯಾಣ ಕಾಯ್ದೆ, 2007" },
    purpose: { en: "The Act addresses maintenance and welfare of parents and senior citizens. Local procedures and services should be confirmed with the relevant authority.", kn: "ಪೋಷಕರು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರ ಪಾಲನೆ ಮತ್ತು ಕಲ್ಯಾಣವನ್ನು ಕಾಯ್ದೆ ಒಳಗೊಂಡಿದೆ. ಸ್ಥಳೀಯ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಸೇವೆಗಳನ್ನು ಸಂಬಂಧಿತ ಪ್ರಾಧಿಕಾರದಿಂದ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ." },
    situations: [{ en: "An older adult needs help understanding local maintenance or welfare options. They can ask the district social-welfare office or Legal Services Authority which process applies in their area.", kn: "ಹಿರಿಯರಿಗೆ ಸ್ಥಳೀಯ ಪಾಲನೆ ಅಥವಾ ಕಲ್ಯಾಣ ಆಯ್ಕೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಬೇಕಾದರೆ, ತಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಯಾವ ಪ್ರಕ್ರಿಯೆ ಅನ್ವಯಿಸುತ್ತದೆ ಎಂದು ಜಿಲ್ಲಾ ಸಮಾಜ ಕಲ್ಯಾಣ ಕಚೇರಿ ಅಥವಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಕೇಳಬಹುದು." }],
    resources: [resource("Senior Citizens Act — India Code", "https://www.indiacode.nic.in/handle/123456789/2033?locale=en"), resource("NALSA legal aid", "https://nalsa.gov.in/legal-aid/")],
  },
  "farmer-rights": {
    law: { en: "Protection of Plant Varieties and Farmers’ Rights Act, 2001", kn: "ಸಸ್ಯ ತಳಿಗಳು ಮತ್ತು ರೈತರ ಹಕ್ಕುಗಳ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆ, 2001" },
    purpose: { en: "The Act provides a framework for plant-variety protection and specified farmers’ rights, including recognition of farmers’ varieties under the applicable process.", kn: "ಅನ್ವಯಿಸುವ ಪ್ರಕ್ರಿಯೆಯಡಿ ರೈತರ ತಳಿಗಳ ಗುರುತಿಸುವಿಕೆ ಸೇರಿದಂತೆ ಸಸ್ಯ ತಳಿ ರಕ್ಷಣೆ ಮತ್ತು ನಿರ್ದಿಷ್ಟ ರೈತರ ಹಕ್ಕುಗಳಿಗೆ ಕಾಯ್ದೆ ಚೌಕಟ್ಟು ಒದಗಿಸುತ್ತದೆ." },
    situations: [{ en: "A farmer has developed or conserved a plant variety and wants to know about recognition. They can check the official Authority's current registration guidance and ask it about the applicable process.", kn: "ರೈತರು ಸಸ್ಯ ತಳಿಯನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ್ದರೆ ಅಥವಾ ಸಂರಕ್ಷಿಸಿದ್ದರೆ ಮತ್ತು ಗುರುತಿಸುವಿಕೆ ತಿಳಿಯಬೇಕಿದ್ದರೆ, ಅಧಿಕೃತ ಪ್ರಾಧಿಕಾರದ ಪ್ರಸ್ತುತ ನೋಂದಣಿ ಮಾರ್ಗದರ್ಶನ ನೋಡಿ, ಅನ್ವಯಿಸುವ ಪ್ರಕ್ರಿಯೆಯನ್ನು ವಿಚಾರಿಸಬಹುದು." }],
    resources: [resource("PPV&FR Authority — Act and official guidance", "https://plantauthority.gov.in/protection-plant-varieties-and-farmers-rights-act-2001"), resource("PPV&FR Act — India Code", "https://www.indiacode.nic.in/handle/123456789/1909?locale=en")],
  },
  "msme-payment": {
    law: { en: "Micro, Small and Medium Enterprises Development Act, 2006, including delayed-payment provisions", kn: "ತಡವಾದ ಪಾವತಿ ನಿಯಮಗಳನ್ನು ಒಳಗೊಂಡ ಸೂಕ್ಷ್ಮ, ಸಣ್ಣ ಮತ್ತು ಮಧ್ಯಮ ಉದ್ಯಮಗಳ ಅಭಿವೃದ್ಧಿ ಕಾಯ್ದೆ, 2006" },
    purpose: { en: "The Act provides a framework concerning delayed payments to micro and small enterprises. Official portal guidance describes the application route and current requirements.", kn: "ಸೂಕ್ಷ್ಮ ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಗಳಿಗೆ ತಡವಾದ ಪಾವತಿಗಳ ಕುರಿತು ಕಾಯ್ದೆ ಚೌಕಟ್ಟು ಒದಗಿಸುತ್ತದೆ. ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಮಾರ್ಗದರ್ಶನ ಅರ್ಜಿ ಮಾರ್ಗ ಮತ್ತು ಪ್ರಸ್ತುತ ಅವಶ್ಯಕತೆಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ." },
    situations: [{ en: "A small enterprise has an unpaid invoice. It can retain its order, invoice and delivery records, then check the current eligibility and filing information on MSME Samadhaan.", kn: "ಸಣ್ಣ ಉದ್ಯಮಕ್ಕೆ ಪಾವತಿಯಾಗದ ಇನ್‌ವಾಯ್ಸ್ ಇದ್ದರೆ, ಆದೇಶ, ಇನ್‌ವಾಯ್ಸ್ ಮತ್ತು ವಿತರಣೆ ದಾಖಲೆ ಉಳಿಸಿ, MSME ಸಮಾಧಾನದಲ್ಲಿ ಪ್ರಸ್ತುತ ಅರ್ಹತೆ ಮತ್ತು ಅರ್ಜಿ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಬಹುದು." }],
    resources: [resource("MSME Development Act — India Code", "https://www.indiacode.nic.in/handle/123456789/2013?locale=en"), resource("MSME Samadhaan — delayed payment information", "https://ramp.msme.gov.in/ramp/RAMP-initiative/msme-samadhaan/msme-samadhaan"), resource("MSME Samadhaan official FAQs", "https://samadhaan.msme.gov.in/MyMsme/MSEFC/FAQ.aspx")],
  },
};

export const topicFaqs: { question: Bilingual; answer: Bilingual }[] = [
  {
    question: { en: "Is this guide legal advice for my situation?", kn: "ಈ ಮಾರ್ಗದರ್ಶಿ ನನ್ನ ಪರಿಸ್ಥಿತಿಗೆ ಕಾನೂನು ಸಲಹೆಯೇ?" },
    answer: { en: "No. It is general legal-awareness information. A qualified lawyer or Legal Services Authority can consider the facts of your situation.", kn: "ಇಲ್ಲ. ಇದು ಸಾಮಾನ್ಯ ಕಾನೂನು ಜಾಗೃತಿ ಮಾಹಿತಿ. ಅರ್ಹ ವಕೀಲರು ಅಥವಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವು ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿಯ ಸಂಗತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಬಹುದು." },
  },
  {
    question: { en: "Where can I confirm the law and current process?", kn: "ಕಾನೂನು ಮತ್ತು ಪ್ರಸ್ತುತ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಎಲ್ಲಿ ಖಚಿತಪಡಿಸಬಹುದು?" },
    answer: { en: "Start with the official links listed in this guide. For local processes, check with the relevant state or district authority.", kn: "ಈ ಮಾರ್ಗದರ್ಶಿಯಲ್ಲಿರುವ ಅಧಿಕೃತ ಲಿಂಕ್‌ಗಳಿಂದ ಆರಂಭಿಸಿ. ಸ್ಥಳೀಯ ಪ್ರಕ್ರಿಯೆಗಳಿಗೆ ಸಂಬಂಧಿತ ರಾಜ್ಯ ಅಥವಾ ಜಿಲ್ಲಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಸಂಪರ್ಕಿಸಿ." },
  },
  {
    question: { en: "What if I need help understanding my options?", kn: "ನನ್ನ ಆಯ್ಕೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಬೇಕಾದರೆ ಏನು ಮಾಡಲಿ?" },
    answer: { en: "Contact your District Legal Services Authority or a qualified lawyer. Call 112 if there is immediate danger.", kn: "ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ ಅಥವಾ ಅರ್ಹ ವಕೀಲರನ್ನು ಸಂಪರ್ಕಿಸಿ. ತಕ್ಷಣದ ಅಪಾಯವಿದ್ದರೆ 112 ಗೆ ಕರೆ ಮಾಡಿ." },
  },
];