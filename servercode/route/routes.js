var express = require('express');
var router = express.Router();
const Item =require('../model/shopingItem');

router.get('/items',(req, res, next)=>{
    //return all the data inside the database
    Item.find(function(err, items){
        if(err){
            res.json(err);
        }
        else {
            res.json(items);
        }

    });
});

router.post('/item',(req, res, next)=>{
    let newShoppingItem = new Item({
        itemName: req.body.itemName,
        itemDesc: req.body.itemDesc,
        itemPrice: req.body.itemPrice,
        itemPic: req.body.itemPic,
        itemCat: req.body.itemCat,

    });

    newShoppingItem.save((err,item)=>{
        if (err){
            res.json(err);
        }
        else {
            res.json({msg: 'Item has been added to db'});
        }
    });
});   

router.put('/item/:id',(req, res, next)=>{
    Item.findOneAndUpdate({_id:req.params.id},{
        $set: {
            itemName: req.body.itemName,
            itemDesc: req.body.itemDesc,
            itemPrice: req.body.itemPrice,
            itemCat: req.body.itemCat,
            itemPic: req.body.itemPic
        }
        },

        function (err,result){
            if (err){
                res.json(err);
            }
            else {
                res.json(result);
            }

    });
});


router.delete('/item/:id',(req, res, next)=>{
    Item.remove({_id:req.params.id},
    function (err,result){
        if (err){
            res.json(err);
        }
        else {
            res.json(result);
        }

    
    });

});

module.exports = router; 
 
