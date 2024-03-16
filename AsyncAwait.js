//Asynchronize -- by using async and await
//to avoid call back hell we wrote in node itself async await

const path=require('path')

//to make code Asynchronize -- promises are using

const fsPromises=require('fs').promises
const fileOps=async()=>{
    try{

//to read
const data=await fsPromises.readFile(path.join(__dirname ,'files','start.txt'),'utf8')
console.log(data)

//to write
await fsPromises.writeFile(path.join(__dirname ,'files','startstwo.txt'),`hi floks this is new file`)
    console.log("write completed");

//to append or update
await fsPromises.appendFile(path.join(__dirname ,'files','startstwo.txt'),`\n\n THANKYOU`)
        console.log("APPEND completed"); 

//to rename 
await fsPromises.rename(path.join(__dirname ,'files','thanks.txt'),path.join(__dirname ,'files','Thanks.txt'))
    console.log("rename completed"); 

// TO DELETE
await fsPromises.unlink(path.join(__dirname ,'files','Thanks.txt'))
    console.log("DELETE completed");     
    }
    catch(err){
        console.error(err)
    }
}
fileOps()