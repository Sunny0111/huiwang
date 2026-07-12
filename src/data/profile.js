export const profile = {
  name: 'Hui Wang',
  title: 'Software Engineering Student @ University of Duisburg-Essen',
  location: 'Germany',
  email: 'hw1361376751@gmail.com',
  github: 'https://github.com/wanghui',
  scholar: 'https://scholar.google.com/citations?user=0rNji2AAAAAJ&hl=de',
  avatar: `${import.meta.env.BASE_URL}images/profile.jpg`,
  intro:
    'I am currently pursuing a Bachelor degree in Software Engineering at the University of Duisburg-Essen, Germany since April 2022.',
  focus:
    'My interests include software development, backend engineering, UI/UX design, Human-AI collaboration, and human-centered technology.',
};

export const projects = [
  {
    title: 'Super Efficient Prefecture Management System',
    stack: 'Angular, Java, Spring Boot, Maven, MySQL',
    role:
      'Full-stack developer responsible for framework setup, requirements analysis, and implementation of front-end and back-end core features.',
  },
  {
    title: 'Moodle to JACK Import System',
    stack: 'Java, JSF, XML processing',
    role:
      'Developed and integrated an import feature for JACK, a university e-assessment system, to process Moodle XML exports and render them in the JSF-based front end.',
  },
  {
    title: 'Sonnecken YourProcure Development, Testing & AI Agent Setup',
    stack: 'AI Agent setup, software development, testing, validation, backend integration',
    role:
      'Built and tested an AI Agent workflow, contributed to software development tasks, and validated backend integration to ensure reliable system behavior.',
  },
];

export const skills = [
  'Frontend Development: HTML, CSS',
  'Programming Languages: Java, Python, TypeScript, JavaScript, Groovy',
  'Frameworks: Angular, Spring Boot',
  'DevOps Tools: Docker',
  'Version Control: Git',
  'Design Tools: Figma',
  'Testing Tools: JMeter',
  'Full-stack integration and system architecture',
];

export const languages = ['Chinese - Native', 'English - Fluent', 'German - C1 level'];
