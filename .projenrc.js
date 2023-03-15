const { typescript } = require("projen");
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "scryscript",
  dependabot: true,
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
    },
  },
  minNodeVersion: "18.0.0",
  tsconfig: {
    compilerOptions: {
      lib: ["dom", "es2019"],
    },
  },
  jest: false,
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ["build", "feat", "fix", "chore", "ci"],
      },
    },
  },
  pullRequestTemplate: false,
  deps: ["radash"] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ["vitest"] /* Build dependencies for this module. */,
  // packageName: undefined,  /* The "name" in package.json. */
  releaseToNpm: true,
  gitignore: [
    // https://raw.githubusercontent.com/github/gitignore/main/Global/JetBrains.gitignore
    // Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
    // Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
    ".idea/**/workspace.xml",
    ".idea/**/tasks.xml",
    ".idea/**/usage.statistics.xml",
    ".idea/**/dictionaries",
    ".idea/**/shelf",
    ".idea/**/contentModel.xml",
    ".idea/**/dataSources/",
    ".idea/**/dataSources.ids",
    ".idea/**/dataSources.local.xml",
    ".idea/**/sqlDataSources.xml",
    ".idea/**/dynamic.xml",
    ".idea/**/uiDesigner.xml",
    ".idea/**/dbnavigator.xml",
    "*.iws",
    "out/",
    ".idea/httpRequests",
    "/test-reports/",
    "junit.xml",
    "/coverage",
  ],
});

// Use escape hatch to remove Jest from `env`
project.eslint.config.env = {
  node: true,
};

project.addPackageIgnore("/test-reports/");
project.addPackageIgnore("junit.xml");
project.addPackageIgnore("/coverage/");

project.prettier?.addIgnorePattern("/coverage");

project.testTask.prependExec("vitest run", { receiveArgs: true });

project.addTask("test:watch", {
  description: "Run Vitest in watch mode",
  exec: "vitest",
});

project.synth();
