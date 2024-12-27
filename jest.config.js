export default {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'jsdom',
    testMatch: ['**/tests/unit/**/*.spec.js'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^element-plus/dist/index.css$': '<rootDir>/test/unit/mocks/styleMock.js'
    },
    transformIgnorePatterns: ['/node_modules/(?!element-plus|@element-plus)']
};