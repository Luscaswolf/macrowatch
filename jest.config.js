// jest.config.js

module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  

};

module.exports = {
  "testEnvironment": "jsdom"
}
