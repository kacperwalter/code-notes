import { navbar } from './components/navbar';
import { object } from './components/consoleLogger';

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded and parsed");
    navbar('no siemanko');
    console.table(object);
})