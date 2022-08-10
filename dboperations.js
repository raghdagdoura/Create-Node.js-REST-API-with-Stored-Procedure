var config = require('./dbconfig');
const sql = require('mssql/msnodesqlv8');


async function getDossier(){
    try{
        let pool = await sql.connect(config);
        let dossiers = await pool.request().execute('SPDossier_SelectAll7');
        return dossiers.recordsets;
    }
    catch(error) {
        console.log(error);

    }

}
module.exports = {
    getDossier : getDossier
}