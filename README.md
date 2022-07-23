# Testes _end-to-end_ com Cypress

Sample project to demonstrate end-to-end (e2e) tests written with Cypress running on a CI service.

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.37.1node` while writing this doc)
- [nodejs](https://nodejs.org/en/) (I've used version `16.16.0` while writing this doc)
- NPM (I've used version `8.11.0` while writing this doc)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (I've used version `1.22.19` while writing this doc)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `103.0.5060.134` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

### Using Yarn

To install the dev dependencies, run `yarn install` (or `yarn` for short.)

### Using NPM

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** `cypress.env.json` file is not tracked by git.

## Running the tests

In this project, you can run tests in interactive and headless modes, and on desktop and tablet viewports.

### Headless mode

Run `yarn test` (or `npm test`) to run all tests in headless mode using a desktop viewport.

Run `yarn test:tablet` (or `npm run test:tablet`) to run the appropriate tests in headless mode using a tablet viewport.

### Interactive mode

Run `yarn cy:open` (or `npm run cy:open`) to open the Cypress Test Runner to run tests in interactive mode using a desktop viewport.

Run `yarn cy:open:tablet` (or `npm run cy:open:tablet`) to open the Cypress Test Runner to run tests in interactive mode using a tablet viewport.

---

Made with ❤️ by [João Willian](https://github.com/joaowillianspejo).
