<div align="center">
  Boilerplate Lib - Ligh way to make libs using Typescript and Rollup.
  <br />
  <br />
  <a href="https://github.com/teixeiravictor/boilerplate-lib/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/teixeiravictor/boilerplate-lib/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  .
  <a href="https://github.com/teixeiravictor/boilerplate-lib/discussions">Ask a Question</a>
</div>

<div align="center">
<br />

[![license](https://img.shields.io/github/license/teixeiravictor/boilerplate-lib?style=flat-square)](LICENSE)
</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Commands / npm scripts](#commands--npm-scripts)
- [Contributing](#contributing)
- [License](#license)

</details>

## About

<table>
<tr>
<td>

Your time should be spent on writing your code, not on doing the setup tasks and configuration.
The main advantage of this approach is to decrease the negative time spent on setting up all stack code.
Such as like creating your project template from scratch over and over.

However, this template maybe can not be will serve for all your purposes. 
Be confortable replace the predefined values, then remove unused sections and add your own preferences.

Key features of **Template**:

- Travis for continuous integration
- Semantic Release
- Git Hooks with Husky and Commitlint
- Linters (ESLint, Prettier)
- TDD with Jest
- Rollup as a bundle tool
- npm-run-all to run multiple npm-scripts in different environments
- TypeScript

</td>
</tr>
</table>

### Built With

- [Amazing README](https://github.com/dec0dOS/amazing-github-template)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Husky.js](https://github.com/typicode/husky)
- [Jest](https://jestjs.io/pt-BR/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [SemanticRelease](https://github.com/semantic-release/semantic-release)

## Getting Started

### Prerequisites

This project was creating using **Node.js v16.14.2** and **npm **8.7.0****.

You can use [nvm](https://github.com/nvm-sh/nvm) to install different versions of Node.js.
Or use another CLI to manage multiple runtime versions, like [asdf](https://asdf-vm.com/).

### Usage 

1. Clone this repository.
2. Run `npm install` to install all dependencies.
3. Replace all the markup variables to your desired values
4. Setup your CI preferences in `.travis.yml`.

<details open>
<summary>Warning use Yarn 2</summary>
<br>

Yarn 2+ doesn't support prepare lifecycle script, so husky needs to be installed differently.
See [Husky Manual](https://typicode.github.io/husky/#/?id=yarn-2) for more information.
</details>

### Commands / npm scripts

| Command          | Description                                           |
| ---------------- | ----------------------------------------------------- |
| build            | Rollup compile main file in chunks inside dist folder |
| commitmsg        | Run commitlint                                        |
| lint             | Run Eslint                                            |
| lint:fix         | Run Eslint with fix option                            |
| prettier-format  | Run fix prettier from all files in project            |
| test             | Run tests from *.spec.js files                        |
| test:coverage    | Run tests coverage                                    |
| prepare          | npm script will execute after 'npm install'           |
| semantic-release | Run semantic-release from commits                     |

## Contributing

Create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.

## License

This project is licensed under the **MIT license**. Feel free to edit and distribute this template as you like.

See [LICENSE](LICENSE) for more information.