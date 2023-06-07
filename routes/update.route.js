const router = require('express').Router();

const cmd = require('node-cmd');

router.post('/update/:activate', async (req, res, next) => {
  const { activate } = req.params

  if (activate != 0){
    res.status(200).send({message:'fetched!'})
    cmd.run("git fetch")
    console.log("this should display after fetch was ran")
    cmd.run("git pull")
    console.log("this should display after pull was ran")
  } else {
    res.status(418).send({message:'didn\'t fetch'})
    console.log("test")
  }
  
});

module.exports = router;
