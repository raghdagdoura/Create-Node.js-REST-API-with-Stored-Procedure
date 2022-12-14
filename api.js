const dboperations = require('./dboperations');
var db = require('./dboperations');
var Dossier = require('./order');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);



router.use((request,response,next) => {

    console.log('middleware');
    next();

})

router.route('/dossiers').get((request,response) =>{

    dboperations.getDossier().then(result => {

        //console.log(result);
        response.json(result[0]);

    })
})



var port = process.env.PORT || 8090;
app.listen(port);
console.log('dossier api is running at ' + port);


