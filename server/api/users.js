const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    include: [{
      all: true,
      //nested: true
    }]
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:userId', (req, res, next) => {
  User.findOne({
    where: {
      candidate_id: req.params.userId
    },
    include: [{
      all: true,
      // nested: true
    }]
  })
  .then(user => res.json(user))
  .catch(next)
})
