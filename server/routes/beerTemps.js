import express from 'express';

const router = express.Router();

router.get('/beer-temps', (req, res) => {
  res.send({ response: 'I am alive' }).status(200);
});

module.exports = router;
