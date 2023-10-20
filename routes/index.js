const express = require("express");
const router = express.Router();



 const shoppingLists = [
    {
    item: "perfume",
    price: 3500
    },

    {
      item: "mama's jean",
      price: 7000
    },
    {
      item: "Roll on",
      price: 1500
    }, 

    {item: "lip gloss", 
    price: 1000
   }
   
    
 ];


 //to get

 router.get(("/list"), (req, res) => {
    return res.json(shoppingLists);
 });

 // TO post

 router.post("/list", (req, res) =>{
    shoppingLists.push(req.body);
    return res.json("Done");
 })

 //GET/list/:item

 router.get("/list/:item", (req, res) =>{
   const itemId = req.params.item;
   const item = shoppingLists.find((i) => i.item === itemId);
   return res.json(item);
 } );


// To Patch

 router.patch("/list/:item", (req, res) =>{
   const itemId = req.params.item;
   const item = shoppingLists.find((i) => i.item === itemId);
   item.item = req.body.item;
   item.price = req.body.price;
   return res.json("Patched");
 });


//To delete
 router.delete("/list/:item", (req, res) =>{
   const itemId = req.params.item;
   const itemIndex = shoppingLists.findIndex((i) => i.item === itemId);
   shoppingLists.splice(itemIndex, 1);
   return res.json("Deleted");

});




 module.exports = router;
