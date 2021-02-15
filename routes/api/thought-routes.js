const router = require('express').Router();
const { getAllThoughts, addThought, addReaction, getThoughtById, updateThought } = require('../../controllers/thought-controller');

// GET all thoughts: /api/thoughts
router.route('/').get(getAllThoughts);

// POST thought: /api/thoughts/:userId
router.route('/:userId').post(addThought);

//Add Reaction  POST:  /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// GET one and PUT thought by ID: /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(updateThought);


module.exports = router;