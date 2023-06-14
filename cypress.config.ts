import { defineConfig } from "cypress";
import eyesPlugin from "@applitools/eyes-cypress";

export default eyesPlugin(
  defineConfig({
    component: {
      devServer: {
        framework: "create-react-app",
        bundler: "webpack",
      },
    },

    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  })
);
