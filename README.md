# Nearmap JS Test

Welcome to the [Nearmap](nearmap.com) JS test. The purpose of this assignment is to test your familiarity with web development, JS, React, and TDD.

## Task

Build a simple app using React.

Take a look at [wireframe-mockup.jpg](./assets/wireframe-mockup.jpg) to get a feel for what we're after.

![Wireframe of task, showing map with markers. One marker is selected and shows an information box](./assests/../src/assets/wireframe-mockup.jpg?raw=true)

The application should:

- Display [background-map.jpg](./assests/background-map.jpg).
- Load the map data from [map-data.json](./assests/map-data.json).
- Populate the map with markers. See [marker.png](./assests/marker.png) and [marker-selected.png](./assests/marker-selected.png).
- When the user clicks on a marker, an information box will appear, showing the information for that location.
- When the user clicks on the map, the marker will deselect, and the information box will disappear.

Assume the app and data set will grow over time. The initial architecture should take this into account.

## Testing your app

We would like to be able run the following in the root of the project and have the app run locally:

```
npm install
npm start
npm test
```

If you have any further instructions, please include in the project's `README.md`.

In terms of browser support, we only require the latest Chrome version.

## Submission instructions

- **DO NOT** fork this repository or create pull requests on it as we don't want other candidates to see your solution.
- Provide your solution as a `.zip` or .`gz` archive file, either via email or some Dropbox-like service, to your Nearmap contact.

# Submission Response

## Tech

Dev and Build Server

- Vite
- Why?
  - Speed, quicker to work with than CRA
  - Supports native ESM imports (no bundling required)

Testing

- Vitest
- Why?
  - Fast
  - Compatible with Jest
  - Supports HMR

Front End Framework

- React

Language

- Typescript
- Why?
  - Type safety (prevent typing errors)

Canvas Library

- Konvajs
- Why?
  - Declaritive
  - Good support for React 
