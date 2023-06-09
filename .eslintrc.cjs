module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "no-undef" : 0,
    "no-unused-vars": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types":0,
    "no-import-assign":0,
    "react-hooks/exhaustive-deps" :0,
    "react-hooks/rules-of-hooks": 0,
    "react/jsx-no-target-blank": 0,
    "no-useless-escape": 0,
  },
}
