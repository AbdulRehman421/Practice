
// IIFE
// (
//     function (name) {
//     console.log(name)
//     }
// )
// ('Abdul')

// Node Js Source Code
// const wrapper = ['(function(exports, require,module,__filename ,__dirname)

// 1. npm modules
const color = require('cli-color');
console.log(color.yellow('hello'))

// 2. local Module

// const auth = require('./auth')
// auth.register('abdul')
// auth.login('abdul')

// 3. Core module

const path = require('path')
// 3.1. dirname gives folder name
// console.log('folder name:', path.dirname(__filename))
// 3.2. dirname gives file name
// console.log('File name:', path.basename(__filename))
// 3.3. extname gives Extension  name
// console.log('Extension name:', path.extname(__filename))
// Parse returns root, dir, base ext and name 
// console.log('Parse:', path.parse(__filename))

// join

// console.log('folder name:', path.join(__dirname, 'order', 'app.js'))


// File System

const fs = require('fs')
const { join } = require('path')

// mak3e a directory
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('Folder create')
// }
// )


// create a file
// it takes 3 parameter, 
// directory name, content, error
// fs.writeFile(path.join(__dirname, 'test', 'test.txt'),
//     'Hello world', (err) => {
//         if (err) {
//             throw err
//         }
//         // to add data 
//         fs.appendFile(path.join(__dirname, 'test', 'test.txt'), '  Additional greetings', (err) => {
//             if (err) { throw err }
//             console.log('Data Updated')
//         })

//         console.log('File created')
//     })


// read a file
// gives buffer

// fs.readFile(join(__dirname, 'test', 'test.txt'),
//     (err, data) => {
//         if (err) {
//             throw err
//         }
//         const content = Buffer.from(data)
//         console.log(content.toString())
//     })

// Without buffer

// fs.readFile(join(__dirname, 'test', 'test.txt'), 'UTF-8',
//     (err, data) => {
//         if (err) {
//             throw err
//         }
//         console.log(data)
//     })

// OS Module

const os = require('os');
// console.log(os.hostname()) // hostname
// console.log(os.platform()) // platform
// console.log(os.type()) // type
// console.log(os.arch()) // architecture
// console.log(os.cpus()) // cpus
// console.log('free Memory ', os.freemem()) // freememory
// console.log('free Memory ', os.totalmem()) // total memory
// console.log(os.uptime())


// Events Module, it reyrns class

// const Emitter = require('events');
// const { SlowBuffer } = require('buffer');

// // const myEmitter = new Emitter()
// // myEmitter.on('register', (data) => {
// //     console.log(data)
// // })

// // myEmitter.emit('register',
// //     {
// //         name: 'abdul'
// //     })


// class Auth extends Emitter {
//     redister(username) {
//         console.log('registered Sucessfuly Welcome to our Family', username)
//         this.emit('registered', username)
//     }

// }

// const authentication = new Auth()


// authentication.on('registered', (data) => {
//     console.log(`sending email to ${data}`)
// })

// authentication.on('registered', (data) => {
//     console.log(`sending image to ${data}`)
// })

// // we can add multiple listerns on one event

// authentication.redister('saif')



// HTTP

