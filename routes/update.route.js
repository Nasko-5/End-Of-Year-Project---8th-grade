const router = require('express').Router();

const cmd = require('node-cmd');

router.post('/update/:activate', async (req, res, next) => {
  const { activate } = req.params

  if (activate != 0){
    res.status(200).send({message:'fetched!'})
    cmd.run("git fetch")
    cmd.run("git pull")
  } else {
    res.status(418).send({message:'didn\'t fetch'})
    console.log("test")
  }
  
});

module.exports = router;
