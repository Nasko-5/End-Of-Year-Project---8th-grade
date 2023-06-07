const router = require('express').Router();

router.get('/', async (req, res, next) => {
    res.render('index', { title: 'awsome test project'})
});

module.exports = router;
