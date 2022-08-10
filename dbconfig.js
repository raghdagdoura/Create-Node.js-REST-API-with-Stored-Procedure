//const sql = require ('mssql/msnodesqlv8');

//database configuration
var config={

    database: 'ProdInformations', //your database 
    server: 'databasedev1-a',
    driver: 'msnodesqlv8',
    port: 1433,
    options:{
        trustedConnection: true,
        enableArithPort: true,
        instancename:'SQLEXPRESS'

    },
    port: 1433
}
module.exports = config;