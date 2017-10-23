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
