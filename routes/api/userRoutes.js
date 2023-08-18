const router = require('express').Router();
const {
  getUsers, //get all users
  getSingleUser, //get single user by _id. W/ THOUGHT AND FRIEND DATA
  createUser, // new user
  updateUser,
  deleteUser, // via _id
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getUsers)
.post(createUser)


// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
