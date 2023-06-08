const router = require('express').Router();

router.get('/radical', async (req, res, next) => {
    res.render('radical')
});

module.exports = router;
