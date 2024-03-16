//creating our own diroctory "folders creaation"

const fs=require('fs')

//existsSync show the file is present or not

if(!fs.existsSync('./new'))  //if not present it will make
{
    //mkdir-- make directory
    fs.mkdir('./new',(err)=>{
        if(err) throw err
        console.log('directory created')
    })
}
else{//if present it will delete

    //rmdir --- remove directory

    fs.rmdir('./new',(err)=>{
        if(err) throw err
        console.log('directory removed')
    })
}

//to showing the uncaught errors

process.on('uncaughtException',err=>{
    console.error(`there was an error : ${err}`)
    process.exit(1)})