module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["app/scripts/modules/**/*.js"],
  coverageReporters: ["html", "text"],
  testEnvironment: "jest-environment-jsdom",
};
