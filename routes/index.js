/* to do:

1. edit endpoints to remove them sending back the data.
2. edit endpoints to allow update/create both
3. edit creation endpoints to auto create credentials
 */

//fix massive queries to reduce
const express = require('express');
const app = express();
const port = 3002;
const massive = require("massive");
const http = require('http');
const bodyParser = require("body-parser");
const long_distance = 9999999;
const randomstring = require("randomstring");

var connectionString = "postgres://anantbhushanbatra:@localhost/binbillings";
var date = new Date();

massive(connectionString).then(massiveInstance => {
    app.set('db', massiveInstance);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(bodyParser.urlencoded({
    extended: true
}));

//used to test connection
app.get('/test', (req, res) => {
    res.send("Hello.");
});

////////////////////////////////////
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

app.get('/getStatus', function(req, res, next) {
    rl.question('\nIs this bin available? (Enter Bin ID to confirm) ', (answer) => {
        res.send(answer);
    })
});

app.get('/getWeight', function(req, res, next) {
    rl.question('What is the weight? ', (answer) => {
        res.send(answer);
    })
});