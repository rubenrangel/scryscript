const { typescript } = require('projen');
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'scryscript',
  dependabot: true,
  jestOptions: {
    configFilePath: 'jest.config.json',
  },
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: [
          'feat', 'fix', 'chore', 'ci',
        ],
      },
    },
  },
  pullRequestTemplate: false,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  releaseToNpm: true,
  gitignore: [
    // https://raw.githubusercontent.com/github/gitignore/main/Global/JetBrains.gitignore
    // Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
    // Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
    '.idea/**/workspace.xml',
    '.idea/**/tasks.xml',
    '.idea/**/usage.statistics.xml',
    '.idea/**/dictionaries',
    '.idea/**/shelf',
    '.idea/**/contentModel.xml',
    '.idea/**/dataSources/',
    '.idea/**/dataSources.ids',
    '.idea/**/dataSources.local.xml',
    '.idea/**/sqlDataSources.xml',
    '.idea/**/dynamic.xml',
    '.idea/**/uiDesigner.xml',
    '.idea/**/dbnavigator.xml',
    '*.iws',
    'out/',
    '.idea/httpRequests',
  ],
});
project.synth();
