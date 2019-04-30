//file that create mongo db schema 
const mongoose =require('mongoose');
const shoppingItemSchema = mongoose.Schema({



    itemName: {
        type: String,
        required:true, //champ obligatoire
    },
    itemDesc: {
        type: String,
        required:true, //champ n'est pas obligatoire
        },
    itemPrice: {
        type: String,
        required:true, //champ n'est pas obligatoire
        },
    itemPic: {
        type: String,
        required:true, //champ n'est pas obligatoire
        },
        
    itemCat: {
        type: String,
        required:true, //champ n'est pas obligatoire
        },

});

//export the schema 
const Item = module.exports= mongoose.model('Item',shoppingItemSchema);