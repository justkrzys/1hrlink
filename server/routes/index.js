let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  //Send test message to front-end
  res.send({message: "It does work!"});
});

router.post('/', (req, res) => {
  //Get POST request from client
  let response = "Received POST from client! Link: " + req.body.link;
  res.send({message: response});
});

module.exports = router;
