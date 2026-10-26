import type { Bilingual } from "@/lib/i18n";

/*
 * All portal content. Every user-facing string exists in English and
 * Kannada. Only verifiable official helplines and portals are listed.
 */

export interface Topic {
  id: string;
  icon:
    | "smartphone"
    | "shoppingBag"
    | "heartHandshake"
    | "graduationCap"
    | "briefcase"
    | "home"
    | "shield"
    | "car"
    | "users"
    | "landmark"
    | "scale";
  categoryId: "money-online" | "people-family" | "work-study" | "justice";
  title: Bilingual;
  summary: Bilingual;
  what: Bilingual;
  rights: Bilingual[];
  steps: Bilingual[];
  help: Bilingual;
}

export const categories: { id: string; label: Bilingual }[] = [
  { id: "all", label: { en: "All topics", kn: "ಎಲ್ಲಾ ವಿಷಯಗಳು" } },
  { id: "money-online", label: { en: "Money & Online", kn: "ಹಣ ಮತ್ತು ಆನ್‌ಲೈನ್" } },
  { id: "people-family", label: { en: "People & Family", kn: "ಜನರು ಮತ್ತು ಕುಟುಂಬ" } },
  { id: "work-study", label: { en: "Work & Study", kn: "ಕೆಲಸ ಮತ್ತು ಅಧ್ಯಯನ" } },
  { id: "justice", label: { en: "Police & Justice", kn: "ಪೊಲೀಸ್ ಮತ್ತು ನ್ಯಾಯ" } },
];

