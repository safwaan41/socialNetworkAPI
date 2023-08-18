const router = require('express').Router();
const {
  getThoughts, // get ALL thoughts
  getSingleThought, // get ONE thought by its _id (thought id)
  createThought, //POST push thought id to associated users thought []
  updateThought, // PUT update thought by thought id
  deleteThought, 
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
.get(getThoughts)
.post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reactions')
.post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:_id')
.delete(deleteReaction);

module.exports = router;
