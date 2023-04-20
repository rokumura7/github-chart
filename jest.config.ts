export default {
  clearMocks: true,
  collectCoverageFrom: [
    "api/**/*.ts",
    "lib/**/*.ts",
    "!**/node_modules/**",
    "!./types.d.ts"
  ],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/api/index.ts",
    "/lib/experts/expert.ts"
  ],
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/$1"
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": [
      "ts-jest", 
      {
        "tsconfig": "tsconfig.json"
      }
    ]
  },
};
