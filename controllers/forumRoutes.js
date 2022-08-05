const router = require('express').Router();

router.get('/forum', async (req, res) => {
    res.render('forum', {layout: ''});
})

// router.get('/forum/:post_id', async (req, res) => {
//     res.render('post', {layout: ''});
// })

module.exports = router;