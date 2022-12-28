const e = require("express");

const liger = function bro () {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 2000)
    })
  }

const ram = async function() {
    const sita = await liger();
    return sita + '\nwhat is this something bro';
}

const beemisara = async function() {
    const gupta = await ram();
    return gupta + '\nyeah i done something';
}
beemisara().then(function(res){
    console.log(res);
})


const getFirstUserData = async () => {
    const response = await fetch('/users.json'); // get users list
    const users = await response.json(); // parse JSON
    const user = users[0]; // pick first user
    const userResponse = await fetch(`/users/${user.name}`); // get user data
    const userData = await userResponse.json(); // parse JSON
    return userData;
  };
  
  getFirstUserData();
  