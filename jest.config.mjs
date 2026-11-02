
import nextJest from "next/jest.js";

// Integra o Jest com a configuração do Next.js
const createJestConfig = nextJest({
  dir: "./",
});

// Configura o ambiente dos testes
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(customJestConfig);
