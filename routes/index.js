var express = require('express');
var router = express.Router();

var userModel = require("./users");
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post("/create",function(req,res)
{
  userModel.create(
    {
      name : req.body.name,
      age : req.body.age,
      username : req.body.username
    }
  )
  res.send("submited");
})

router.get("/read/:id",function(req,res)
{
  userModel.findOne({_id:req.params.id})
  .then(function(user)
  {
    res.send(user);
  })

})

module.exports = router;
