const router = require('express').Router();

router.get('/clock', async (req, res, next) => {
    res.render('clock')
});

module.exports = router;
