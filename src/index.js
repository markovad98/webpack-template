import { config } from './modules/config';
import AppService from "./modules/app.service";
import './modules/heade.component';

const service = new AppService('Hello, Webpack!');
service.log();

console.log(config.key);
