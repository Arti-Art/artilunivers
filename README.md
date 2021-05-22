# artilunivers

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

Nuxt Docs: [Nuxt.js docs](https://nuxtjs.org).

# Scss / SASS support for nuxt (installed)
Install with `npm install --save-dev sass sass-loader@10 fibers` (fibers speeds up sass compilation)  
If error "nuxt Node Sass version X is incompatible with X", switch to node-sass v5.0.0  

# Add FontAwesome support for nuxt (installed)
yarn add @nuxtjs/fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons -D  
yarn add @fontawesome/fontawesome-svg-core  
add `buildModules: [ '@nuxtjs/fontawesome', ],` and `fontawesome: { component: 'fa', icons: { solid: true, brands: true } }` to nuxt.config.js  
We can then use `<fa>` as a global component.
Instead of loading all icons with `true`, declare icons to use like this `solid: ['faEnvelope', 'faLock', 'faExternalLinkAlt'],` and use them in your components like this: `<fa icon="envelope" /> OR <fa icon="external-link-alt" />`  
You declare your icons as PascalCase in your nuxt.config.js, and as kebab-case in your icon property.