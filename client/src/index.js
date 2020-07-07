import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Sentry from '@sentry/react';


Sentry.init({dsn: "https://5553cd9a287f4f9ea102b13aeb13cb67@o416919.ingest.sentry.io/5314228" , release: "toihocweb"});



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
