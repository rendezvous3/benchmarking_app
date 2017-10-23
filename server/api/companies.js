const router = require('express').Router()
const {Company} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Company.findAll({
    include: [{
      all: true,
      //nested: true
    }]
  })
    .then(companies => res.json(companies))
    .catch(next)
})
