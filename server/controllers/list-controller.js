var DemoList = require("../models/demo-list");

module.exports.addName = function(req, res){
    
    var list = new DemoList(req.body);
    var result = list.save(function (err, result){
        res.json(result);
    });
}

module.exports.list = function(req, res){
    
    DemoList.find({},function(err, results){
        res.json(results);
    });
    
}