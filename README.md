![](https://travis-ci.org/factorialco/factorial-components.svg?branch=master)

# Factorial Components

Library of React components to be used at Factorial.

## Two builds: client and server

This package offers two builds of the same components, one optimized for client-side
applications and the other optimized for server side rendering.

This is due to the nature of CSS and how it needs to be treated in each case.

### Client side build

Default imports are from the client-side build, e.g:

`import { Button } from 'factorial-components'`

Styles are dynamically injected at runtime thanks to webpack's `style-loader`

### Server side build

To import components from server side simply append `/server` to your imports, e.g:

`import { Button } from 'factorial-components/server'`

In this case, CSS is generated at compile time and extracted to a separate css file
that needs to be served with your application.

File is available at `factorial-components/dist/server/main.css`.

Here is an example importing the css file as a string and injecting it to the html served:

```javascript
  import React from 'react'
  import styles from 'factorial-components/dist/server/main.css'

  export default class YourDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>Your page</title>
          <style>
            {styles}
          </style>
        </Head>
        ...
      </html>
    )
  }
}
```

## Development

`yarn storybook` will open a storybook on `http://localhost:6006`

## Build

Build both server and client packages with: `yarn build`

This command will generate a `dist` folder containing subsequent `server` and `client` folders for each case.
