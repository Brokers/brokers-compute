//Constants
var FIREBASE_URL = "https://brokers.firebaseio.com//";
var FIREBASE_SECRET = "pOpVeglX0R7saK1a9F4NYAbSPBARynHrleGeB2ms";
var EMAIL = "brokers.inndutainment@gmail.com";
var EMAIL_PASSWORD = "somosheroes";

//Imports
var Firebase = require("firebase");
var _ = require("underscore");
var nodemailer = require('nodemailer');
var DISC = require("./DISC.js")();
var http_server = require('./http_server.js');

//Spawns
var ref = new Firebase(FIREBASE_URL);

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD
    }
});

function main() {
    console.log("Starting Brokers compute server.");

    ref.authWithCustomToken(FIREBASE_SECRET, function(error, authData) {
      if (error) {
        console.error("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        start();
      }
    });
}

function start() {
    watchForTestChartUpdates();
    watchForNewTests();

    http_server.start();
}

//Watchers

function watchForTestChartUpdates() {
    ref.child("test_chart").on("value", function(dataSnapshot) {
        DISC.test_chart = dataSnapshot.val();

        console.log("Test Chart changed " + JSON.stringify(DISC.test_chart));
    });
}

function watchForNewTests() {
    ref.child("tests").on("child_added", function(testSnapshot) {
        var test = testSnapshot.val();
        
        console.log("New test " + JSON.stringify(test));

        if(test.stage != 'computed') {
            watchForTestToCompute(testSnapshot.ref());
        }
    });
}

function watchForTestToCompute(testRef) {
    var ref = testRef.child("stage");

    var listener = ref.on("value", function(dataSnapshot) {
        var stage = dataSnapshot.val();
        if(stage == 'answered') {
            testRef.child("answers").once("value", function(answers_snapshot) {
                var answers = answers_snapshot.val();
                console.log("Test answered " + JSON.stringify(answers));

                var results = DISC.calculateTest(answers);
                console.log("Test Computed " + JSON.stringify(results));
                
                testRef.child("results").set(results);
                ref.set("computed");
            });
            ref.off("value", listener);
        }
    });
}

//Operations
function sendResultEmail(testRef) {
    var content = 
        "Este es el resultado de tu prueba DISC: \n" +
        'LINK' +
        " \nPuedes haceder a este link siempre que quieras ver tu resultado o puedes " +
        "entrar a la página e introducir el código de tu test.";

    var mail = {
        from: 'Brokers <'+EMAIL+'>',
        to: 'bar@blurdybloop.com, baz@blurdybloop.com',
        subject: 'Prueba DISC',
        text: content,
        html: content
    };

    transporter.sendMail(mail, function(error, info){
        if(error){
            console.error(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
}


main();