export const topics: Topic[] = [
  {
    id: "cyber",
    icon: "smartphone",
    categoryId: "money-online",
    title: { en: "Cybercrime & Online Fraud", kn: "ಸೈಬರ್ ಅಪರಾಧ ಮತ್ತು ಆನ್‌ಲೈನ್ ವಂಚನೆ" },
    summary: {
      en: "OTP fraud, fake payment requests, online shopping and job fraud — and the first hour rule.",
      kn: "OTP ವಂಚನೆ, ನಕಲಿ ಪಾವತಿ ವಿನಂತಿಗಳು, ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್ ಮತ್ತು ಉದ್ಯೋಗ ವಂಚನೆ — ಮತ್ತು ಮೊದಲ ಗಂಟೆಯ ನಿಯಮ.",
    },
    what: {
      en: "Cybercrime is fraud or crime carried out through phones, computers or the internet — fake payment requests, OTP fraud, fake job or lottery messages, online shopping fraud and hacking of accounts.",
      kn: "ಸೈಬರ್ ಅಪರಾಧ ಎಂದರೆ ಫೋನ್, ಕಂಪ್ಯೂಟರ್ ಅಥವಾ ಇಂಟರ್ನೆಟ್ ಮೂಲಕ ನಡೆಯುವ ವಂಚನೆ — ನಕಲಿ ಪಾವತಿ ವಿನಂತಿಗಳು, OTP ವಂಚನೆ, ನಕಲಿ ಉದ್ಯೋಗ ಅಥವಾ ಲಾಟರಿ ಸಂದೇಶಗಳು, ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್ ವಂಚನೆ ಮತ್ತು ಖಾತೆ ಹ್ಯಾಕಿಂಗ್.",
    },
    rights: [
      {
        en: "No bank, wallet company or government officer will ever ask you for your OTP, PIN or password. Sharing them is never required.",
        kn: "ಯಾವುದೇ ಬ್ಯಾಂಕ್, ವ್ಯಾಲೆಟ್ ಕಂಪನಿ ಅಥವಾ ಸರ್ಕಾರಿ ಅಧಿಕಾರಿ ನಿಮ್ಮ OTP, PIN ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಕೇಳುವುದಿಲ್ಲ. ಅವುಗಳನ್ನು ಯಾರಿಗೂ ಹಂಚಬೇಡಿ.",
      },
      {
        en: "You have the right to report online fraud free of cost on the national portal or helpline.",
        kn: "ರಾಷ್ಟ್ರೀಯ ಪೋರ್ಟಲ್ ಅಥವಾ ಸಹಾಯವಾಣಿಯಲ್ಲಿ ಆನ್‌ಲೈನ್ ವಂಚನೆಯನ್ನು ಉಚಿತವಾಗಿ ದೂರು ಮಾಡುವ ಹಕ್ಕು ನಿಮಗಿದೆ.",
      },
      {
        en: "Money lost to online fraud is often recoverable if reported quickly — the first hour is critical.",
        kn: "ಬೇಗ ದೂರು ಮಾಡಿದರೆ ಕಳೆದ ಹಣವನ್ನು ಮರಳಿ ಪಡೆಯುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು — ಮೊದಲ ಒಂದು ಗಂಟೆ ಬಹಳ ಮುಖ್ಯ.",
      },
    ],
    steps: [
      {
        en: "Call 1930 immediately, or report at cybercrime.gov.in. Do this before anything else.",
        kn: "ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ನಲ್ಲಿ ದೂರು ದಾಖಲಿಸಿ. ಬೇರೆ ಏನನ್ನೂ ಮಾಡುವ ಮೊದಲು ಇದನ್ನು ಮಾಡಿ.",
      },
      {
        en: "Inform your bank or UPI app, and ask them to freeze the transaction.",
        kn: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಅಥವಾ UPI ಆ್ಯಪ್‌ಗೆ ತಿಳಿಸಿ, ವಹಿವಾಟನ್ನು ಸ್ಥಗಿತಗೊಳಿಸಲು ಕೇಳಿ.",
      },
      {
        en: "Save proof: screenshots, SMS, transaction ID, and the fraudster's number or UPI ID.",
        kn: "ಪುರಾವೆ ಉಳಿಸಿಕೊಳ್ಳಿ: ಸ್ಕ್ರೀನ್‌ಶಾಟ್, ಸಂದೇಶಗಳು, ವಹಿವಾಟಿನ ಸಂಖ್ಯೆ, ಮತ್ತು ವಂಚಕರ ದೂರವಾಣಿ ಸಂಖ್ಯೆ ಅಥವಾ UPI ID.",
      },
      {
        en: "If the amount is large or the fraud continues, file a complaint at the nearest cybercrime police station.",
        kn: "ಹಣ ಹೆಚ್ಚಿದ್ದರೆ ಅಥವಾ ವಂಚನೆ ಮುಂದುವರಿದರೆ, ಹತ್ತಿರದ ಸೈಬರ್ ಪೊಲೀಸ್ ಠಾಣೆಯಲ್ಲಿ ದೂರು ನೀಡಿ.",
      },
    ],
    help: {
      en: "National Cyber Crime Reporting Portal (cybercrime.gov.in) and helpline 1930. A complaint can be filed from anywhere in India — you do not need to go to the city where the fraud happened.",
      kn: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಪೋರ್ಟಲ್ (cybercrime.gov.in) ಮತ್ತು ಸಹಾಯವಾಣಿ 1930. ಭಾರತದ ಎಲ್ಲಿಂದಲೇ ದೂರು ನೀಡಬಹುದು — ವಂಚನೆ ನಡೆದ ಊರಿಗೆ ಹೋಗಬೇಕಿಲ್ಲ.",
    },
  },
  {
    id: "consumer",
    icon: "shoppingBag",
    categoryId: "money-online",
    title: { en: "Consumer Rights", kn: "ಗ್ರಾಹಕರ ಹಕ್ಕುಗಳು" },
    summary: {
      en: "Defective products, poor service, overcharging — how to complain and get redress.",
      kn: "ಕೆಟ್ಟ ಸಾಮಗ್ರಿ, ಅಸಮರ್ಪಕ ಸೇವೆ, ಅತಿ ದರ — ದೂರು ನೀಡುವುದು ಹೇಗೆ, ಪರಿಹಾರ ಹೇಗೆ.",
    },
    what: {
      en: "When you buy goods or services — in a shop, online, or from a service provider — you are a consumer. The Consumer Protection Act gives you rights against defective products, poor service, overcharging and misleading advertisements.",
      kn: "ಅಂಗಡಿಯಲ್ಲಿ, ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅಥವಾ ಸೇವೆ ಒದಗಿಸುವವರಿಂದ ವಸ್ತು ಅಥವಾ ಸೇವೆ ಖರೀದಿಸಿದಾಗ ನೀವು ಗ್ರಾಹಕ. ಕೆಟ್ಟ ಸಾಮಗ್ರಿ, ಅಸಮರ್ಪಕ ಸೇವೆ, ಅತಿ ದರದ ವಸೂಲಿ ಮತ್ತು ಭ್ರಮೆಗೊಳಿಸುವ ಜಾಹೀರಾತುಗಳ ವಿರುದ್ಧ ಗ್ರಾಹಕ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆ ನಿಮಗೆ ಹಕ್ಕುಗಳನ್ನು ನೀಡುತ್ತದೆ.",
    },
    rights: [
      {
        en: "You have the right to information about the quality, quantity and price of what you buy.",
        kn: "ನೀವು ಖರೀದಿಸುವ ವಸ್ತುವಿನ ಗುಣಮಟ್ಟ, ಪ್ರಮಾಣ ಮತ್ತು ಬೆಲೆಯ ಮಾಹಿತಿ ಪಡೆಯುವ ಹಕ್ಕು ನಿಮಗಿದೆ.",
      },
      {
        en: "You can seek a replacement, repair, refund or compensation for defective goods or poor service.",
        kn: "ಕೆಟ್ಟ ಸಾಮಗ್ರಿ ಅಥವಾ ಅಸಮರ್ಪಕ ಸೇವೆಗೆ ಬದಲಿ, ದುರಸ್ತಿ, ಹಣ ಮರಳಿ ಅಥವಾ ಪರಿಹಾರ ಕೇಳಬಹುದು.",
      },
      {
        en: "You can complain to the Consumer Commission without hiring a lawyer, and file the complaint online.",
        kn: "ವಕೀಲರಿಲ್ಲದೆ ಗ್ರಾಹಕ ಆಯೋಗಕ್ಕೆ ದೂರು ಕೊಡಬಹುದು ಮತ್ತು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸಲ್ಲಿಸಬಹುದು.",
      },
    ],
    steps: [
      {
        en: "First complain to the seller or service provider in writing (email or letter) and keep a copy.",
        kn: "ಮೊದಲು ಅಂಗಡಿ ಅಥವಾ ಸೇವೆ ಒದಗಿಸುವವರಿಗೆ ಬರಹದ ಮೂಲಕ (ಇಮೇಲ್ ಅಥವಾ ಪತ್ರ) ದೂರು ನೀಡಿ, ಪ್ರತಿ ಇಟ್ಟುಕೊಳ್ಳಿ.",
      },
      {
        en: "Keep your bill, warranty card, and photographs of the problem.",
        kn: "ಬಿಲ್, ಖಾತರಿ ಕಾರ್ಡ್ ಮತ್ತು ಸಮಸ್ಯೆಯ ಫೋಟೋಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ.",
      },
      {
        en: "If unresolved, call the National Consumer Helpline 1915 or file on edaakhil.nic.in before the consumer commission for your area.",
        kn: "ಪರಿಹಾರ ಸಿಗದಿದ್ದರೆ, ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ 1915 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ edaakhil.nic.in ನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರದೇಶದ ಗ್ರಾಹಕ ಆಯೋಗದ ಮುಂದೆ ದೂರು ಸಲ್ಲಿಸಿ.",
      },
    ],
    help: {
      en: "National Consumer Helpline 1915 (consumerhelpline.gov.in) and the District Consumer Disputes Redressal Commission in your district.",
      kn: "ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ 1915 (consumerhelpline.gov.in) ಮತ್ತು ನಿಮ್ಮ ಜಿಲ್ಲೆಯ ಜಿಲ್ಲಾ ಗ್ರಾಹಕ ವಿವಾದ ಪರಿಹಾರ ಆಯೋಗ.",
    },
  },
  {
    id: "women",
    icon: "heartHandshake",
    categoryId: "people-family",
    title: { en: "Women's Rights & Safety", kn: "ಮಹಿಳೆಯರ ಹಕ್ಕುಗಳು ಮತ್ತು ಸುರಕ್ಷತೆ" },
    summary: {
      en: "Protection against harassment and violence, at home, in public and at the workplace.",
      kn: "ಮನೆ, ಸಾರ್ವಜನಿಕ ಸ್ಥಳ ಮತ್ತು ಕಾರ್ಯಸ್ಥಳದಲ್ಲಿ ಕಿರುಕುಳ ಮತ್ತು ಹಿಂಸೆಯ ವಿರುದ್ಧ ರಕ್ಷಣೆ.",
    },
    what: {
      en: "The law protects women against harassment, violence and discrimination at home, in public and at the workplace. Specific laws cover domestic violence, sexual harassment at work, and dowry harassment.",
      kn: "ಮನೆಯಲ್ಲಿ, ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳಲ್ಲಿ ಮತ್ತು ಕಾರ್ಯಸ್ಥಳದಲ್ಲಿ ಕಿರುಕುಳ, ಹಿಂಸೆ ಮತ್ತು ತಾರತಮ್ಯದ ವಿರುದ್ಧ ಕಾನೂನು ಮಹಿಳೆಯರನ್ನು ರಕ್ಷಿಸುತ್ತದೆ. ಗೃಹ ಹಿಂಸೆ, ಕಾರ್ಯಸ್ಥಳದಲ್ಲಿ ಲೈಂಗಿಕ ಕಿರುಕುಳ ಮತ್ತು ವರದಕ್ಷಿಣೆ ಕಿರುಕುಳಕ್ಕೆ ಪ್ರತ್ಯೇಕ ಕಾನೂನುಗಳಿವೆ.",
    },
    rights: [
      {
        en: "Every woman facing harassment or violence is entitled to free legal aid under the Legal Services Authorities Act.",
        kn: "ಕಿರುಕುಳ ಅಥವಾ ಹಿಂಸೆ ಎದುರಿಸುತ್ತಿರುವ ಪ್ರತಿಯೊಬ್ಬ ಮಹಿಳೆಗೆ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳ ಅಧಿನಿಯಮದ ಅಡಿಯಲ್ಲಿ ಉಚಿತ ಕಾನೂನು ಸಹಾಯದ ಹಕ್ಕಿದೆ.",
      },
      {
        en: "Except in special circumstances with written permission, a woman cannot be arrested after sunset and before sunrise.",
        kn: "ಬರಹದ ವಿಶೇಷ ಅನುಮತಿ ಇರುವ ವಿಶೇಷ ಸಂದರ್ಭಗಳನ್ನು ಹೊರತುಪಡಿಸಿ, ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಮತ್ತು ಸೂರ್ಯೋದಯದ ಮೊದಲು ಮಹಿಳೆಯನ್ನು ಬಂಧಿಸಲಾಗುವುದಿಲ್ಲ.",
      },
      {
        en: "Under the Domestic Violence Act, a woman can seek protection, residence and maintenance.",
        kn: "ಗೃಹ ಹಿಂಸೆ ಕಾಯ್ದೆಯ ಅಡಿಯಲ್ಲಿ ಮಹಿಳೆ ರಕ್ಷಣೆ, ವಸತಿ ಮತ್ತು ನಿರ್ವಹಣಾ ವೇತನ ಕೇಳಬಹುದು.",
      },
      {
        en: "Workplaces with 10 or more employees must have an Internal Committee for sexual harassment complaints.",
        kn: "10 ಅಥವಾ ಹೆಚ್ಚು ಉದ್ಯೋಗಿಗಳಿರುವ ಕಾರ್ಯಸ್ಥಳಗಳಲ್ಲಿ ಲೈಂಗಿಕ ಕಿರುಕುಳ ದೂರುಗಳಿಗೆ ಆಂತರಿಕ ಸಮಿತಿ ಇರಲೇಬೇಕು.",
      },
    ],
    steps: [
      {
        en: "If you are in danger, call 112 or the Women Helpline 181.",
        kn: "ಅಪಾಯದಲ್ಲಿದ್ದರೆ 112 ಅಥವಾ ಮಹಿಳಾ ಸಹಾಯವಾಣಿ 181 ಗೆ ಕರೆ ಮಾಡಿ.",
      },
      {
        en: "You can file a complaint at any police station; where required, a woman police officer records the statement.",
        kn: "ಯಾವುದೇ ಪೊಲೀಸ್ ಠಾಣೆಯಲ್ಲಿ ದೂರು ನೀಡಬಹುದು; ಅಗತ್ಯವಿರುವಲ್ಲಿ ಮಹಿಳಾ ಪೊಲೀಸ್ ಅಧಿಕಾರಿಯ ಮುಂದೆ ಹೇಳಿಕೆ ದಾಖಲಾಗುತ್ತದೆ.",
      },
      {
        en: "For workplace harassment, approach the Internal Committee, or the Local Committee at the district level.",
        kn: "ಕಾರ್ಯಸ್ಥಳದ ಕಿರುಕುಳಕ್ಕೆ ಆಂತರಿಕ ಸಮಿತಿ ಅಥವಾ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಸ್ಥಳೀಯ ಸಮಿತಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      },
      {
        en: "For shelter, counselling and a lawyer, contact the nearest One Stop Centre or District Legal Services Authority.",
        kn: "ವಸತಿ, ಆಲೋಚನಾ ಸಲಹೆ ಮತ್ತು ವಕೀಲರಿಗಾಗಿ ಹತ್ತಿರದ ಒನ್ ಸ್ಟಾಪ್ ಸೆಂಟರ್ ಅಥವಾ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      },
    ],
    help: {
      en: "Women Helpline 181, Emergency 112, One Stop Centres, and the District Legal Services Authority for free legal aid.",
      kn: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ 181, ತುರ್ತು 112, ಒನ್ ಸ್ಟಾಪ್ ಸೆಂಟರ್‌ಗಳು, ಮತ್ತು ಉಚಿತ ಕಾನೂನು ಸಹಾಯಕ್ಕೆ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ.",
    },
  },
  {
    id: "students",
    icon: "graduationCap",
    categoryId: "work-study",
    title: { en: "Student Rights", kn: "ವಿದ್ಯಾರ್ಥಿಗಳ ಹಕ್ಕುಗಳು" },
    summary: {
      en: "Ragging, unfair fees, discrimination and the right to education.",
      kn: "ರ್ಯಾಗಿಂಗ್, ಅನ್ಯಾಯದ ಶುಲ್ಕ, ತಾರತಮ್ಯ ಮತ್ತು ಶಿಕ್ಷಣದ ಹಕ್ಕು.",
    },
    what: {
      en: "Students have rights in education — against ragging, unfair fees, discrimination and denial of admission. The UGC has anti-ragging regulations, and school-level complaints go to the education department.",
      kn: "ವಿದ್ಯಾರ್ಥಿಗಳು ಶಿಕ್ಷಣದಲ್ಲಿ ಹಕ್ಕುಗಳನ್ನು ಹೊಂದಿದ್ದಾರೆ — ರ್ಯಾಗಿಂಗ್, ಅನ್ಯಾಯದ ಶುಲ್ಕ, ತಾರತಮ್ಯ ಮತ್ತು ಪ್ರವೇಶ ನಿರಾಕರಣೆಯ ವಿರುದ್ಧ. UGC ಯ ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ನಿಯಮಗಳಿವೆ, ಮತ್ತು ಶಾಲಾ ಮಟ್ಟದ ದೂರುಗಳನ್ನು ಶಿಕ್ಷಣ ಇಲಾಖೆ ನೋಡಿಕೊಳ್ಳುತ್ತದೆ.",
    },
    rights: [
      {
        en: "Ragging is banned in every college. Complaints can be made anonymously, and institutions must act on them.",
        kn: "ಎಲ್ಲಾ ಕಾಲೇಜುಗಳಲ್ಲಿ ರ್ಯಾಗಿಂಗ್ ನಿಷೇಧ. ಅನಾಮಧೇಯವಾಗಿ ದೂರು ನೀಡಬಹುದು, ಮತ್ತು ಸಂಸ್ಥೆ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳಬೇಕು.",
      },
      {
        en: "Every child has a fundamental right to free and compulsory education from 6 to 14 years of age.",
        kn: "6 ರಿಂದ 14 ವರ್ಷ ವಯಸ್ಸಿನ ಪ್ರತಿಯೊಂದು ಮಗುವಿಗೆ ಉಚಿತ ಮತ್ತು ಕಡ್ಡಾಯ ಶಿಕ್ಷಣದ ಮೂಲ ಹಕ್ಕಿದೆ.",
      },
      {
        en: "Students cannot be discriminated against on grounds of caste, religion, gender or disability.",
        kn: "ಜಾತಿ, ಧರ್ಮ, ಲಿಂಗ ಅಥವಾ ಅಂಗವೈಕಲ್ಯದ ಆಧಾರದ ಮೇಲೆ ವಿದ್ಯಾರ್ಥಿಗಳ ಮೇಲೆ ತಾರತಮ್ಯ ಮಾಡಲಾಗುವುದಿಲ್ಲ.",
      },
    ],
    steps: [
      {
        en: "For ragging, complain to the college anti-ragging committee, the UGC anti-ragging helpline, or online at antiragging.in.",
        kn: "ರ್ಯಾಗಿಂಗ್‌ಗೆ ಕಾಲೇಜಿನ ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ಸಮಿತಿ, UGC ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ಸಹಾಯವಾಣಿ ಅಥವಾ antiragging.in ನಲ್ಲಿ ದೂರು ನೀಡಿ.",
      },
      {
        en: "For fee or admission issues, first write to the principal or registrar and keep a copy of the letter.",
        kn: "ಶುಲ್ಕ ಅಥವಾ ಪ್ರವೇಶ ಸಮಸ್ಯೆಗೆ ಮೊದಲು ಪ್ರಾಂಶುಪಾಲರು ಅಥವಾ ನೋಂದಣಿ ಅಧಿಕಾರಿಗೆ ಬರೆದು ಪತ್ರದ ಪ್ರತಿ ಇಟ್ಟುಕೊಳ್ಳಿ.",
      },
      {
        en: "For discrimination in school, approach the school management or the education department; for children, Childline 1098 also helps.",
        kn: "ಶಾಲೆಯಲ್ಲಿ ತಾರತಮ್ಯಕ್ಕೆ ಶಾಲಾ ಆಡಳಿತ ಅಥವಾ ಶಿಕ್ಷಣ ಇಲಾಖೆ ಸಂಪರ್ಕಿಸಿ; ಮಕ್ಕಳಿಗೆ ಚೈಲ್ಡ್‌ಲೈನ್ 1098 ಕೂಡ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      },
    ],
    help: {
      en: "The UGC anti-ragging helpline, your state's education department, and Childline 1098 for children.",
      kn: "UGC ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ಸಹಾಯವಾಣಿ, ನಿಮ್ಮ ರಾಜ್ಯದ ಶಿಕ್ಷಣ ಇಲಾಖೆ, ಮತ್ತು ಮಕ್ಕಳಿಗೆ ಚೈಲ್ಡ್‌ಲೈನ್ 1098.",
    },
  },
  {
    id: "workplace",
    icon: "briefcase",
    categoryId: "work-study",
    title: { en: "Workplace Rights", kn: "ಕಾರ್ಯಸ್ಥಳದ ಹಕ್ಕುಗಳು" },
    summary: {
      en: "Wages, working hours, safety, leave and protection from unfair dismissal.",
      kn: "ವೇತನ, ಕೆಲಸದ ಗಂಟೆಗಳು, ಸುರಕ್ಷತೆ, ರಜೆ ಮತ್ತು ಅನ್ಯಾಯದ ಉದ್ಯೋಗ ತೆಗೆದುಹಾಕುವಿಕೆಯ ವಿರುದ್ಧ ರಕ್ಷಣೆ.",
    },
    what: {
      en: "Workplace rights cover wages, working hours, safety, leave and protection from unfair dismissal. Women employees are additionally protected against sexual harassment at work.",
      kn: "ಕಾರ್ಯಸ್ಥಳದ ಹಕ್ಕುಗಳು ವೇತನ, ಕೆಲಸದ ಗಂಟೆಗಳು, ಸುರಕ್ಷತೆ, ರಜೆ ಮತ್ತು ಅನ್ಯಾಯವಾಗಿ ಕೆಲಸದಿಂದ ತೆಗೆದುಹಾಕುವಿಕೆಯ ವಿರುದ್ಧ ರಕ್ಷಣೆಯನ್ನು ಒಳಗೊಳ್ಳುತ್ತವೆ. ಮಹಿಳಾ ಉದ್ಯೋಗಿಗಳಿಗೆ ಲೈಂಗಿಕ ಕಿರುಕುಳದ ವಿರುದ್ಧ ಹೆಚ್ಚುವರಿ ರಕ್ಷಣೆ ಇದೆ.",
    },
    rights: [
      {
        en: "You are entitled to receive your wages on time, along with a payslip you can check.",
        kn: "ನಿಮಗೆ ವೇತನ ಸಮಯಕ್ಕೆ ಸಿಗಬೇಕು, ಮತ್ತು ನೋಡಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದಾದ ವೇತನ ಪಟ್ಟಿ ಸಿಗಬೇಕು.",
      },
      {
        en: "Workplaces with 10 or more employees must have an Internal Committee against sexual harassment.",
        kn: "10 ಅಥವಾ ಹೆಚ್ಚು ಉದ್ಯೋಗಿಗಳಿರುವ ಕಾರ್ಯಸ್ಥಳದಲ್ಲಿ ಲೈಂಗಿಕ ಕಿರುಕುಳ ವಿರೋಧಿ ಆಂತರಿಕ ಸಮಿತಿ ಇರಲೇಬೇಕು.",
      },
      {
        en: "You have the right to safe working conditions, weekly rest days and earned leave as per the applicable laws.",
        kn: "ಅನ್ವಯವಾಗುವ ಕಾನೂನುಗಳ ಪ್ರಕಾರ ಸುರಕ್ಷಿತ ಕೆಲಸದ ಪರಿಸರ, ವಾರದ ವಿಶ್ರಾಂತಿ ದಿನಗಳು ಮತ್ತು ಗಳಿಸಿದ ರಜೆಯ ಹಕ್ಕು ನಿಮಗಿದೆ.",
      },
    ],
    steps: [
      {
        en: "Raise the issue with your HR department or manager in writing, and keep copies of what you send.",
        kn: "ಸಮಸ್ಯೆಯನ್ನು ಬರಹದ ಮೂಲಕ HR ಅಥವಾ ವ್ಯವಸ್ಥಾಪಕರಿಗೆ ತಿಳಿಸಿ, ಕಳುಹಿಸಿದ್ದರ ಪ್ರತಿಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ.",
      },
      {
        en: "For unpaid wages or unfair dismissal, approach the Labour Commissioner's office in your area.",
        kn: "ವೇತನ ನೀಡದಿದ್ದರೆ ಅಥವಾ ಅನ್ಯಾಯವಾಗಿ ಕೆಲಸದಿಂದ ತೆಗೆದಿದ್ದರೆ, ನಿಮ್ಮ ಪ್ರದೇಶದ ಲೇಬರ್ ಕಮಿಷನರ್ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      },
      {
        en: "For sexual harassment, file a complaint with the Internal Committee; if there is none, with the Local Committee at the district level.",
        kn: "ಲೈಂಗಿಕ ಕಿರುಕುಳಕ್ಕೆ ಆಂತರಿಕ ಸಮಿತಿಯಲ್ಲಿ ದೂರು ನೀಡಿ; ಸಮಿತಿ ಇಲ್ಲದಿದ್ದರೆ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಸ್ಥಳೀಯ ಸಮಿತಿಗೆ ನೀಡಿ.",
      },
    ],
    help: {
      en: "The Labour Commissioner's office, the Internal Committee at your workplace, and the District Legal Services Authority for free legal advice.",
      kn: "ಲೇಬರ್ ಕಮಿಷನರ್ ಕಚೇರಿ, ನಿಮ್ಮ ಕಾರ್ಯಸ್ಥಳದ ಆಂತರಿಕ ಸಮಿತಿ, ಮತ್ತು ಉಚಿತ ಕಾನೂನು ಸಲಹೆಗೆ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ.",
    },
  },
  {
    id: "property",
    icon: "home",
    categoryId: "money-online",
    title: { en: "Property & Rental Issues", kn: "ಆಸ್ತಿ ಮತ್ತು ಬಾಡಿಗೆ ವಿಷಯಗಳು" },
    summary: {
      en: "Tenancy, eviction, deposits and family property disputes — what protects you.",
      kn: "ಬಾಡಿಗೆ, ಖಾಲಿ ಮಾಡಿಸುವಿಕೆ, ಠೇವಣಿ ಮತ್ತು ಕುಟುಂಬದ ಆಸ್ತಿ ವಿವಾದ — ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸುವುದು ಏನು.",
    },
    what: {
      en: "Property and rental issues include disputes over ownership, tenancy, eviction and deposits. Tenants and landlords both have legal duties and protections under rent laws and registration rules.",
      kn: "ಆಸ್ತಿ ಮತ್ತು ಬಾಡಿಗೆ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಒಡೆತನ, ಬಾಡಿಗೆದಾರಿಕೆ, ಖಾಲಿ ಮಾಡಿಸುವಿಕೆ ಮತ್ತು ಠೇವಣಿ ವಿವಾದಗಳು ಸೇರಿವೆ. ಬಾಡಿಗೆ ಕಾನೂನುಗಳ ಅಡಿಯಲ್ಲಿ ಬಾಡಿಗೆದಾರ ಮತ್ತು ಒಡೆಯ ಇಬ್ಬರಿಗೂ ಕರ್ತವ್ಯ ಮತ್ತು ರಕ್ಷಣೆ ಇದೆ.",
    },
    rights: [
      {
        en: "A tenant paying rent has the right to a rent receipt and cannot be evicted without due legal process.",
        kn: "ಬಾಡಿಗೆ ಕಟ್ಟುತ್ತಿರುವವರಿಗೆ ಬಾಡಿಗೆ ರಸೀದಿ ಪಡೆಯುವ ಹಕ್ಕಿದೆ, ಮತ್ತು ಕಾನೂನು ಪ್ರಕ್ರಿಯೆ ಇಲ್ಲದೆ ಖಾಲಿ ಮಾಡಿಸಲಾಗುವುದಿಲ್ಲ.",
      },
      {
        en: "A written and registered agreement protects both the tenant and the landlord.",
        kn: "ಬರಹದ ಮತ್ತು ನೋಂದಣಿ ಆದ ಒಪ್ಪಂದ ಇಬ್ಬರಿಗೂ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ.",
      },
      {
        en: "A landlord cannot cut water or electricity to force a tenant out — that is itself an offence.",
        kn: "ಬಾಡಿಗೆದಾರರನ್ನು ಹೊರಹಾಕಲು ನೀರು ಅಥವಾ ವಿದ್ಯುತ್ ಕಡಿತ ಮಾಡುವುದು ಒಡೆಯನಿಗೆ ಅಪರಾಧ — ಅದನ್ನು ಮಾಡಲಾಗದು.",
      },
    ],
    steps: [
      {
        en: "Keep every agreement, receipt and notice in writing — never rely only on verbal promises.",
        kn: "ಎಲ್ಲಾ ಒಪ್ಪಂದ, ರಸೀದಿ ಮತ್ತು ಪತ್ರಗಳನ್ನು ಬರಹದಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳಿ — ಬಾಯಿ ಮಾತಿನ ಮೇಲೆ ಮಾತ್ರ ಅವಲಂಬಿಸಬೇಡಿ.",
      },
      {
        en: "If the landlord threatens you or locks you out, file a complaint at the local police station and with the rent authority or civil court.",
        kn: "ಒಡೆಯ ಬೆದರಿಸಿದರೆ ಅಥವಾ ಬೀಗ ಹಾಕಿದರೆ, ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆ ಮತ್ತು ಬಾಡಿಗೆ ಪ್ರಾಧಿಕಾರ/ಸಿವಿಲ್ ನ್ಯಾಯಾಲಯದಲ್ಲಿ ದೂರು ನೀಡಿ.",
      },
      {
        en: "For family property disputes, try settlement first — mediation through the Legal Services Authority — and go to civil court if needed.",
        kn: "ಕುಟುಂಬದ ಆಸ್ತಿ ವಿವಾದದಲ್ಲಿ ಮೊದಲು ಸಮನ್ವಯ ಪ್ರಯತ್ನಿಸಿ — ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರದ ಮಧ್ಯಸ್ಥಿಕೆ — ಅಗತ್ಯವಿದ್ದರೆ ಸಿವಿಲ್ ನ್ಯಾಯಾಲಯ ಹೋಗಿ.",
      },
    ],
    help: {
      en: "The rent authority or civil court in your area, the local Legal Services Authority (free mediation and advice), and the sub-registrar's office for property documents.",
      kn: "ನಿಮ್ಮ ಪ್ರದೇಶದ ಬಾಡಿಗೆ ಪ್ರಾಧಿಕಾರ ಅಥವಾ ಸಿವಿಲ್ ನ್ಯಾಯಾಲಯ, ಸ್ಥಳೀಯ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ (ಉಚಿತ ಮಧ್ಯಸ್ಥಿಕೆ ಮತ್ತು ಸಲಹೆ), ಮತ್ತು ಆಸ್ತಿ ದಾಖಲೆಗಳಿಗೆ ಸಬ್-ರಿಜಿಸ್ಟ್ರಾರ್ ಕಚೇರಿ.",
    },
  },
  {
    id: "police",
    icon: "shield",
    categoryId: "justice",
    title: { en: "Police-Related Matters", kn: "ಪೊಲೀಸ್ ಸಂಬಂಧಿತ ವಿಷಯಗಳು" },
    summary: {
      en: "FIRs, arrests, refused complaints — what the law says must happen.",
      kn: "ಎಫ್‌ಐಆರ್, ಬಂಧನ, ದೂರು ಸ್ವೀಕರಿಸದಿರುವಿಕೆ — ಕಾನೂನು ಏನು ಹೇಳುತ್ತದೆ.",
    },
    what: {
      en: "When dealing with the police, both citizens and police have duties. The law lays down how complaints, FIRs, arrests and searches must be handled.",
      kn: "ಪೊಲೀಸರೊಂದಿಗೆ ವ್ಯವಹರಿಸುವಾಗ ನಾಗರಿಕರಿಗೂ ಪೊಲೀಸರಿಗೂ ಕರ್ತವ್ಯಗಳಿವೆ. ದೂರು, ಎಫ್‌ಐಆರ್, ಬಂಧನ ಮತ್ತು ಶೋಧನೆ ಹೇಗೆ ನಡೆಯಬೇಕು ಎಂದು ಕಾನೂನು ನಿಗದಿ ಮಾಡುತ್ತದೆ.",
    },
    rights: [
      {
        en: "You have the right to lodge an FIR for a serious (cognizable) offence, and the police cannot refuse to record it.",
        kn: "ಗಂಭೀರ ಅಪರಾಧಕ್ಕೆ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸುವ ಹಕ್ಕು ನಿಮಗಿದೆ; ಪೊಲೀಸರು ಅದನ್ನು ದಾಖಲಿಸಲು ನಿರಾಕರಿಸಲಾಗದು.",
      },
      {
        en: "If a police station refuses your FIR, send it in writing to the Superintendent of Police, or file a zero FIR at any police station.",
        kn: "ಠಾಣೆ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸದಿದ್ದರೆ, ಅದನ್ನು ಬರಹದಲ್ಲಿ ಪೊಲೀಸ್ ವರಿಷ್ಠಾಧಿಕಾರಿಗೆ ಕಳುಹಿಸಿ ಅಥವಾ ಯಾವುದೇ ಠಾಣೆಯಲ್ಲಿ ಶೂನ್ಯ ಎಫ್‌ಐಆರ್ ನೀಡಿ.",
      },
      {
        en: "An arrested person must be produced before a magistrate within 24 hours, has the right to a lawyer, and a relative or friend must be informed.",
        kn: "ಬಂಧಿತ ವ್ಯಕ್ತಿಯನ್ನು 24 ಗಂಟೆಗಳಲ್ಲಿ ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ಮುಂದೆ ಹಾಜರುಪಡಿಸಬೇಕು; ವಕೀಲರ ಹಕ್ಕಿದೆ ಮತ್ತು ಸಂಬಂಧಿ ಅಥವಾ ಸ್ನೇಹಿತರಿಗೆ ಮಾಹಿತಿ ನೀಡಬೇಕು.",
      },
      {
        en: "Except in special circumstances with written permission, a woman cannot be arrested after sunset and before sunrise.",
        kn: "ಬರಹದ ವಿಶೇಷ ಅನುಮತಿ ಇರುವ ವಿಶೇಷ ಸಂದರ್ಭಗಳನ್ನು ಹೊರತುಪಡಿಸಿ, ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಮತ್ತು ಸೂರ್ಯೋದಯದ ಮೊದಲು ಮಹಿಳೆಯನ್ನು ಬಂಧಿಸಲಾಗುವುದಿಲ್ಲ.",
      },
    ],
    steps: [
      {
        en: "When you file a complaint, ask for a copy of the FIR or a receipt of the complaint.",
        kn: "ದೂರು ನೀಡುವಾಗ ಎಫ್‌ಐಆರ್ ಪ್ರತಿ ಅಥವಾ ದೂರಿನ ರಸೀದಿ ಕೇಳಿ.",
      },
      {
        en: "If the police refuse to act, send your complaint in writing to the Superintendent of Police or the District Legal Services Authority.",
        kn: "ಪೊಲೀಸರು ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳದಿದ್ದರೆ, ದೂರನ್ನು ಬರಹದಲ್ಲಿ ಪೊಲೀಸ್ ವರಿಷ್ಠಾಧಿಕಾರಿ ಅಥವಾ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಕ್ಕೆ ಕಳುಹಿಸಿ.",
      },
      {
        en: "For harassment by police, complain to senior officers, the State Human Rights Commission, or the police complaints authority.",
        kn: "ಪೊಲೀಸ್ ಕಿರುಕುಳಕ್ಕೆ ಹಿರಿಯ ಅಧಿಕಾರಿಗಳು, ರಾಜ್ಯ ಮಾನವ ಹಕ್ಕುಗಳ ಆಯೋಗ ಅಥವಾ ಪೊಲೀಸ್ ದೂರು ಪ್ರಾಧಿಕಾರಕ್ಕೆ ದೂರು ನೀಡಿ.",
      },
    ],
    help: {
      en: "The police station itself, senior police officers, the State Human Rights Commission, and free legal aid through the District Legal Services Authority.",
      kn: "ಪೊಲೀಸ್ ಠಾಣೆ, ಹಿರಿಯ ಪೊಲೀಸ್ ಅಧಿಕಾರಿಗಳು, ರಾಜ್ಯ ಮಾನವ ಹಕ್ಕುಗಳ ಆಯೋಗ, ಮತ್ತು ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರದ ಮೂಲಕ ಉಚಿತ ಕಾನೂನು ಸಹಾಯ.",
    },
  },
  {
    id: "traffic",
    icon: "car",
    categoryId: "justice",
    title: { en: "Traffic & Vehicle Issues", kn: "ಸಂಚಾರ ಮತ್ತು ವಾಹನ ವಿಷಯಗಳು" },
    summary: {
      en: "Checks, challans and accidents — your rights on the road.",
      kn: "ತಪಾಸಣೆ, ದಂಡ ಮತ್ತು ಅಪಘಾತ — ರಸ್ತೆಯಲ್ಲಿ ನಿಮ್ಮ ಹಕ್ಕುಗಳು.",
    },
    what: {
      en: "Traffic rules apply to drivers, riders and pedestrians. You have rights and duties during checks, accidents and challans.",
      kn: "ಸಂಚಾರ ನಿಯಮಗಳು ಚಾಲಕರು, ಸವಾರರು ಮತ್ತು ಪಾದಚಾರಿಗಳಿಗೆ ಅನ್ವಯವಾಗುತ್ತವೆ. ತಪಾಸಣೆ, ಅಪಘಾತ ಮತ್ತು ದಂಡದ ಸಮಯದಲ್ಲಿ ನಿಮಗೆ ಹಕ್ಕು ಮತ್ತು ಕರ್ತವ್ಯಗಳಿವೆ.",
    },
    rights: [
      {
        en: "You must show your licence, registration and insurance when asked — but you can insist that the officer is in uniform and shows identification.",
        kn: "ಕೇಳಿದಾಗ ಪರವಾನಗಿ, ನೋಂದಣಿ ಮತ್ತು ವಿಮೆ ತೋರಿಸಬೇಕು — ಆದರೆ ಅಧಿಕಾರಿ ಗಣವಸ್ತ್ರದಲ್ಲಿದ್ದಾರೆ ಮತ್ತು ಗುರುತಿನ ಚೀಟಿ ತೋರಿಸುತ್ತಾರೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಬಹುದು.",
      },
      {
        en: "For ordinary violations, a traffic constable cannot normally seize your licence or keys; challans can be paid online.",
        kn: "ಸಾಮಾನ್ಯ ಉಲ್ಲಂಘನೆಗೆ ಸಂಚಾರ ಪೊಲೀಸರು ಸಾಮಾನ್ಯವಾಗಿ ಪರವಾನಗಿ ಅಥವಾ ಚಾವಿ ವಶಪಡಿಸಿಕೊಳ್ಳಲಾಗದು; ದಂಡವನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಪಾವತಿಸಬಹುದು.",
      },
      {
        en: "In an accident you have the right to immediate medical help — hospitals cannot refuse emergency treatment, and a person helping an accident victim is protected.",
        kn: "ಅಪಘಾತದಲ್ಲಿ ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಸಹಾಯ ಪಡೆಯುವ ಹಕ್ಕು ನಿಮಗಿದೆ — ಆಸ್ಪತ್ರೆಗಳು ತುರ್ತು ಚಿಕಿತ್ಸೆ ನಿರಾಕರಿಸಲಾಗದು, ಮತ್ತು ಅಪಘಾತದ ಬಲಿಪಶುವಿಗೆ ಸಹಾಯ ಮಾಡುವ ವ್ಯಕ್ತಿಯನ್ನು ಕಾನೂನು ರಕ್ಷಿಸುತ್ತದೆ.",
      },
    ],
    steps: [
      {
        en: "If you receive a challan you believe is wrong, you can contest it before the concerned authority instead of only paying.",
        kn: "ತಪ್ಪಾಗಿದೆ ಎಂದು ನಿಮಗೆ ಅನಿಸುವ ದಂಡ ಪತ್ರವನ್ನು ಪಾವತಿಸುವುದರ ಬದಲು ಸಂಬಂಧಿಸಿದ ಪ್ರಾಧಿಕಾರದ ಮುಂದೆ ವಿರೋಧಿಸಬಹುದು.",
      },
      {
        en: "In an accident, help the injured, call 112, and note the other vehicle's number, the time and the place.",
        kn: "ಅಪಘಾತದಲ್ಲಿ ಗಾಯಗೊಂಡವರಿಗೆ ಸಹಾಯ ಮಾಡಿ, 112 ಗೆ ಕರೆ ಮಾಡಿ, ಇನ್ನೊಂದು ವಾಹನದ ಸಂಖ್ಯೆ, ಸಮಯ ಮತ್ತು ಸ್ಥಳ ದಾಖಲಿಸಿ.",
      },
      {
        en: "For hit-and-run cases or disputes, file a complaint at the nearest police station.",
        kn: "ಓಡಿಹೋದ ಪ್ರಕರಣ ಅಥವಾ ವಿವಾದಕ್ಕೆ ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆಯಲ್ಲಿ ದೂರು ನೀಡಿ.",
      },
    ],
    help: {
      en: "The local Regional Transport Office (RTO) for vehicle and licence issues, and the traffic police for challans and complaints.",
      kn: "ವಾಹನ ಮತ್ತು ಪರವಾನಗಿ ವಿಷಯಗಳಿಗೆ ಸ್ಥಳೀಯ ಆರ್‌ಟಿಓ ಕಚೇರಿ, ಮತ್ತು ದಂಡ ಮತ್ತು ದೂರುಗಳಿಗೆ ಸಂಚಾರ ಪೊಲೀಸ್.",
    },
  },
  {
    id: "family",
    icon: "users",
    categoryId: "people-family",
    title: { en: "Family-Related Matters", kn: "ಕುಟುಂಬ ಸಂಬಂಧಿತ ವಿಷಯಗಳು" },
    summary: {
      en: "Marriage, maintenance, custody and inheritance — where to turn.",
      kn: "ವಿವಾಹ, ನಿರ್ವಹಣಾ ವೇತನ, ಪಾಲುದಾರಿಕೆ ಮತ್ತು ಆನುವಂಶಿಕ ಆಸ್ತಿ — ಎಲ್ಲಿ ತಿರುಗಬೇಕು.",
    },
    what: {
      en: "Family matters include marriage, divorce, maintenance, child custody and inheritance. Personal laws apply based on religion, and courts try settlement through mediation first.",
      kn: "ಕುಟುಂಬ ವಿಷಯಗಳಲ್ಲಿ ವಿವಾಹ, ವಿಚ್ಛೇದನ, ನಿರ್ವಹಣಾ ವೇತನ, ಮಕ್ಕಳ ಪಾಲುದಾರಿಕೆ ಮತ್ತು ಆನುವಂಶಿಕ ಆಸ್ತಿ ಸೇರಿವೆ. ಧರ್ಮದ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಕಾನೂನು ಅನ್ವಯವಾಗುತ್ತದೆ, ಮತ್ತು ನ್ಯಾಯಾಲಯಗಳು ಮೊದಲು ಮಧ್ಯಸ್ಥಿಕೆ ಮೂಲಕ ಪರಿಹಾರ ಪ್ರಯತ್ನಿಸುತ್ತವೆ.",
    },
    rights: [
      {
        en: "Every married woman who cannot support herself has the right to maintenance from her husband.",
        kn: "ಸ್ವಯಂ ಬದುಕಲಾಗದ ಪ್ರತಿಯೊಂದು ವಿವಾಹಿತ ಮಹಿಳೆಗೆ ಗಂಡನಿಂದ ನಿರ್ವಹಣಾ ವೇತನದ ಹಕ್ಕಿದೆ.",
      },
      {
        en: "In custody matters, the child's welfare is the court's first consideration, and both parents can seek custody.",
        kn: "ಪಾಲುದಾರಿಕೆ ವಿಷಯಗಳಲ್ಲಿ ಮಗುವಿನ ಹಿತ ನ್ಯಾಯಾಲಯದ ಮೊದಲ ಪರಿಗಣನೆ; ಎರಡೂ ಪೋಷಕರು ಪಾಲು ಕೇಳಬಹುದು.",
      },
      {
        en: "Daughters have inheritance rights in family property equal to sons under the law.",
        kn: "ಕಾನೂನಿನ ಪ್ರಕಾರ ಕುಟುಂಬದ ಆಸ್ತಿಯಲ್ಲಿ ಹೆಣ್ಣು ಮಕ್ಕಳಿಗೆ ಪುತ್ರರಷ್ಟೇ ಆನುವಂಶಿಕ ಹಕ್ಕಿದೆ.",
      },
    ],
    steps: [
      {
        en: "For maintenance, apply at the family court, or before the Magistrate under the Domestic Violence Act.",
        kn: "ನಿರ್ವಹಣಾ ವೇತನಕ್ಕೆ ಕುಟುಂಬ ನ್ಯಾಯಾಲಯದಲ್ಲಿ, ಅಥವಾ ಗೃಹ ಹಿಂಸೆ ಕಾಯ್ದೆಯ ಅಡಿಯಲ್ಲಿ ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ಮುಂದೆ ಅರ್ಜಿ ಹಾಕಿ.",
      },
      {
        en: "For divorce and custody, the family court first tries counselling and mediation.",
        kn: "ವಿಚ್ಛೇದನ ಮತ್ತು ಪಾಲುದಾರಿಕೆಗೆ ಕುಟುಂಬ ನ್ಯಾಯಾಲಯ ಮೊದಲು ಸಲಹೆ ಮತ್ತು ಮಧ್ಯಸ್ಥಿಕೆ ಪ್ರಯತ್ನಿಸುತ್ತದೆ.",
      },
      {
        en: "For free advice on family matters, approach the District Legal Services Authority or a family counselling centre.",
        kn: "ಕುಟುಂಬ ವಿಷಯಗಳ ಉಚಿತ ಸಲಹೆಗೆ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ ಅಥವಾ ಕುಟುಂಬ ಸಲಹಾ ಕೇಂದ್ರವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      },
    ],
    help: {
      en: "The family court in your district, the District Legal Services Authority (free legal aid and mediation), and the women & child welfare department.",
      kn: "ನಿಮ್ಮ ಜಿಲ್ಲೆಯ ಕುಟುಂಬ ನ್ಯಾಯಾಲಯ, ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ (ಉಚಿತ ಕಾನೂನು ಸಹಾಯ ಮತ್ತು ಮಧ್ಯಸ್ಥಿಕೆ), ಮತ್ತು ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ.",
    },
  },
  {
    id: "constitutional",
    icon: "landmark",
    categoryId: "justice",
    title: { en: "Basic Citizen & Constitutional Rights", kn: "ಮೂಲ ನಾಗರಿಕ ಮತ್ತು ಸಂವಿಧಾನಾತ್ಮಕ ಹಕ್ಕುಗಳು" },
    summary: {
      en: "Fundamental rights no government can take away — and how to use them.",
      kn: "ಯಾವ ಸರ್ಕಾರವೂ ಕಿತ್ತುಕೊಳ್ಳಲಾಗದ ಮೂಲ ಹಕ್ಕುಗಳು — ಮತ್ತು ಅವನ್ನು ಬಳಸುವುದು ಹೇಗೆ.",
    },
    what: {
      en: "The Constitution of India gives every citizen fundamental rights that no government or person can take away. Knowing these rights protects you in everyday situations.",
      kn: "ಭಾರತದ ಸಂವಿಧಾನ ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನಿಗೆ ಮೂಲ ಹಕ್ಕುಗಳನ್ನು ನೀಡಿದೆ — ಯಾವ ಸರ್ಕಾರ ಅಥವಾ ವ್ಯಕ್ತಿಯೂ ಅವನ್ನು ಕಿತ್ತುಕೊಳ್ಳಲಾಗದು. ಈ ಹಕ್ಕುಗಳನ್ನು ತಿಳಿದಿದ್ದರೆ ದೈನಂದಿನ ಸನ್ನಿವೇಶಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಬಹುದು.",
    },
    rights: [
      {
        en: "Right to equality — no discrimination on grounds of religion, race, caste, sex or place of birth.",
        kn: "ಸಮತೆಯ ಹಕ್ಕು — ಧರ್ಮ, ಜಾತಿ, ಲಿಂಗ ಅಥವಾ ಜನ್ಮಸ್ಥಳದ ಆಧಾರದ ಮೇಲೆ ತಾರತಮ್ಯ ಇಲ್ಲ.",
      },
      {
        en: "Right to freedom — of speech, of movement, and to practise any profession.",
        kn: "ಸ್ವಾತಂತ್ರ್ಯದ ಹಕ್ಕು — ಮಾತು, ಸಂಚಾರ ಮತ್ತು ಯಾವುದೇ ವೃತ್ತಿ ಅನುಸರಿಸುವ ಸ್ವಾತಂತ್ರ್ಯ.",
      },
      {
        en: "Right against exploitation — forced labour and child labour in hazardous jobs are banned.",
        kn: "ಶೋಷಣೆಯ ವಿರುದ್ಧ ಹಕ್ಕು — ಬಲವಂತದ ದುಡಿಮೆ ಮತ್ತು ಅಪಾಯಕಾರಿ ಕೆಲಸಗಳಲ್ಲಿ ಬಾಲಕಾರ್ಮಿಕ ನಿಷೇಧ.",
      },
      {
        en: "Right to constitutional remedies — you can go to the courts directly if your rights are violated.",
        kn: "ಸಂವಿಧಾನಾತ್ಮಕ ಪರಿಹಾರದ ಹಕ್ಕು — ಹಕ್ಕುಗಳ ಉಲ್ಲಂಘನೆಯಾದರೆ ನೇರವಾಗಿ ನ್ಯಾಯಾಲಯವನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.",
      },
      {
        en: "Right to information — you can ask any government department for its records under the RTI Act.",
        kn: "ಮಾಹಿತಿ ಹಕ್ಕು — RTI ಕಾಯ್ದೆಯ ಅಡಿಯಲ್ಲಿ ಯಾವುದೇ ಸರ್ಕಾರಿ ಇಲಾಖೆಯ ದಾಖಲೆಗಳನ್ನು ಕೇಳಬಹುದು.",
      },
    ],
    steps: [
      {
        en: "If a government office delays or refuses your request, apply under the Right to Information Act, 2005 — online at rtionline.gov.in or in writing.",
        kn: "ಸರ್ಕಾರಿ ಕಚೇರಿ ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ವಿಳಂಬ ಮಾಡಿದರೆ ಅಥವಾ ನಿರಾಕರಿಸಿದರೆ, ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ 2005 ರ ಅಡಿಯಲ್ಲಿ ಅರ್ಜಿ ಹಾಕಿ — rtionline.gov.in ನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಅಥವಾ ಬರಹದಲ್ಲಿ.",
      },
      {
        en: "If your fundamental rights are violated, you can file a writ petition in the High Court or the Supreme Court; free legal aid can help you file it.",
        kn: "ಮೂಲ ಹಕ್ಕುಗಳ ಉಲ್ಲಂಘನೆಯಾದರೆ ಹೈಕೋರ್ಟ್ ಅಥವಾ ಸುಪ್ರೀಂ ಕೋರ್ಟ್‌ನಲ್ಲಿ ರಿಟ್ ಅರ್ಜಿ ಹಾಕಬಹುದು; ಅದಕ್ಕೆ ಉಚಿತ ಕಾನೂನು ಸಹಾಯ ಸಿಗುತ್ತದೆ.",
      },
      {
        en: "For grievances, start with the department's own complaint system, then approach the ombudsman where one exists.",
        kn: "ದೂರುಗಳಿಗೆ ಮೊದಲು ಇಲಾಖೆಯದೇ ದೂರು ವ್ಯವಸ್ಥೆಯನ್ನು ಬಳಸಿ, ನಂತರ ಇರುವಲ್ಲಿ ಲೋಕಾಯುಕ್ತರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      },
    ],
    help: {
      en: "The High Court or Supreme Court for fundamental rights, the RTI portal (rtionline.gov.in) for information, and District Legal Services Authorities for free help.",
      kn: "ಮೂಲ ಹಕ್ಕುಗಳಿಗೆ ಹೈಕೋರ್ಟ್/ಸುಪ್ರೀಂ ಕೋರ್ಟ್, ಮಾಹಿತಿಗೆ RTI ಪೋರ್ಟಲ್ (rtionline.gov.in), ಮತ್ತು ಉಚಿತ ಸಹಾಯಕ್ಕೆ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳು.",
    },
  },
  {
    id: "legalaid",
    icon: "scale",
    categoryId: "justice",
    title: { en: "Free Legal Aid", kn: "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ" },
    summary: {
      en: "Free lawyers and legal advice for those who cannot afford them — your right, not charity.",
      kn: "ಖರ್ಚು ವಹಿಸಲಾಗದವರಿಗೆ ಉಚಿತ ವಕೀಲರು ಮತ್ತು ಕಾನೂನು ಸಲಹೆ — ಇದು ದಾನವಲ್ಲ, ನಿಮ್ಮ ಹಕ್ಕು.",
    },
    what: {
      en: "Free legal aid means free legal advice, a lawyer, and court representation for people who cannot afford it, provided through the Legal Services Authorities at the national, state and district level.",
      kn: "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ ಎಂದರೆ ಖರ್ಚು ವಹಿಸಲಾಗದ ಜನರಿಗೆ ಉಚಿತ ಕಾನೂನು ಸಲಹೆ, ವಕೀಲರು ಮತ್ತು ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಪ್ರತಿನಿಧಿಸುವಿಕೆ — ರಾಷ್ಟ್ರ, ರಾಜ್ಯ ಮತ್ತು ಜಿಲ್ಲಾ ಮಟ್ಟದ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳ ಮೂಲಕ.",
    },
    rights: [
      {
        en: "Eligible citizens — including women, children, persons with disabilities, members of scheduled castes and tribes, and people with low income — are entitled to free legal services under the Legal Services Authorities Act.",
        kn: "ಅರ್ಹ ನಾಗರಿಕರು — ಮಹಿಳೆಯರು, ಮಕ್ಕಳು, ಅಂಗವಿಕಲರು, ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪಂಗಡದವರು ಮತ್ತು ಕಡಿಮೆ ಆದಾಯದವರು — ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳ ಅಧಿನಿಯಮದ ಅಡಿಯಲ್ಲಿ ಉಚಿತ ಕಾನೂನು ಸೇವೆ ಪಡೆಯಬಹುದು.",
      },
      {
        en: "Legal aid includes advice, drafting, a lawyer for court cases, and awareness programmes.",
        kn: "ಕಾನೂನು ಸಹಾಯದಲ್ಲಿ ಸಲಹೆ, ದಾಖಲೆ ತಯಾರಿಕೆ, ಪ್ರಕರಣಕ್ಕೆ ವಕೀಲರು ಮತ್ತು ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಸೇರಿವೆ.",
      },
      {
        en: "Legal aid is your right, not charity — you can apply at the District Legal Services Authority in your district.",
        kn: "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ ದಾನವಲ್ಲ, ಅದು ನಿಮ್ಮ ಹಕ್ಕು — ನಿಮ್ಮ ಜಿಲ್ಲೆಯ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರದಲ್ಲಿ ಅರ್ಜಿ ಹಾಕಬಹುದು.",
      },
    ],
    steps: [
      {
        en: "Visit or write to the District Legal Services Authority — usually near the district court.",
        kn: "ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರದ ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಪತ್ರ ಬರೆಯಿರಿ — ಸಾಮಾನ್ಯವಾಗಿ ಜಿಲ್ಲಾ ನ್ಯಾಯಾಲಯದ ಬಳಿ ಇರುತ್ತದೆ.",
      },
      {
        en: "Fill the application form and provide your documents; eligibility is checked under government rules.",
        kn: "ಅರ್ಜಿ ಪತ್ರಕ ತುಂಬಿ ದಾಖಲೆಗಳನ್ನು ನೀಡಿ; ಸರ್ಕಾರಿ ನಿಯಮಗಳ ಪ್ರಕಾರ ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.",
      },
      {
        en: "You can also call the NALSA helpline 15100 for guidance on where to apply.",
        kn: "ಎಲ್ಲಿ ಅರ್ಜಿ ಹಾಕಬೇಕು ಎಂದು ತಿಳಿಯಲು NALSA ಸಹಾಯವಾಣಿ 15100 ಗೆ ಕರೆ ಮಾಡಬಹುದು.",
      },
    ],
    help: {
      en: "NALSA (nalsa.gov.in), your State and District Legal Services Authorities, and helpline 15100. Never pay anyone who promises legal aid — genuine legal services are free for eligible people.",
      kn: "NALSA (nalsa.gov.in), ನಿಮ್ಮ ರಾಜ್ಯ ಮತ್ತು ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳು, ಮತ್ತು ಸಹಾಯವಾಣಿ 15100. ಕಾನೂನು ಸಹಾಯ ಎಂದು ಹೇಳಿ ಹಣ ಕೇಳುವವರಿಗೆ ಪಾವತಿಸಬೇಡಿ — ಅರ್ಹರಿಗೆ ಇದು ಉಚಿತ.",
    },
  },
];

export interface HelpStep {
  title: Bilingual;
  text: Bilingual;
}

export const helpSteps: HelpStep[] = [
  {
    title: { en: "Understand the issue", kn: "ಸಮಸ್ಯೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ" },
    text: {
      en: "Write down in plain words what happened, when, and who was involved. Clear facts make every next step easier.",
      kn: "ಏನಾಯಿತು, ಯಾವಾಗ, ಯಾರು ಒಳಗಿದ್ದರು ಎಂದು ಸರಳ ಪದಗಳಲ್ಲಿ ಬರೆಯಿರಿ. ಸ್ಪಷ್ಟ ಅಂಶಗಳು ಮುಂದಿನ ಎಲ್ಲಾ ಹೆಜ್ಜೆಗಳನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತವೆ.",
    },
  },
  {
    title: { en: "Identify your rights", kn: "ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಗುರುತಿಸಿ" },
    text: {
      en: "Read the relevant guide on this portal to know what the law protects in your situation.",
      kn: "ಈ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಸಂಬಂಧಿಸಿದ ಮಾರ್ಗದರ್ಶಿಯನ್ನು ಓದಿ — ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಕಾನೂನು ಏನನ್ನು ರಕ್ಷಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಯಿರಿ.",
    },
  },
  {
    title: {
      en: "Collect relevant information and documents",
      kn: "ಮಾಹಿತಿ ಮತ್ತು ದಾಖಲೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ",
    },
    text: {
      en: "Gather bills, receipts, messages, photographs, agreements and any written communication. Documents decide most cases.",
      kn: "ಬಿಲ್, ರಸೀದಿ, ಸಂದೇಶಗಳು, ಫೋಟೋ, ಒಪ್ಪಂದ ಮತ್ತು ಬರಹದ ಪತ್ರವ್ಯವಹಾರ ಸಂಗ್ರಹಿಸಿ. ಹೆಚ್ಚಿನ ಪ್ರಕರಣಗಳಲ್ಲಿ ದಾಖಲೆಗಳೇ ನಿರ್ಧಾರಕ.",
    },
  },
  {
    title: { en: "Identify the correct authority", kn: "ಸರಿಯಾದ ಸಂಸ್ಥೆಯನ್ನು ಗುರುತಿಸಿ" },
    text: {
      en: "Each issue has a designated office — police, consumer commission, labour office, family court or cyber cell. Our guides name the right one for each topic.",
      kn: "ಪ್ರತಿ ಸಮಸ್ಯೆಗೆ ಒಂದು ನಿಗದಿತ ಕಚೇರಿ ಇದೆ — ಪೊಲೀಸ್, ಗ್ರಾಹಕ ಆಯೋಗ, ಕಾರ್ಮಿಕ ಕಚೇರಿ, ಕುಟುಂಬ ನ್ಯಾಯಾಲಯ ಅಥವಾ ಸೈಬರ್ ಸೆಲ್. ನಮ್ಮ ಮಾರ್ಗದರ್ಶಿಗಳು ಪ್ರತಿ ವಿಷಯಕ್ಕೆ ಸರಿಯಾದದ್ದನ್ನು ತಿಳಿಸುತ್ತವೆ.",
    },
  },
  {
    title: { en: "Contact the appropriate service", kn: "ಸೂಕ್ತ ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ" },
    text: {
      en: "File your complaint or application in writing, and always keep a receipt or acknowledgment copy.",
      kn: "ನಿಮ್ಮ ದೂರು ಅಥವಾ ಅರ್ಜಿಯನ್ನು ಬರಹದಲ್ಲಿ ಸಲ್ಲಿಸಿ ಮತ್ತು ಯಾವಾಗಲೂ ರಸೀದಿ ಅಥವಾ ಸ್ವೀಕೃತಿ ಪ್ರತಿ ಇಟ್ಟುಕೊಳ್ಳಿ.",
    },
  },
  {
    title: {
      en: "Seek professional or legal aid when required",
      kn: "ಅಗತ್ಯವಿದ್ದರೆ ವೃತ್ತಿಪರ ಅಥವಾ ಕಾನೂನು ಸಹಾಯ ಪಡೆಯಿರಿ",
    },
    text: {
      en: "If the matter is serious or unclear, consult a lawyer. If you cannot afford one, apply for free legal aid through the Legal Services Authority.",
      kn: "ವಿಷಯ ಗಂಭೀರ ಅಥವಾ ಅಸ್ಪಷ್ಟವಿದ್ದರೆ ವಕೀಲರನ್ನು ಸಂಪರ್ಕಿಸಿ. ಖರ್ಚು ವಹಿಸಲಾಗದಿದ್ದರೆ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರದ ಮೂಲಕ ಉಚಿತ ಕಾನೂನು ಸಹಾಯಕ್ಕಾಗಿ ಅರ್ಜಿ ಹಾಕಿ.",
    },
  },
];

export interface Faq {
  q: Bilingual;
  a: Bilingual;
}

export const faqs: Faq[] = [
  {
    q: { en: "What is legal aid?", kn: "ಕಾನೂನು ಸಹಾಯ (ಲೀಗಲ್ ಎಯ್ಡ್) ಎಂದರೇನು?" },
    a: {
      en: "Legal aid means free legal services — advice, a lawyer and court representation — for people who cannot afford them. It is provided through the Legal Services Authorities (NALSA, state and district authorities). Eligible groups include women, children, persons with disabilities, members of scheduled castes and tribes, and people with limited income. Contact your District Legal Services Authority or call 15100.",
      kn: "ಕಾನೂನು ಸಹಾಯ ಎಂದರೆ ಖರ್ಚು ವಹಿಸಲಾಗದ ಜನರಿಗೆ ಉಚಿತ ಕಾನೂನು ಸೇವೆ — ಸಲಹೆ, ವಕೀಲರು ಮತ್ತು ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಪ್ರತಿನಿಧಿಸುವಿಕೆ. ಇದನ್ನು ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳು (NALSA, ರಾಜ್ಯ ಮತ್ತು ಜಿಲ್ಲಾ ಪ್ರಾಧಿಕಾರಗಳು) ಒದಗಿಸುತ್ತವೆ. ಮಹಿಳೆಯರು, ಮಕ್ಕಳು, ಅಂಗವಿಕಲರು, ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪಂಗಡದವರು ಮತ್ತು ಕಡಿಮೆ ಆದಾಯದವರು ಅರ್ಹರಾಗಿರಬಹುದು. ನಿಮ್ಮ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರವನ್ನು ಸಂಪರ್ಕಿಸಿ ಅಥವಾ 15100 ಗೆ ಕರೆ ಮಾಡಿ.",
    },
  },
  {
    q: {
      en: "Is this website providing legal advice?",
      kn: "ಈ ಜಾಲತಾಣ ಕಾನೂನು ಸಲಹೆ ನೀಡುತ್ತಿದೆಯೇ?",
    },
    a: {
      en: "No. NyayaDisha provides general legal awareness information in simple language to help you understand your rights and find the right authority. It is not legal advice and does not replace a lawyer. For your specific case, consult a lawyer, a Legal Services Authority, or the concerned department.",
      kn: "ಇಲ್ಲ. ನ್ಯಾಯದಿಶಾ ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಸರಿಯಾದ ಸಂಸ್ಥೆಯನ್ನು ಹುಡುಕಲು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಸಾಮಾನ್ಯ ಕಾನೂನು ಜಾಗೃತಿ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ. ಇದು ಕಾನೂನು ಸಲಹೆಯಲ್ಲ ಮತ್ತು ವಕೀಲರ ಬದಲಿ ಅಲ್ಲ. ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಪ್ರಕರಣಕ್ಕೆ ವಕೀಲರು, ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ ಅಥವಾ ಸಂಬಂಧಿಸಿದ ಇಲಾಖೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    },
  },
  {
    q: {
      en: "Where can I get free legal help?",
      kn: "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ ಎಲ್ಲಿ ಪಡೆಯಬಹುದು?",
    },
    a: {
      en: "District Legal Services Authorities — usually near the district court — provide free legal services to eligible people. You can also call the NALSA helpline 15100 or visit nalsa.gov.in to find your authority.",
      kn: "ಅರ್ಹ ಜನರಿಗೆ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳು (ಸಾಮಾನ್ಯವಾಗಿ ಜಿಲ್ಲಾ ನ್ಯಾಯಾಲಯದ ಬಳಿ) ಉಚಿತ ಸೇವೆ ನೀಡುತ್ತವೆ. NALSA ಸಹಾಯವಾಣಿ 15100 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ಪ್ರಾಧಿಕಾರವನ್ನು ಹುಡುಕಲು nalsa.gov.in ನೋಡಿ.",
    },
  },
  {
    q: {
      en: "What should I do if I face online fraud?",
      kn: "ಆನ್‌ಲೈನ್ ವಂಚನೆ ಎದುರಾದರೆ ಏನು ಮಾಡಬೇಕು?",
    },
    a: {
      en: "Act immediately: call 1930 or report on cybercrime.gov.in within the first hour, then inform your bank to freeze the transaction. Keep screenshots and transaction details as proof.",
      kn: "ತಕ್ಷಣ ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳಿ: ಮೊದಲ ಒಂದು ಗಂಟೆಯಲ್ಲಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ನಲ್ಲಿ ದೂರು ನೀಡಿ, ನಂತರ ವಹಿವಾಟನ್ನು ಸ್ಥಗಿತಗೊಳಿಸಲು ಬ್ಯಾಂಕಿಗೆ ತಿಳಿಸಿ. ಪುರಾವೆಯಾಗಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಮತ್ತು ವಹಿವಾಟಿನ ವಿವರಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ.",
    },
  },
  {
    q: {
      en: "What should I do if I am unsure which authority to contact?",
      kn: "ಯಾವ ಸಂಸ್ಥೆಯನ್ನು ಸಂಪರ್ಕಿಸಬೇಕೆಂದು ಖಚಿತವಿಲ್ಲದಿದ್ದರೆ ಏನು ಮಾಡಬೇಕು?",
    },
    a: {
      en: "Start with the Know Your Rights guides on this portal — each topic says where to seek help. If you are still unsure, call your District Legal Services Authority or the national helpline 15100, and they can direct you to the right office.",
      kn: "ಈ ಪೋರ್ಟಲ್‌ನ 'ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ತಿಳಿಯಿರಿ' ಮಾರ್ಗದರ್ಶಿಗಳಿಂದ ಆರಂಭಿಸಿ — ಪ್ರತಿ ವಿಷಯದಲ್ಲಿ ಸಹಾಯ ಎಲ್ಲಿ ಪಡೆಯಬಹುದು ಎಂದಿದೆ. ಇನ್ನೂ ಖಚಿತವಿಲ್ಲದಿದ್ದರೆ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ ಅಥವಾ ರಾಷ್ಟ್ರೀಯ ಸಹಾಯವಾಣಿ 15100 ಗೆ ಕರೆ ಮಾಡಿ — ಅವರು ಸರಿಯಾದ ಕಚೇರಿಗೆ ದಾರಿ ತೋರಿಸುತ್ತಾರೆ.",
    },
  },
  {
    q: {
      en: "Can students seek legal help?",
      kn: "ವಿದ್ಯಾರ್ಥಿಗಳು ಕಾನೂನು ಸಹಾಯ ಪಡೆಯಬಹುದೇ?",
    },
    a: {
      en: "Yes. Students can report ragging through college committees, the UGC anti-ragging helpline or antiragging.in, and approach Legal Services Authorities for free advice on fees, admissions or harassment. Childline 1098 helps school-going children.",
      kn: "ಹೌದು. ವಿದ್ಯಾರ್ಥಿಗಳು ರ್ಯಾಗಿಂಗ್ ದೂರನ್ನು ಕಾಲೇಜು ಸಮಿತಿ, UGC ರ್ಯಾಗಿಂಗ್ ವಿರೋಧಿ ಸಹಾಯವಾಣಿ ಅಥವಾ antiragging.in ನಲ್ಲಿ ನೀಡಬಹುದು; ಶುಲ್ಕ, ಪ್ರವೇಶ ಅಥವಾ ಕಿರುಕುಳ ವಿಷಯಗಳಲ್ಲಿ ಉಚಿತ ಸಲಹೆಗೆ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರಗಳನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು. ಶಾಲಾ ಮಕ್ಕಳಿಗೆ ಚೈಲ್ಡ್‌ಲೈನ್ 1098 ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    },
  },
  {
    q: {
      en: "How can I find official government legal information?",
      kn: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಕಾನೂನು ಮಾಹಿತಿ ಎಲ್ಲಿ ಹುಡುಕುವುದು?",
    },
    a: {
      en: "Use official sources only: nalsa.gov.in for legal aid, cybercrime.gov.in for cyber complaints, consumerhelpline.gov.in for consumer issues, and india.gov.in as the national portal that links to all government services.",
      kn: "ಅಧಿಕೃತ ಮೂಲಗಳನ್ನು ಮಾತ್ರ ಬಳಸಿ: ಕಾನೂನು ಸಹಾಯಕ್ಕೆ nalsa.gov.in, ಸೈಬರ್ ದೂರುಗಳಿಗೆ cybercrime.gov.in, ಗ್ರಾಹಕ ವಿಷಯಗಳಿಗೆ consumerhelpline.gov.in, ಮತ್ತು ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಸೇವೆಗಳ ರಾಷ್ಟ್ರೀಯ ಪೋರ್ಟಲ್ india.gov.in.",
    },
  },
  {
    q: {
      en: "What should I do in an emergency?",
      kn: "ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ ಏನು ಮಾಡಬೇಕು?",
    },
    a: {
      en: "Call 112 — the single national emergency number for police, fire and medical help. For online fraud call 1930, for women's assistance 181, and for children 1098. Save these numbers in your phone today.",
      kn: "112 ಗೆ ಕರೆ ಮಾಡಿ — ಪೊಲೀಸ್, ಅಗ್ನಿಶಾಮಕ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸಹಾಯಕ್ಕೆ ಒಂದೇ ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಂಖ್ಯೆ. ಆನ್‌ಲೈನ್ ವಂಚನೆಗೆ 1930, ಮಹಿಳೆಯರ ಸಹಾಯಕ್ಕೆ 181, ಮಕ್ಕಳಿಗೆ 1098. ಈ ಸಂಖ್ಯೆಗಳನ್ನು ಇಂದೇ ಫೋನ್‌ನಲ್ಲಿ ಉಳಿಸಿ.",
    },
  },
];

export interface Helpline {
  number: string;
  service: Bilingual;
  what: Bilingual;
  when: Bilingual;
  website?: string;
  emergency?: boolean;
}

export const helplines: Helpline[] = [
  {
    number: "112",
    service: { en: "Emergency Response", kn: "ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ" },
    what: {
      en: "One national number for police, fire and ambulance services.",
      kn: "ಪೊಲೀಸ್, ಅಗ್ನಿಶಾಮಕ ಮತ್ತು ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗಳಿಗೆ ಒಂದೇ ರಾಷ್ಟ್ರೀಯ ಸಂಖ್ಯೆ.",
    },
    when: {
      en: "Any life-threatening emergency — crime in progress, fire, serious injury.",
      kn: "ಜೀವಕ್ಕೆ ಅಪಾಯವಿರುವ ಯಾವುದೇ ತುರ್ತು ಪರಿಸ್ಥಿತಿ — ನಡೆಯುತ್ತಿರುವ ಅಪರಾಧ, ಬೆಂಕಿ, ಗಂಭೀರ ಗಾಯ.",
    },
    website: "https://112.gov.in",
    emergency: true,
  },
  {
    number: "1930",
    service: { en: "Cyber & Financial Fraud", kn: "ಸೈಬರ್ ಮತ್ತು ಆರ್ಥಿಕ ವಂಚನೆ" },
    what: {
      en: "Report online and financial fraud so money can be frozen quickly.",
      kn: "ಆನ್‌ಲೈನ್ ಮತ್ತು ಆರ್ಥಿಕ ವಂಚನೆಯನ್ನು ದೂರಿಸಿ — ಹಣವನ್ನು ಬೇಗ ಸ್ಥಗಿತಗೊಳಿಸಬಹುದು.",
    },
    when: {
      en: "OTP fraud, UPI fraud, fake calls or messages, online shopping fraud — call within the first hour.",
      kn: "OTP ವಂಚನೆ, UPI ವಂಚನೆ, ನಕಲಿ ಕರೆ ಅಥವಾ ಸಂದೇಶಗಳು, ಆನ್‌ಲೈನ್ ಶಾಪಿಂಗ್ ವಂಚನೆ — ಮೊದಲ ಒಂದು ಗಂಟೆಯಲ್ಲಿ ಕರೆ ಮಾಡಿ.",
    },
    website: "https://cybercrime.gov.in",
  },
  {
    number: "181",
    service: { en: "Women Helpline", kn: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ" },
    what: {
      en: "24×7 assistance for women facing violence, harassment or needing support.",
      kn: "ಹಿಂಸೆ, ಕಿರುಕುಳ ಎದುರಿಸುತ್ತಿರುವ ಅಥವಾ ಬೆಂಬಲ ಬೇಕಾಗಿರುವ ಮಹಿಳೆಯರಿಗೆ 24×7 ಸಹಾಯ.",
    },
    when: {
      en: "Harassment, domestic violence, or when a woman needs guidance or shelter.",
      kn: "ಕಿರುಕುಳ, ಗೃಹ ಹಿಂಸೆ, ಅಥವಾ ಮಹಿಳೆಗೆ ಮಾರ್ಗದರ್ಶನ ಅಥವಾ ವಸತಿ ಬೇಕಾದಾಗ.",
    },
    website: "https://wcd.gov.in",
  },
  {
    number: "1098",
    service: { en: "Childline", kn: "ಚೈಲ್ಡ್‌ಲೈನ್" },
    what: {
      en: "Free helpline for children in need of care and protection.",
      kn: "ರಕ್ಷಣೆ ಮತ್ತು ಆರೈಕೆ ಬೇಕಾಗಿರುವ ಮಕ್ಕಳಿಗೆ ಉಚಿತ ಸಹಾಯವಾಣಿ.",
    },
    when: {
      en: "Child labour, abuse, a missing child, or any child in distress.",
      kn: "ಬಾಲಕಾರ್ಮಿಕ, ನಿಂದನೆ, ಕಳೆದುಹೋದ ಮಗು, ಅಥವಾ ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಯಾವುದೇ ಮಗು.",
    },
    website: "https://wcd.gov.in",
  },
  {
    number: "15100",
    service: { en: "Free Legal Aid (NALSA)", kn: "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ (NALSA)" },
    what: {
      en: "Guidance on free legal services and where to apply for them.",
      kn: "ಉಚಿತ ಕಾನೂನು ಸೇವೆಗಳ ಬಗ್ಗೆ ಮತ್ತು ಎಲ್ಲಿ ಅರ್ಜಿ ಹಾಕಬೇಕೆಂಬ ಮಾರ್ಗದರ್ಶನ.",
    },
    when: {
      en: "When you need a lawyer or legal advice but cannot afford it.",
      kn: "ವಕೀಲರು ಅಥವಾ ಕಾನೂನು ಸಲಹೆ ಬೇಕಾದರೂ ಖರ್ಚು ವಹಿಸಲಾಗದಿದ್ದಾಗ.",
    },
    website: "https://nalsa.gov.in",
  },
  {
    number: "1915",
    service: { en: "National Consumer Helpline", kn: "ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ" },
    what: {
      en: "Guidance and complaint registration for consumer issues.",
      kn: "ಗ್ರಾಹಕ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ದೂರು ನೋಂದಣಿ.",
    },
    when: {
      en: "Defective products, poor service, overcharging or misleading advertisements.",
      kn: "ಕೆಟ್ಟ ಸಾಮಗ್ರಿ, ಅಸಮರ್ಪಕ ಸೇವೆ, ಅತಿ ದರ ಅಥವಾ ಭ್ರಮೆಗೊಳಿಸುವ ಜಾಹೀರಾತುಗಳು.",
    },
    website: "https://consumerhelpline.gov.in",
  },
];

export interface OfficialResource {
  name: Bilingual;
  desc: Bilingual;
  url: string;
}

export const officialResources: OfficialResource[] = [
  {
    name: { en: "National Legal Services Authority (NALSA)", kn: "ರಾಷ್ಟ್ರೀಯ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ (NALSA)" },
    desc: { en: "Free legal aid schemes and your legal services authority.", kn: "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ ಯೋಜನೆಗಳು ಮತ್ತು ನಿಮ್ಮ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕಾರ." },
    url: "https://nalsa.gov.in",
  },
  {
    name: { en: "National Cyber Crime Reporting Portal", kn: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಪೋರ್ಟಲ್" },
    desc: { en: "Report cybercrime and online financial fraud.", kn: "ಸೈಬರ್ ಅಪರಾಧ ಮತ್ತು ಆನ್‌ಲೈನ್ ಆರ್ಥಿಕ ವಂಚನೆ ದೂರು ನೀಡಿ." },
    url: "https://cybercrime.gov.in",
  },
  {
    name: { en: "National Consumer Helpline", kn: "ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ" },
    desc: { en: "Consumer complaints and guidance.", kn: "ಗ್ರಾಹಕ ದೂರುಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ." },
    url: "https://consumerhelpline.gov.in",
  },
  {
    name: { en: "India.gov.in — National Portal of India", kn: "India.gov.in — ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪೋರ್ಟಲ್" },
    desc: { en: "The entry point to all government services and information.", kn: "ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಸೇವೆಗಳು ಮತ್ತು ಮಾಹಿತಿಗೆ ಪ್ರವೇಶ ದ್ವಾರ." },
    url: "https://india.gov.in",
  },
];
