import type { Bilingual } from "@/lib/i18n";

export interface QuizQuestion {
  question: Bilingual;
  options: Bilingual[];
  correctIndex: number;
  explanation: Bilingual;
}

export const topicQuiz: QuizQuestion[] = [
  {
    question: {
      en: "Where is the best place to confirm the law discussed in this guide?",
      kn: "ಈ ಮಾರ್ಗದರ್ಶಿಯಲ್ಲಿ ತಿಳಿಸಿದ ಕಾನೂನನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಉತ್ತಮ ಸ್ಥಳ ಯಾವುದು?",
    },
    options: [
      { en: "An official government or legal authority source", kn: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಅಥವಾ ಕಾನೂನು ಪ್ರಾಧಿಕಾರದ ಮೂಲ" },
      { en: "An unverified social media post", kn: "ಪರಿಶೀಲಿಸದ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದ ಪೋಸ್ಟ್" },
      { en: "A forwarded message with no source", kn: "ಮೂಲವಿಲ್ಲದ ಫಾರ್ವರ್ಡ್ ಸಂದೇಶ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Official sources are the best place to verify the law and current process; this guide links to relevant authorities.",
      kn: "ಕಾನೂನು ಮತ್ತು ಪ್ರಸ್ತುತ ಪ್ರಕ್ರಿಯೆ ಪರಿಶೀಲಿಸಲು ಅಧಿಕೃತ ಮೂಲಗಳು ಉತ್ತಮ; ಈ ಮಾರ್ಗದರ್ಶಿ ಸಂಬಂಧಿತ ಪ್ರಾಧಿಕಾರಗಳ ಲಿಂಕ್‌ಗಳನ್ನು ನೀಡುತ್ತದೆ.",
    },
  },
  {
    question: {
      en: "What is sensible to keep when seeking help about a legal problem?",
      kn: "ಕಾನೂನು ಸಮಸ್ಯೆಗೆ ಸಹಾಯ ಪಡೆಯುವಾಗ ಯಾವುದನ್ನು ಉಳಿಸಿಕೊಳ್ಳುವುದು ಸೂಕ್ತ?",
    },
    options: [
      { en: "Relevant records and messages, if safe to keep", kn: "ಸುರಕ್ಷಿತವಾಗಿದ್ದರೆ ಸಂಬಂಧಿತ ದಾಖಲೆಗಳು ಮತ್ತು ಸಂದೇಶಗಳು" },
      { en: "Only a verbal account, with no documents", kn: "ದಾಖಲೆಗಳಿಲ್ಲದ ಮೌಖಿಕ ವಿವರಣೆ ಮಾತ್ರ" },
      { en: "Another person's private information", kn: "ಇನ್ನೊಬ್ಬರ ಖಾಸಗಿ ಮಾಹಿತಿ" },
    ],
    correctIndex: 0,
    explanation: {
      en: "Relevant records may help an adviser understand the situation. Do not put yourself at risk to collect them.",
      kn: "ಸಂಬಂಧಿತ ದಾಖಲೆಗಳು ಪರಿಸ್ಥಿತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಲಹೆಗಾರರಿಗೆ ಸಹಾಯ ಮಾಡಬಹುದು. ಅವುಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ನಿಮ್ಮನ್ನು ಅಪಾಯಕ್ಕೆ ಒಡ್ಡಬೇಡಿ.",
    },
  },
  {
    question: {
      en: "What should you do if someone is in immediate danger?",
      kn: "ಯಾರಾದರೂ ತಕ್ಷಣದ ಅಪಾಯದಲ್ಲಿದ್ದರೆ ಏನು ಮಾಡಬೇಕು?",
    },
    options: [
      { en: "Wait for an online discussion", kn: "ಆನ್‌ಲೈನ್ ಚರ್ಚೆಗಾಗಿ ಕಾಯಿರಿ" },
      { en: "Call India's emergency number, 112", kn: "ಭಾರತದ ತುರ್ತು ಸಂಖ್ಯೆ 112 ಗೆ ಕರೆ ಮಾಡಿ" },
      { en: "Post their personal details publicly", kn: "ಅವರ ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಸಾರ್ವಜನಿಕವಾಗಿ ಪ್ರಕಟಿಸಿ" },
    ],
    correctIndex: 1,
    explanation: {
      en: "For immediate danger in India, contact emergency services at 112.",
      kn: "ಭಾರತದಲ್ಲಿ ತಕ್ಷಣದ ಅಪಾಯವಿದ್ದರೆ 112 ತುರ್ತು ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    },
  },
];