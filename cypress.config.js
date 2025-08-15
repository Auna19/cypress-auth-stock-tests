
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Base URL for your local application
    baseUrl: "https://staging-web.gettimart.com/login", // Change this port if necessary

    // Reporter configuration for Mochawesome
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,  // Generates JSON report only; change to true if you want HTML output directly
      json: true,
    },

    // Setup node events (optional)
    setupNodeEvents(on, config) {
      // You can implement node event listeners here if needed
      return config;
    },
  },
});


