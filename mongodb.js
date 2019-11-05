var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var customerObj = [
        {
            firstName: "Josh",
            lastName:"Joaquin",
            email:"j@gmail.com",
            phone:"1111111111"
        },
        {
            firstName: "Josh",
            lastName: "Joaqui",
            email: "jj@gmail.com",
            phone: "2222222222"
        },
        {
            firstName: "Josh",
            lastName: "Joaqu",
            email: "jjj@gmail.com",
            phone: "3333333333"
        },
        {
            firstName: "Josh",
            lastName: "Joaq",
            email: "jjjj@gmail.com",
            phone: "4444444444"
        },
        {
            firstName: "Josh",
            lastName: "Joa",
            email: "jjjjj@gmail.com",
            phone: "5555555555"
        }
    ];

    dbo.collection("customers").insertMany(customerObj,function(err,res){
        if (err) throw err;
        console.log("Num Of Docs: " + res.insertedCount)
    });
    db.close();
});