const router = require('express').Router();
const { Plants } = require('../models/plants');

router.get('/communities', async (req, res) => {
    console.log('TEST');
    res.render('test', {layout: 'main'});
})

module.exports = router;