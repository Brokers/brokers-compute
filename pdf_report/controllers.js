var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');
var _ = require('underscore');
var Q = require('q');
var Firebase = require("firebase");
var settings = require("../settings");

var options = {
    // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
    "format": "Letter",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait", // portrait or landscape

    // Page options
    "border": "0",             // default is 0, units: mm, cm, in, px

    // File options
    "type": "pdf",             // allowed file types: png, jpeg, pdf
    "quality": "100",           // only used for types png & jpeg

    // Script options
    "timeout": 30000,           // Timeout that will cancel phantomjs, in milliseconds
};

var conductColors = {
    'D': 'rgb(238, 48, 45)',
    'I': 'rgb(125, 166, 72)',
    'S': '#774491',
    'C': '#0066B7',
};

/* Helper function to wrap Firebase's once 'value' calls into promises */
function getValuePromise(path) {
    return Q.Promise(function(resolve, reject) {
        new Firebase(settings.FIREBASE_URL + path)
        .once('value',
            function(snapshot) { resolve(snapshot); },
            function(error) { reject(error); }
        );
    });
}

module.exports = {
    generateReport: function (req, res) {
        var templatePath = path.join(__dirname, 'report.html');
        var templateHtml = fs.readFileSync(templatePath, 'utf8');
        var testId = req.params.testId;

        //Get the test
        getValuePromise('tests/' + testId)
        .then(function(testSs) {
            if(!testSs.exists()) {
                return Q.fcall(function () {
                    throw new Error("Test not found");
                });
            } else {
                var test = testSs.val();
                var results = test.results;
                return [
                    test,
                    // Get the user:
                    getValuePromise('users/' + test.user_id),
                    // Get the main conduct information:
                    getValuePromise('report_information/conducts/' + results.conducts[0]),
                    // Get the secondary conduct information:
                    getValuePromise('report_information/conducts/' + results.conducts[1]),
                    // Get the natural profile information:
                    getValuePromise('report_information/personalities/' + results.natural_profile),
                    // Get the adapted profile information:
                    getValuePromise('report_information/personalities/' + results.adapted_profile),
                ];
            }            
        })
        .spread(function(test, userSs, mainConductSs, secondaryConductSs, naturalProfileSs, adaptedProfileSs) {
            var results = test.results;
            var user = userSs.val();
            var mainConduct = mainConductSs.val();
            var secondaryConduct = secondaryConductSs.val();
            var naturalProfile = naturalProfileSs.val();
            var adaptedProfile = adaptedProfileSs.val();

            var mainConductColor = conductColors[results.conducts[0]];
            var secondaryConductColor = conductColors[results.conducts[1]];

            var context = {
                "{{base_folder}}": path.join('file://', __dirname),
                "{{fullname}}": user.name,

                "{{main-conduct-letter}}": results.conducts[0],
                "{{main-conduct-title}}": mainConduct.title,
                "{{main-conduct-color}}": mainConductColor,
                "{{main-conduct-best_leader}}": mainConduct['best_leader'],
                "{{main-conduct-description}}": mainConduct['description'],
                "{{main-conduct-desires}}": mainConduct['desires'],
                "{{main-conduct-motivation}}": mainConduct['motivation'],
                "{{main-conduct-to_learn}}": mainConduct['to_learn'],

                "{{secondary-conduct-letter}}": results.conducts[1],
                "{{secondary-conduct-title}}": secondaryConduct.title,
                "{{secondary-conduct-color}}": secondaryConductColor,
                "{{secondary-conduct-best_leader}}": secondaryConduct['best_leader'],
                "{{secondary-conduct-description}}": secondaryConduct['description'],
                "{{secondary-conduct-desires}}": secondaryConduct['desires'],
                "{{secondary-conduct-motivation}}": secondaryConduct['motivation'],
                "{{secondary-conduct-to_learn}}": secondaryConduct['to_learn'],
            };

            _(context).each(function(value, key) {
                templateHtml = templateHtml.split(key).join(value);
            });

            pdfPromise = Q.Promise(function(resolve, reject) {

                pdf.create(templateHtml, options).toStream(function(err, stream){
                    if (err) reject(err);
                    else {
                        stream.pipe(res);
                        resolve();
                    }
                });
            });

        })
        .catch(function(error) {
            console.error(error);
            res.status(500).send(error.toString());
        });

    }
};