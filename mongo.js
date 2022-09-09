
let express = require("express");
let app = express();
const mongoose = require('mongoose');
const userModel = require('./model');
const user = require('./model');
app.use(express.json());

const url = 'mongodb://localhost/infodb';

mongoose.Promise = global.Promise
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true})
const conn = mongoose.connection

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.post('/addUser', async (req, res) => {

    try {
        let user = new userModel(req.body);
        await user.save();
        res.send(user);
    }
    catch(error)
    {
        res.status(500).send(error);
        
    }
});

app.get('/getUsers', async (req, res) => {
    try {
        let user1 = await userModel.find({})
        res.send(user1);
    }
    catch(error) {
        res.status(500).send(error);
    }

});
app.patch('/update/:name', async (req, res) => {
    try {
        let user2 = await(user.findOneAndUpdate({name:req.params.name},req.body,{new:true,useFindAndModify:false}));
        res.send(user2);
    }
    catch(error) {
        res.status(500).send(error);
    }
})
app.get('/getUser/:name', async (req, res) => {
    try {
        let user4 = await(user.findOne({name:req.params.name}));
        res.send(user4);
    }
    catch(error) {
        res.send('user is not found in db');
    }

})
app.delete('/delete/:name', async (req, res) => {
    try {
        let user3 = await(user.deleteOne({name:req.params.name}));
        res.send('deleted sucessfully');
    }
    catch(error) {
        res.status(500).send(error);
    }

})

app.listen(2000, () => {
    console.log('server is working on 2000');
});