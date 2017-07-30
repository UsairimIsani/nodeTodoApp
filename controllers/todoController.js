let data =[{item:"todos"},{item:"WAlk"}]
let bodyParser = require('body-parser');
let bodyMid = bodyParser.urlencoded({extended:false});
module.exports=function(app){

app.get('/',function(req,res){
    res.render('index',{todos:data})
})

app.post('/',bodyMid,function(req,res){
    data.push(req.body)
    console.log("DATA", data)
    res.json(data);
})


app.delete('/:item',function(req,res){
    data =data.filter(function(data){
        return data.item.replace(/ /g,'-') !== req.params.item
    })
    res.json(data);
})





}