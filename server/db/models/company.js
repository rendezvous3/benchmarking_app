const Sequelize = require('sequelize')
const db = require('../db')

const Company = db.define('company', {
  fractal_index: {
    type: Sequelize.DOUBLE
  }
})

module.exports = Company
