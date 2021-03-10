import { message, messageDOM } from './message';
import { divEdit } from './test-div';
import { listGenerator } from './list';
import info from './title.txt';

const div = document.querySelector(".test-div");
const lst = document.querySelector("lst");

// lst.appendChild(listGenerator('tak', 'tak', 'nie'));

message("wszymstko działa");
divEdit(div, 'No i wszymsto działa równiesz');