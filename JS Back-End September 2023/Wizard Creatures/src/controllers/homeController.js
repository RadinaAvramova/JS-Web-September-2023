const router = require('express').Router();

const creatureService = require('../services/creatureService'); // for profile 
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
   // console.log(req.user)
    res.render('home')
});

router.get('/404', (req, res) => {
    res.render('404');
});

router.get('/profile', isAuth, async (req, res) => {
    const creatures = await creatureService.getByOwner(req.user._id).lean();
 
    res.render('profile', { creatures, }) 
    });

module.exports = router;
