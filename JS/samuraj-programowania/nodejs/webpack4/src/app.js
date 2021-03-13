import { message, messageDOM } from './tools/message';
import { divEdit } from './tools/test-div';
import { listGenerator } from './tools/list';
import './components/footer';
import addImage from './tools/image';
import Creator from './tools/creator';

import info from './data/title.txt';

import './scss/index.scss';

const div = document.querySelector(".test-div");
const lst = document.querySelector("lst");

// lst.appendChild(listGenerator('tak', 'tak', 'nie'));

message("wszymstko działa");
divEdit(div, 'No i wszymsto działa równiesz');
addImage('h1');

const e1 = new Creator();
e1.addBgColor('red');
const e2 = new Creator();
e2.addBgColor('blue');
const e3 = new Creator();
e3.addBgColor(); 
e3.showColor(); 