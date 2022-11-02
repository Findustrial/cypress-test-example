import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'k1e7v3',

  e2e: {
    experimentalSessionAndOrigin: true,
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config)
      return config
    }
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
