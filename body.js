let express = require("express");
let app = express();
let bodyParser = require("body-parser");
urlencodedParser = bodyParser.urlencoded({extended : false});
app.use(express.static("express.js"));
app.get("/", function(req, res)
{
    res.send(__dirname + "/", + express.js);

})
app.post("/process_post", urlencodedParser, function(req, res)
{
    response = {
        first_Name : req.body.first_name,
        last_Name : req.body.last_name,
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
server = app.listen(9081, function()
{
    host = server.address().address;
    port = server.address().port;
    console.log("porty is working on so carry on" , host, post);
})