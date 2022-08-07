const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('login', {layout: 'home'});
})

module.exports = router;