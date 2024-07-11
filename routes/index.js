const express = require('express');
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");

router.get('/', (req, res) => {
    // You can define the error variable here or retrieve it from somewhere
    const error = req.query.error || ''; // Default to an empty string if no error

    res.render('index', { error });
});

router.get("/shop", isloggedin, (req,res)=>{
    res.render("shop");
})

module.exports = router;
