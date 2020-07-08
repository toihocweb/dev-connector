import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Sentry from '@sentry/react';

// Sentry.init({ dsn: "https://6d80a00786ab4170b56bc5ce2de621c2@o417587.ingest.sentry.io/5318266" });



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
