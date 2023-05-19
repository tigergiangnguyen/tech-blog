const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require('bcrypt');

// POST route that takes in data to create a new user
router.post('/signup', async (req, res) => {
  try {
    const newUserData = new User();
    newUserData.username = req.body.username;
    newUserData.email = req.body.email;
    newUserData.password = req.body.password;

    const userData = await newUserData.save();

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// Login the user that already signed up
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
});

// End session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});
  
module.exports = router;