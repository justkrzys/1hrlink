let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  //Send test message to front-end
  res.send({message: "I think this should work..."});
});

module.exports = router;
