var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
exports.index = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {
            var dbo = db.db("mydb");
            dbo.collection("customers").find({}).toArray(function(err,result){
                res.json({
                    status:"Success!",
                    data:result
                })
            })
        }
        
    });
};



