const router = require('express').Router();

router.get('/aboutme', async (req, res, next) => {
    res.render('aboutme')
});

module.exports = router;
