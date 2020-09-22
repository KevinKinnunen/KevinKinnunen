  
var { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017/";


exports.updateDb = function (fname, lname)
{
    console.log("test")
    MongoClient.connect(url, function (err, db){
        if (err) throw err;
        var dbo = db.db("test");
        var query = {fname: `${fname}`, lname: `${lname}`};
        
        dbo.collection("WEBWEB").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log("DEBUG")
            console.log(result);
            if (result.length != 0) {
                console.log("person already exists in db");
                db.close();
            }else{
                var myobj = { fname: `${fname}`, lname: `${lname}` };
                dbo.collection("WESWEB").insertOne(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                });
            }
        });
    });
}