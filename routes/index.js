

 
const express = require("express");
const router = express.Router();



 const shoppingLists = [
    {
    item: "perfume",
    item: "mama's jean",
 
    item3: "Roll on",

    item4: "lip gloss"
    }
 ];

 var id = "";

 //to get

 router.get(("/list"), (req, res) => {
    return res.json(shoppingLists);
 });

 // TO post

 router.post("/list", (req, res) =>{
    shoppingLists.push(req.body);
    return res.json("Done");
 })

 //GET/list/:id


 router.get("/list/:id", (req, res) =>{
    const getId = shoppingLists.find(val => val.id === Number(req.params.id));
    return res.json(getId)  
 });


 router.patch("/list/:id", (req, res) => { 
    const toPatch = shoppingLists.find(val => val.id === Number(req.params.id)); 
    toPatch.name = req.body.name; 
    return res.json("Patched");
 }); 


    router.delete("/list/:id", (req, res) => { 
    const toDelete = shoppingLists.findIndex(val => val.id === Number(req.params.id)); 
    shoppingLists.splice(toDelete, 1);
     return res.json("Deleted");
     }); 



 module.exports = router;
