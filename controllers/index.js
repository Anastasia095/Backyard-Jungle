const router = require('express').Router();
const communityRoutes = require('./communitiesRoutes');
const forumRoutes = require('./forumRoutes')
const homepageRoutes = require('./homepageRoutes')
const userRoutes = require('./api/userRoutes')

router.use('/', communityRoutes);
router.use('/', forumRoutes)
router.use('/', homepageRoutes)
router.use('/api', userRoutes)

module.exports = router;
