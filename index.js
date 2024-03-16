const logEvents=require('./logEvents') //it was created by ourself so using ./ in this
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => { //listening the evnts
 logEvents(msg);
});

myEmitter.emit('log','log Event Emitted');