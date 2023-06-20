const router = require('express').Router();

router.get('/school', async (req, res, next) => {
    res.render('school')
});

module.exports = router;
