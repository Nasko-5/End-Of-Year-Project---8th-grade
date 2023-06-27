const router = require('express').Router();

router.get('/mediaview', async (req, res, next) => {
    res.render('mediaview')
});

module.exports = router;
