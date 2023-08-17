const router = require('express').Router();
const {
  getUsers, //get all users
  getSingleUser, //get single user by _id. W/ THOUGHT AND FRIEND DATA
  createUser, // new user
  updateUser // via _id
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getUsers)
.post(createUser)
.put(updateUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser);

module.exports = router;
