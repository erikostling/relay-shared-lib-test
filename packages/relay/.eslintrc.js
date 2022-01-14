module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/eslint-recommended", "prettier", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX

    },
    ecmaVersion: 2018,
    // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports

  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use

    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "@typescript-eslint/camelcase": "off"
  },
  "overrides": [{
    "files": ["**/*.tsx"],
    "rules": {
      "react/prop-types": "off"
    }
  }]
};