# Blinds

Blinds OGM/ORM Helps you intract with your data source/base in Object Oriented Why and make it easy to create and manage relations

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

```javascript
// simple.js
import PropTypes from 'prop-types';
import Model from '@blinds/core/model';
import uid from '@blinds/core/attrs/uid';

export default class Simple extends Model {
  uid = uid();
  name = PropTypes.string.isRequired;
  phone = PropTypes.number.isRequired;
}
```
