var express = require('express');
var router = express.Router();
const ROOT_URL = 'https://api.chucknorris.io';

router.get('/', async function(req, res, next) {
  const joke = await fetch(`${ROOT_URL}/jokes/random?category=${req.query.category}`)
  .then(res => res.json());

  res.render('index', { joke });
});

module.exports = router;
