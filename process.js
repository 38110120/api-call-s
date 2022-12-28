let express = require("express");
let app = express();

app.use(express.static("express.js"));
app.get("/ind.html", function(req, res)
{
    res.send(__dirname + "/" + "ind.html");
})
app.get("/process_get", function(req, res)
{
    response = {
        first_name : req.query.first_name,
        last_name : req.query.last_name,
    };
    console.log(response);
    res.end(JSON.stringify(response));

})
let server = app.listen(9020, function(req, res)
{
    host = server.address().address;
    port = server.address().port;
    console.log("port is working correctly", host,port);
})