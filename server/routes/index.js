let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Hashes = require('jshashes');
let RandomStr = require('randomstring');

let connection = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@1hrlink.zjcmt.mongodb.net/1hrlink?retryWrites=true&w=majority";
mongoose.connect(connection,{useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log("Connection successful!");
});

let urlSchema = new mongoose.Schema({
  longURL: {
    required: true,
    type: String
  },
  shortURL: {
    required: true,
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  expireAt: {
    required: true,
    type: Date,
  }
});
urlSchema.index({expireAt: 1}, {expireAfterSeconds: 0});
let LinkModel = mongoose.model('url', urlSchema);

let MD5 = new Hashes.MD5;

/* GET home page. */
router.get('/', (req, res) => {
  //Send test message to front-end
  res.send({message: "It does work!"});
});

router.get('/:shortLink', (req, res) =>{
  //shortLink here is 1hrlink.com/shortLink where shortLink is the hash
  let url = req.params.shortLink;

  LinkModel.findOne({shortURL: url}, (err, doc) => {
    if(err){
      console.log(err);
    }
    if(!doc){
      res.redirect("http://localhost:3000/404");
    }
    else{
      res.redirect("http://" + doc.longURL);
    }
  });
});

router.post('/', (req, res) => {
  //Get POST request from client
  let link = req.body.link;
  //option for specifying shortened url length, here 7
  //let urlLength = req.body.length;
  let urlLength = 7;
  let salt = RandomStr.generate(urlLength);
  let linkHash = MD5.hex_hmac(link, salt);
  let shortLink = linkHash.substring(1, 8);
  //time before link expires
  let expireDuration = req.body.time;
  let expireTime = new Date(Date.now() + expireDuration*60000);

  //create new MongoDB document and save it to the database
  let newLink = new LinkModel({longURL: link, shortURL: shortLink, expireAt: expireTime});
  newLink.save((err) => {
    if (err) return console.log(err);
  });

  console.log(shortLink);
  res.send({shortURL: shortLink});
});

module.exports = router;