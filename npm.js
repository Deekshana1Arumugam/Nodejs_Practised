//Inside JavaScript the people need to  share their code for that npm js is very much usefull
//center of javascript code sharing

//npm -- node package manager
//in development side nodemon is best package for developing 
//------------------------------------------------------------------

//::HOW TO INSTALL GLOBALLY::

//  npm i nodemon -g
// to install - i
// for global install - g , it will stored in system itself


console.log("testing")
/*
if we use nodemon whatever changes may occur in the code place the  process will be running in the node terminal simultaneously

this will helpful to launch the applications

IMPORTANT - NODEMON

TO CLOSE  NODEMON WE USE THE --- CONTROL C

---------------------------------------------------------------------------------------

ONLY ON MY PROJECT HOW TO INSTALL PACKAGES??


step 1: initialize npm -- init
step 2: click - enter continuosly and check for initialize the npm we created the 
package.json 


npm intsall any modules like date-fns

it will create package-lock.json file

inside --- "dependencies": { -- production dependencies 
    
    "date-fns": "^3.4.0"
}
>>>>
meaning for installing package to our projects::

it will create node_modules inside there will be date-fns package where some written the code  here we installed inside our projects

for sharing folder to someone means we dont share entire folder in the git
here we use .gitignore file we create and add whatever need to ignaode we put inside to it so we can able to ignore the files while uploading in git.


*/
//using the date-fns 
//particular function using " fromat " 
const { format }=require('date-fns')
console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss')) //create new date and time
/*
//to install development dependencies ---- npm i nodemon -D
//after need to add inside script ===>> start:node <file name>, dev : nodemon <file name>
//then run as ---- npm run dev in terminal


// to add normal package in the npm -- npm i uuid
it will show as "uuid : "^9.0.0" - major.minor.patch

npm update - to update it for new version install

^ -does not allow to update major version
~ -does not allow to update both major and minor version
* -to update everything 

to install particular version - npm i uuid@8.5.2

to remove -- npm uninstall or un or rm 

npm rm nodemon -D

UUID-UNIVERSALLY UNIQUE ID
*/
const {v4:uuid}=require('uuid')
console.log(uuid())