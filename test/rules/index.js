const chai = require('chai')
const targaryen = require('targaryen/plugins/chai')
const expect = chai.expect

chai.use(targaryen)

describe('Security rules for [/points]', function () {
  before(function () {
    targaryen.setFirebaseData(require('../../database.example.json'))
    targaryen.setFirebaseRules(require('../../database.rules.json'))
  })

  it('Should not allowed unauth user to read and write data', function () {
    expect().cannot.read.path('/preorders')
  })
})
