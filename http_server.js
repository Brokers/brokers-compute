var http = require("http");

module.exports.port = process.env.PORT || 5000;

module.exports.server = http.createServer(function(request,response){
    response.writeHeader(200, {"Content-Type": "text/plain"});  
    response.write("I'm awake.");  
    response.end();
    console.log("Awaker request.");
});

module.exports.start = function() {
    module.exports.server.listen(module.exports.port);
    console.log("Server Running on " + module.exports.port);
};
