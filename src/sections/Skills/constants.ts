export const NAME = 'skills';

const LEVEL = {
  beginner: 0.25,
  novice: 0.375,
  competent: 0.5,
  proficient: 0.75,
  expert: 0.9,
};

export const LANGUAGES = {
  'TypeScript & JavaScript': LEVEL.proficient,
  'SCSS & CSS': LEVEL.expert,
  'Mustache & HTML': LEVEL.proficient,
  'Java, C# & Node.js': LEVEL.competent,
  'Ruby & PHP': LEVEL.beginner,
  'Python & Matlab': LEVEL.novice,
  SQL: LEVEL.competent,
};

export const TOOLS = {
  'JIRA & Confluence': LEVEL.competent,
  'Adobe XD': LEVEL.competent,
  'MySQL & SQL Developer': LEVEL.competent,
};

export const LIBRARIES = {
  'Bulma & JQuery UI': LEVEL.proficient,
  'React, React Routing & React Intl': LEVEL.proficient,
  'Redux, Redux Saga & Redux Reselect': LEVEL.proficient,
  'Angular 2+': LEVEL.novice,
  JQuery: LEVEL.proficient,
  'Jest & React Testing Library': LEVEL.competent,
  'Webpack & Rollup': LEVEL.competent,
  'Babel & Node Sass': LEVEL.competent,
  'ESLint, StyleLint & Prettier': LEVEL.proficient,
  'NPM & Yarn': LEVEL.competent,
};
