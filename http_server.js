var express = require('express');
var app = express();
var PORT = Number(process.env.PORT) || 5000;

var PDFReportControllers = require('./pdf_report/controllers.js');

app.get('/', function(req, res) {
    res.status(200).send("I'm awake.");
});

app.get('/pdf_report/:testId', PDFReportControllers.generateReport);

var start = function() {
    module.exports.server = app.listen(PORT, function () {
        var host = module.exports.server.address().address;
        var port = module.exports.server.address().port;

        console.log('Server running at http://%s:%s', host, port);
    });
};

module.exports.port = PORT;
module.exports.app = app;
module.exports.start = start;