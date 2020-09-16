# `@blinds/babel-plugin`

This is the Babel plugin which help transfrom the Class and does addtional processing need to be used by Blinds

## Usage

```json
// babel.config.json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": "auto",
        "targets": {
          "node": 10,
        },
      },
    ],
  ],
  "plugins": [
    "@blinds/babel-plugin",
    [
      "@babel/plugin-transform-runtime",
      {
        "useESModules": false,
      },
    ],
  ]
}
```