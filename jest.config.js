export default /** @type {import("jest").Config} */ ({
  testEnvironment: "node",
  testMatch: ["src/**/*.test.{ts,tsx}"],
  transform: {
    "\\.tsx?$": "@swc/jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
});
