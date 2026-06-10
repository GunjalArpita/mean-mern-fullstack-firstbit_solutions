const path=require('path')
console.log(path.basename('C:\MEAN & MERN\Nodejs\coremodules.js'))
console.log(path.extname('C:\MEAN & MERN\Nodejs\coremodules.js'))
console.log(path.dirname('C:\MEAN & MERN\Nodejs\coremodules.js'))
console.log("every detail in form of abject")
console.log(path.parse('C:\MEAN & MERN\Nodejs\coremodules.js'))
console.log(path.join('user','download','datetime.js'))

//os module
 const os=require('os')
 console.log(os.arch())
 console.log(os.cpus())
 console.log(os.constants)
 console.log(os.hostname())
 console.log(os.homedir())
 console.log(os.freemem())
 console.log(os.networkInterfaces())

 //for package.json-npm init
 //validators-npm i validator 
 const validate=require('validator')
const {rainbow}=require('chalk-animation')
 let isEmailvalid=validate.isEmail('abc@gmail.com')
console.log(isEmailvalid)
let username=''
console.log(validate.isEmpty(username))
let user='Arpita'
console.log(validate.isEmpty(user))
console.log(validate.isMobilePhone('654654'))
console.log(validate.isMobilePhone('654654'))
console.log(validate.isCreditCard('6537653653653'))
console.log(validate.isStrongPassword('A_1234a1')) //max 8 char,number,symbol,uppercase and lowercase
console.log(validate.isStrongPassword('1234'))

//chalk animation- npm i chalk-animation

// const ca=import('chalk-animation').then(a=>a.default)
// ca.then((c)=>c.rainbow('hello world'))
// ca.then((c)=>c.karaoke('hello world'))
// ca.then((c)=>c.neon('hello world'))
// ca.then((c)=>c.glitch('hello world'))

// let output=ca.then((c)=>rainbow('hello'))
// let str='Loading..'
// setTimeout(()=>{
//     output.then((o)=>o.replace(str+='.'))
// },2000)




