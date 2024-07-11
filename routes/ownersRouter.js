const express = require('express');
const router = express.Router();
const ownerModdel = require("../models/owners-model");

router.get("/", (req,res)=>{
    res.send("hei its working");
})

if(process.env.NODE_ENV === "development"){
    router.post("/create", async(req,res)=>{
        let owners = await ownerModdel.find();
        if(owners.length > 0){
            return res.status(504).send("You don't have permission to create a new owner");
        }
        else{
            let {fullname, email, password} = req.body;
            let createdOwner = await ownerModdel.create({
                fullname,
                email,
                password
                 
            })
            return res.status(201).send(createdOwner);
        }
       
    });
}


module.exports = router;