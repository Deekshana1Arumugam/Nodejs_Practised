console.log("hello")
//console.log(global)


//common core module import in node js
const os=require('os') //in js there was import method from where we taken ,here using "require"..
const path=require('path')


//acessing from DEFAULT imported module
console.log(os.type())
console.log(os.version())
console.log(os.homedir())


console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename)) //gives as object

//default values 
console.log(__dirname)
console.log(__filename)


//new file module importing method use ./with file name
const math=require('./math.js')

console.log(math.add(3,6))
console.log(math.sub(3,6))
console.log(math.div(3,6))
console.log(math.mult(3,6))

//another way : destructure

const {add,sub,div,mult}=require('./math.js');

//here no need to use the file name

console.log(add(3,6))
console.log(sub(3,6))
console.log(div(3,6))
console.log(mult(3,6))


// es6 format ----- import {add,sub,div,mult} from './math.js';
//if wee need to use means need to chane name from , .js to .mjs then only can use it in node js