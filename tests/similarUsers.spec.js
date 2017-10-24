//const {expect} = require('chai')
import {expect} from 'chai';

import { areSimilarCompanies, computePercentages, getSimilarUsers } from '../client/store'

describe('similar companies function', ()=>{
  let companies;
  beforeEach(() => {
    companies = [
        {
          id:1,
          fractal_index: 0.678
        },
        {
          id:2,
          fractal_index: 0.782
        },
        {
          id:3,
          fractal_index: 0.795
        },
        {
          id:4,
          fractal_index: 0.724
        },
        {
          id:5,
          fractal_index: 0.523
        }
      ];
    });

    it('returns a boolean', ()=> {
      const returnValue = areSimilarCompanies(companies[0], companies[1])
      expect(returnValue).to.equal(true || false);
    })

    it('returns false if absolute difference betweet fractal_indexes is more then 0.15', ()=> {
      const returnValue = areSimilarCompanies(companies[4], companies[0])
      expect(returnValue).to.equal(false);
      const returnValue1 = areSimilarCompanies(companies[4], companies[1])
      expect(returnValue1).to.equal(false);
      const returnValue2 = areSimilarCompanies(companies[4], companies[2])
      expect(returnValue2).to.equal(false);
      const returnValue3 = areSimilarCompanies(companies[4], companies[3])
      expect(returnValue3).to.equal(false);
    })

    it('returns true if absolute difference betweet fractal_indexes is less then 0.15', ()=> {
      const returnValue = areSimilarCompanies(companies[0], companies[1])
      expect(returnValue).to.equal(true);
      const returnValue1 = areSimilarCompanies(companies[0], companies[2])
      expect(returnValue1).to.equal(true);
      const returnValue2 = areSimilarCompanies(companies[0], companies[3])
      expect(returnValue2).to.equal(true);
      const returnValue3 = areSimilarCompanies(companies[1], companies[2])
      expect(returnValue3).to.equal(true);
      const returnValue4 = areSimilarCompanies(companies[1], companies[3])
      expect(returnValue4).to.equal(true);
      const returnValue5 = areSimilarCompanies(companies[2], companies[3])
      expect(returnValue5).to.equal(true);
    })
})

describe('computing percentage function', ()=>{
  it('returns correct percentage difference', () => {
    const returnvalue = computePercentages(100, 30)
    expect(returnvalue).to.equal(70)
  })

  it('returns correct percentage difference with different values', () => {
    const returnvalue = computePercentages(100, 30)
    expect(returnvalue).to.equal(70)
    const returnvalue1 = computePercentages(50, 25)
    expect(returnvalue1).to.equal(50)
    const returnvalue2 = computePercentages(2, 1)
    expect(returnvalue2).to.equal(50)
  })

  it('returns correct percentage difference even if negative', () => {
    const returnvalue = computePercentages(30, 100)
    expect(returnvalue).to.equal(-70)
  })

  it('returns correct percentage difference even if negative with different values', () => {
    const returnvalue = computePercentages(30, 100)
    expect(returnvalue).to.equal(-70)
    const returnvalue1 = computePercentages(25, 50)
    expect(returnvalue1).to.equal(-50)
    const returnvalue2 = computePercentages(1, 2)
    expect(returnvalue2).to.equal(-50)
    const returnvalue3 = computePercentages(15, 60)
    expect(returnvalue3).to.equal(-75)
  })
})

describe('getSimilarUsers function', ()=>{
  let users;
  let companies;
  beforeEach(() => {
    companies = [
      {
        id:1,
        fractal_index: 0.678
      },
      {
        id:2,
        fractal_index: 0.782
      },
      {
        id:3,
        fractal_index: 0.795
      },
      {
        id:4,
        fractal_index: 0.724
      },
      {
        id:5,
        fractal_index: 0.523
      }
    ];
    users = [
      {
        candidate_id: 889,
        communication_score: 100,
        coding_score: 100,
        title: "Engineer",
        companyId: 2,
        company: companies[1]
      },
      {
        candidate_id: 890,
        communication_score: 30,
        coding_score: 50,
        title: "Engineer",
        companyId: 2,
        company: companies[1]
      },
    ]
  })

  it('returns an array', ()=>{
    let similarUsers = getSimilarUsers(users[0].candidate_id, users)
    expect(similarUsers).to.be.an('array')
  })

  it('users in an array are objects', ()=>{
    let similarUser = getSimilarUsers(users[0].candidate_id, users)[0]
    expect(similarUser).to.be.an('object')
  })

  it('assigns new property to a user object comPercent', ()=>{
    let similarUser = getSimilarUsers(users[0].candidate_id, users)[0]
    expect(similarUser).to.have.property('comPercent')
  })

  it('assigns new property to a user object codePercent', ()=>{
    let similarUser = getSimilarUsers(users[0].candidate_id, users)[0]
    expect(similarUser).to.have.property('codePercent')
  })

  it('assigns new property to a user object codePercent', ()=>{
    let similarUser = getSimilarUsers(users[0].candidate_id, users)[0]
    expect(similarUser).to.have.property('codePercent')
  })

  it('assigns correct value for an comPercent difference', ()=>{
    let similarUser = getSimilarUsers(users[0].candidate_id, users)[0]
    expect(similarUser).to.have.property('comPercent', 70)
  })

  it('assigns correct value for an codePercent difference', ()=>{
    let similarUser = getSimilarUsers(users[0].candidate_id, users)[0]
    expect(similarUser).to.have.property('codePercent', 50)
  })

})
