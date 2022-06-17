# Mad-News [![Downloads](https://img.shields.io/npm/dm/mad-news.svg)](https://www.npmjs.com/package/mad-news) [![NPM version](https://img.shields.io/npm/v/mad-news.svg)](https://www.npmjs.com/package/mad-news)

Dramatic news generator

## How to use it:

### HTML:
```html
  <script type="text/javascript" src="https://unpkg.com/mad-news/lib/index.js"></script>
```

```js
  document.addEventListener('DOMContentLoaded', function (event) {
      var madness = new MadNews();
      document.querySelector('#stage_a0 p').innerText = madness.person;
      document.querySelector('#stage_b0 p').innerText = madness.action;
      document.querySelector('#stage_c0 p').innerText = madness.conclusion;
  });
```

### Node.js (or modern frontend):

```shell
  npm install mad-news
```

```js
  var MadNews = require('mad-news');
  var Madness = new MadNews();
  
  console.log(Madness.person);
  console.log(Madness.action);
  console.log(Madness.conclusion);
  // or
  console.log(Madness.fullString);
  
  // Generate new Madness:
  madness.generate();
```

### Typescript (with ```"esModuleInterop": true```):

```typescript
  import MadNews from 'mad-news';
  const Madness = new MadNews();
  
  console.log(Madness.person);
  console.log(Madness.action);
  console.log(Madness.conclusion);
  // or
  console.log(Madness.fullString);
  
  // Generate new Madness:
  madness.generate();
```
