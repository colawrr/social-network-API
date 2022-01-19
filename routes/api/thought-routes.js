const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

router.route('/:thoughtId').post(addThought);
router.route('/:thoughtId').post(removeThought);

router
  .route('/:thoughtId/:reactionId')
  .put(addReaction)
  .delete(removeReaction)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router; 