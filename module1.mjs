 //import anyName from '.module2.mjs'
//this line will import only default value export from module1.mjs file which was value of b;


//import {a,c,d} from '.module2.mjs' 
// will import all variable from module2.mjs and indide curly blaces name should be same as module2.mjs

//this line is a combination of both of the line mentioned above
import anyname,{a,c,d} from './module2.mjs'

console.log(anyname);
console.log(a);
console.log(d);
console.log(c);