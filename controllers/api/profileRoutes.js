const router = require('express').Router()
const { Comment, User, Post, Collection, Plants } = require('../../models')
const withAuth = require('../../utils/auth')


///THIS IS GETTING THE POSTS
router.get('/', async (req, res) => {
  console.log("session ID");
  console.log(req.session.user_id)
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          where: {
            id: req.session.user_id
          }
        }
      ]

    })

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    })

    const user = userData.get({ plain: true })
    // Serialize data so the template can read it
    const post = postData.map((post) => post.get({ plain: true }))

    const collectionData = await Collection.findAll({
      // where: user_id = req.session.user_id,
      include: [
        {
          model: Plants,
        }
      ]
    });
    
    // Serialize data so the template can read it
    const collection = collectionData.map((collection) => collection.get({ plain: true }));

    let cplants = [];
    let uID = req.session.user_id;
    for (var i = 0; i < collection.length; i++) {
      if(collection[i].user_id == uID){
        cplants[i] = collection[i].plants[0];
      }
    }
    if (cplants.length == 0){
      res.render('profile-dashboard', { layout: 'main', post, ...user });
    } else {
      res.render('profile-dashboard', { layout: 'main', post, ...user , cplants});
    }

  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name']
        }
      ]
    })

    const post = postData.get({ plain: true })

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
})



/////THIS IS GETTING THE COMMENTS


// router.get('/', async (req, res) => {
//   try {
//     // Get all comments and JOIN with user data
//     const commentData = await Comment.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['user_name']
//         }
//       ]
//     })


//     // Serialize data so the template can read it
//     const comment = commentData.map((comment) => comment.get({ plain: true }))

//     // Pass serialized data and session flag into template
//     res.render('profile-dashboard', { layout: 'main' })
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

router.get('/comment/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name']
        }
      ]
    })

    const comment = commentData.get({ plain: true })

    res.render('comment', {
      ...comment,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
})


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile')
    return
  }
  res.status(200)

})

router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id)
    if (!userData) {
      res.status(404).json({ message: 'No user with this username!' })
      return
    }
    const user = userData.get({ plain: true })
    res.json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})
module.exports = router