let event = require("events");
let eventEmitter = new event.EventEmitter();
let orderHandler = function pizza () 
{
    console.log("ordered the pizza");

    eventEmitter.emit("pizza received");
};

eventEmitter.on('order' , orderHandler);

eventEmitter.on("pizza received" , function()
{
    console.log("pizza received sucessfully");

} );
eventEmitter.emit("order");