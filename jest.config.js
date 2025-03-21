module.exports = {
  preset: "jest-preset-angular",
  roots: ["src"],
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["src/app/**/*.ts", "!<rootDir>/node_modules/"],
};
