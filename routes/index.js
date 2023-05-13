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
router.get("/read",function(req,res)
{
  userModel.find().then(function(alluser)
  {
    res.send(alluser);
  })
})
router.get("/read/:id",function(req,res)
{
  userModel.findOne({_id:req.params.id})
  .then(function(user)
  {
    res.send(user);
  })

})  

router.get("/delete/:id",function(req,res)
{
  userModel.findOneAndDelete({_id : req.params.id})
  .then(function()
  {
    res.redirect("/read");
  });
})

router.get("/update/:id/:newValue",function(req,res)
{
  userModel.findOneAndUpdate({_id: req.params.id},{name : req.params.newValue},{new : true})
  .then(function(val)
  {
    res.send(val);
  })
})

module.exports = router;
