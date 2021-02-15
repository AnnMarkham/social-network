const router = require('express').Router();
const { getAllThoughts, addThought } = require('../../controllers/thought-controller');

// GET all thoughts: /api/thoughts
router.route('/').get(getAllThoughts);

// POST thought: /api/thoughts
router.route('/:userId').post(addThought);

module.exports = router;