let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  //Send test message to front-end
  res.send({message: "It does work!"});
});

module.exports = router;
