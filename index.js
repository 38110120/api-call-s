
let express = require("express");
let app = express();
let fs = require("fs");
const mongoose = require('mongoose');
let path = require('path');
let data = require("./users.json");
const userModel = require('./model');
app.use(express.json())

mongoose.connect = ('mongodb://localhost:27017/info',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.get("/listUsers", async (req, res) =>
{
    
    const users = await res.json(data);
    console.log(users);
});

app.post('/postUser', async (req, res) =>
{
//    let user = {"id":7, "name": "Kiran", "city":"Kanchikacherla"};
//    console.log(`User : ${JSON.stringify(user)}`);
//    data.push(user);
      console.log(req.body);
      await data.push(req.body);
      res.send(data);

});
// app.delete('/deleteUser/:name', function (req, res) {
//     // First read existing users.
//     fs.readFile( __dirname + '/' + 'users.json', 'utf8', function (err, data) {
//        delete data[req.params.name];
//        console.log(data);
//        res.end(JSON.stringify(data));
//     });
//  })
 
//var deleteData;
app.delete('/delUser/:name', async (req, res) => {
    const name = req.params.name;
    //deleteData = data.filter((users) => users.name == name);
    //console.log(JSON.stringify(deleteData));
    data = await data.filter((users) => users.name != name);
    console.log(data);
    res.send(`the user is deleted with this name ${name}`);
})
 server = app.listen(8002, function()
{
    console.log("the server is working on port");
})
