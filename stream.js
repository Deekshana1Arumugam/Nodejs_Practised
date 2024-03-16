//in industry there many big datas will be at that time cant able to work with simple level of code so we using stream method for using the data from the big datas

const fs=require('fs')

const path=require('path')

const rs=fs.createReadStream(path.join(__dirname,'files','bigfile.txt'),{encoding:'utf8'})
const ws=fs.createWriteStream(path.join(__dirname,'files','new_bigfile.txt'))
const ws1=fs.createWriteStream(path.join(__dirname,'files','new_bigfile1.txt'))

//reading the data by using 'on lisener'
//to splite the data in small small here using the ---- datachunk
//after am writing from 'rs' to in new file ---- ws.write

rs.on('data',(dataChunk)=>{
    ws.write(dataChunk)
})

//efficient method

rs.pipe(ws1)