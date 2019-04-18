import React from 'react';
import ReactDOM from 'react-dom';
import WebFonts from 'webfontloader'

import App from './containers/App';
import * as serviceWorker from './serviceWorker';


WebFonts.load({
  google: {
    families: [
      'Montserrat:400,400i,500:cyrillic',
      'Open+Sans:300,300i,400',
    ]
  }
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
