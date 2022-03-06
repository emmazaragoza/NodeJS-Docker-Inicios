const express = require('express');
const router = express();


router.get("/", async (req, res) => {
    res.json({message: "Hello World!"});
})

module.exports = router