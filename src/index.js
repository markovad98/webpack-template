import React from 'react';
import { render } from 'react-dom';
import App from "./App";
import { config } from './modules/config';
import AppService from "./modules/app.service";
import './modules/heade.component';
import './modules/ts.module'
import './css/index.css';
import './less/index.less';
import './sass/index.sass';

const service = new AppService('Hello, Webpack!');
service.log();

console.log(config.key);

render(<App />, document.getElementById('root'));
