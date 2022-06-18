# Mad-News [![Downloads](https://img.shields.io/npm/dm/mad-news.svg)](https://www.npmjs.com/package/mad-news) [![NPM version](https://img.shields.io/npm/v/mad-news.svg)](https://www.npmjs.com/package/mad-news)

Dramatic news generator

## How to use it:

### HTML:
```html
  <script type="text/javascript" src="https://unpkg.com/mad-news/lib/index.js"></script>
```

```js
  var navigatorLang = navigator.language || navigator.userLanguage || '';
  var language = navigatorLang.toLowerCase().indexOf('ru') > -1 ? 'ru' : 'en';
  
  document.addEventListener('DOMContentLoaded', function (event) {
      var madness = new MadNews(language);
      document.querySelector('.person').innerText = madness.person;
      document.querySelector('.action').innerText = madness.action;
      document.querySelector('.conclusion').innerText = madness.conclusion;
  });
```

### Node.js (or modern frontend):

```shell
  npm install mad-news
```

```js
  const navigatorLang = navigator.language || navigator.userLanguage || '';
  const language = navigatorLang.toLowerCase().indexOf('ru') > -1 ? 'ru' : 'en';
  
  const MadNews = require('mad-news');
  const madness = new MadNews(language);
  
  console.log(madness.person);
  console.log(madness.action);
  console.log(madness.conclusion);
  // or
  console.log(madness.fullString);
  
  // Generate new Madness:
  madness.generate();
```

### Typescript (with ```"esModuleInterop": true```):

```typescript
  import MadNews from 'mad-news';
  
  const language = 'en'; // currently there are only 'ru' and 'en' dictionaries
  const madness = new MadNews(language);
  
  console.log(madness.person);
  console.log(madness.action);
  console.log(madness.conclusion);
  // or
  console.log(madness.fullString);
  
  // Generate new Madness:
  madness.generate();
```
