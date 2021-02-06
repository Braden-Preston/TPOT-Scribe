# TPOT Scribe

## Commands

### `yarn dev`

Develop quickly with Snowpack on 3000

### `yarn build`

Build app with Webpack + analyze bundle

### `yarn start`

Serve bundled app after building on 5000

## Tech

- `pug` used for repeatable html templates
- `tailwind` a very powerful module based css
- `coffeescript` clean syntax with ES6 support
- `alpine` for simple reactivity using directives
- `localforage` for peristing application state
- `navigo` extremly small client-side routing
- `mobx-state-tree` for advanced app state
- `spruce` state management for alpine

## Goals

- Enable FAST development experience and efficient bundles
- Use yesterday's technology and augment with cool new stuff
- Keep app state entirely separate, testable, and managable
- Keep ui fragments separate, but clean and composible
- Ditch component lifecyle unless absolutely necessary
- Keep things light, but don't exclude staticly typed

## Pattern

### `view(pug) <--> model(mst) <--> api(strapi)`

---
## Things to understand

<!-- - Pug is used to help compose repeatable snippets of HTML together into one m -->

- This app is purposefully "dumb". It is using tech from years ago, sprinkled with the best of what js now has to offer. Back to basics and the good stuff.
- The UI is entirely separate from the data model. Technically you could call functions manually from the data model and control the app that way.
- The UI is just a single, massive .html page. `alpine` is used to add reactivity so that certain parts of the page are toggled on or off when the app state changes. There are no lifecycles.
- Similar to mobx-react, the model/actions from MST are linked to the UI using the `$store` directive (like vue and angular) via `spruce`
- The pug templates are for the **compiler** only. They are just repeatable fragements of HTML used to compose a single page. They are not "components" and have no instance/data!
