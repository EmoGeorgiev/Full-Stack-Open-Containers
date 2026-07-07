const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const current = await redis.get('added_todos')

  res.json({
    added_todos: current ? Number(current) : 0
  })
})

module.exports = router;
