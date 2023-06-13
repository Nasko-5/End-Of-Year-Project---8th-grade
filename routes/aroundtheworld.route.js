const router = require('express').Router();

router.get('/aroundtheworld', async (req, res, next) => {
    res.render('aroundtheworld')
});

module.exports = router;
