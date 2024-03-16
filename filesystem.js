//we can take multiples of core common MODULES like os ,path from the official page of
//node js in that click doc to see various things inside also they --show how to use and what they returning

/*  if the file name is in .mjs:::::

//EXAMPLES:::: here we can see the file system
import { readFile } from 'node:fs';

//ENCODING FORMAT
readFile('./files/start.txt','UTF8', (err,data) => {
    if (err) throw err;
    console.log(data);
});

//ABSENT OF ENCODING IF-UTF8
readFile('./files/startk.txt', (err,data) => {
    if (err) throw err;
    console.log(data.toString());
});

//TO SHOW THE ERROR IF PRESENT MEANS catch it and display it
//exit on uncaught errors ,it was default in the node,so no need to import

process.on('uncaughtException',err=>{
    console.error(`there was an error : ${err}`)
    process.exit(1)

})*/

// if the file name is in .js means,

const fs = require('fs')
const path=require('path')
// to read

fs.readFile(path.join(__dirname ,'files','start.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data); 
})

//to write

fs.writeFile(path.join(__dirname ,'files','startstwo.txt'),`hi floks this is new file`,(err)=>{
    if (err) throw err;
    console.log("write completed"); 
  
//to update by call back function

fs.appendFile(path.join(__dirname ,'files','startstwo.txt'),`\n\n THANKYOU`,(err)=>{
    if (err) throw err;
    console.log("APPEND completed"); 

    // call back for rename:
    fs.rename(path.join(__dirname ,'files','startstwo.txt'),path.join(__dirname ,'files','thanks.txt'),(err)=>{
        if (err) throw err;
        console.log("rename completed"); 
    })
  })
})

//can also use the append method to create new file

/*
fs.appendFile(path.join(__dirname ,'files','stwo.txt'),`\n\n THANKYOU`,(err)=>{
    if (err) throw err;
    console.log("APPEND completed"); 
})*/

process.on('uncaughtException',err=>{
    console.error(`there was an error : ${err}`)
    process.exit(1)})