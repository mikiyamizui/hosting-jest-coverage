export default /** @type {import("jest").Config} */ ({
  testEnvironment: "node",
  testRegex: ["\\.test\\.tsx?$"],
  transform: {
    "\\.tsx?$": "@swc/jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
});
