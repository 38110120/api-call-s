let fs = require("fs");
let path = require('path');
let fsPromises = require('fs').promises;

fs.readFile(path.join(__dirname, 'files', 'text.txt'), 'utf8', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
})
console.log('hellow world..');

process.on('uncaughtException', err => {
    console.log(`the uncaugth error is : ${err}`);
    process.exit(1);
})



fs.writeFile(path.join(__dirname, 'files', 'starter.txt'), 'hi my name is srikanth', (err) => {
    if(err){
        throw err;
    }
    console.log('write complete');
});

fs.writeFile(path.join(__dirname, 'files', 'starter.txt'), 'hi my name is srikanth', (err) => {
    if(err){
        throw err;
    }
    console.log('write complete');

fs.appendFile(path.join(__dirname, 'files', 'starter.txt'), '\n \n\n hi is this a nice place to sit.', (err) => {
    if(err){
        throw err;
    }
    console.log('attaching complete');

    fs.rename(path.join(__dirname, 'files', 'starter.txt'), path.join(__dirname, 'files', 'newone.txt'), (err) => {
    if(err){
        throw err;
    }
    console.log('rename complete');
})
})
})

fs.appendFile(path.join(__dirname, 'files', 'menu.txt'), 'could you tell the menu what is their in it', (err) => {
    if(err){
        throw err;
    }
    console.log('append complete');
})
