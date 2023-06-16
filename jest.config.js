export default /** @type {import("jest").Config} */ ({
  testEnvironment: "node",
  testMatch: ["src/**/*.{ts,tsx}"],
  transform: {
    "\\.test.tsx?$": "@swc/jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
});
