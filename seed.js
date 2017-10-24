'use strict';
const database = require('./server/db');
const db = require('./server/db/models');
const { User, Company } = db;

let data = {
  companyData: [
    {
      fractal_index: 0.678
    },
    {
      fractal_index: 0.782
    },
    {
      fractal_index: 0.795
    },
    {
      fractal_index: 0.724
    },
    {
      fractal_index: 0.523
    }],
  userData: [
    {
      candidate_id: 889,
      communication_score: 114028,
      coding_score: 180944,
      title: "Engineer",
      companyId: 2
    },
    {
      candidate_id: 890,
      communication_score: 62734,
      coding_score: 64000,
      title: "Engineer",
      companyId: 2
    },
    {
      candidate_id: 891,
      communication_score: 167656,
      coding_score: 231216,
      title: "Engineer",
      companyId: 2
    },
    {
      candidate_id: 892,
      communication_score: 163198,
      coding_score: 202131,
      title: "Engineer",
      companyId: 2
    },
    {
      candidate_id: 893,
      communication_score: 109561,
      coding_score: 137014,
      title: "Engineer",
      companyId: 2
    },
    {
      candidate_id: 894,
      communication_score: 167057,
      coding_score: 240189,
      title: "Engineer",
      companyId: 2
    },
    {
      candidate_id: 895,
      communication_score: 70856,
      coding_score: 80461,
      title: "Engineer",
      companyId: 2
    },
    {
      candidate_id: 896,
      communication_score: 138826,
      coding_score: 151598,
      title: "Senior Engineer",
      companyId: 2
    },
    {
      candidate_id: 897,
      communication_score: 196348,
      coding_score: 221857,
      title: "Senior Engineer",
      companyId: 2
    },
    {
      candidate_id: 898,
      communication_score: 142766,
      coding_score: 171692,
      title: "Senior Engineer",
      companyId: 2
    },
    {
      candidate_id: 899,
      communication_score: 103177,
      coding_score: 149613,
      title: "Senior Engineer",
      companyId: 3
    },
    {
      candidate_id: 900,
      communication_score: 61456,
      coding_score: 63922,
      title: "Senior Engineer",
      companyId: 3
    },
    {
      candidate_id: 901,
      communication_score: 143908,
      coding_score: 221594,
      title: "Senior Engineer",
      companyId: 3
    },
    {
      candidate_id: 902,
      communication_score: 122314,
      coding_score: 172996,
      title: "Senior Engineer",
      companyId: 3
    },
    {
      candidate_id: 903,
      communication_score: 172771,
      coding_score: 182431,
      title: "Engineer",
      companyId: 3
    },
    {
      candidate_id: 903,
      communication_score: 172771,
      coding_score: 182431,
      title: "Engineer",
      companyId: 3
    },
    {
      candidate_id: 904,
      communication_score: 106172,
      coding_score: 144800,
      title: "Engineer",
      companyId: 3
    },
    {
      candidate_id: 905,
      communication_score: 52411,
      coding_score: 130449,
      title: "Engineer",
      companyId: 3
    },
    {
      candidate_id: 906,
      communication_score: 134927,
      coding_score: 158522,
      title: "Engineer",
      companyId: 3
    },
    {
      candidate_id: 907,
      communication_score: 103008,
      coding_score: 120101,
      title: "Engineer",
      companyId: 3
    },
    {
      candidate_id: 908,
      communication_score: 120063,
      coding_score: 155818,
      title: "Engineer",
      companyId: 3
    },
    {
      candidate_id: 913,
      communication_score: 106351,
      coding_score: 143867,
      title: "Engineer",
      companyId: 4
    },
    {
      candidate_id: 914,
      communication_score: 101478,
      coding_score: 123471,
      title: "Engineer",
      companyId: 4
    },
    {
      candidate_id: 915,
      communication_score: 189456,
      coding_score: 211567,
      title: "Senior Engineer",
      companyId: 4
    },
    {
      candidate_id: 916,
      communication_score: 86598,
      coding_score: 137150,
      title: "Senior Engineer",
      companyId: 4
    },
    {
      candidate_id: 917,
      communication_score: 153313,
      coding_score: 193111,
      title: "Senior Engineer",
      companyId: 4
    },
    {
      candidate_id: 918,
      communication_score: 76857,
      coding_score: 144194,
      title: "Senior Engineer",
      companyId: 4
    },
    {
      candidate_id: 919,
      communication_score: 138657,
      coding_score: 178472,
      title: "Senior Engineer",
      companyId: 4
    },
    {
      candidate_id: 920,
      communication_score: 68158,
      coding_score: 103852,
      title: "Senior Engineer",
      companyId: 4
    },
    {
      candidate_id: 921,
      communication_score: 155124,
      coding_score: 177076,
      title: "Senior Engineer",
      companyId: 4
    },
    {
      candidate_id: 922,
      communication_score: 129871,
      coding_score: 190076,
      title: "Engineer",
      companyId: 1
    },
    {
      candidate_id: 923,
      communication_score: 164465,
      coding_score: 177197,
      title: "Engineer",
      companyId: 1
    },
    {
      candidate_id: 924,
      communication_score: 127774,
      coding_score: 130350,
      title: "Engineer",
      companyId: 1
    },
    {
      candidate_id: 925,
      communication_score: 70485,
      coding_score: 229371,
      title: "Engineer",
      companyId: 1
    },
    {
      candidate_id: 934,
      communication_score: 113644,
      coding_score: 150766,
      title: "Engineer",
      companyId: 5
    },
    {
      candidate_id: 935,
      communication_score: 65389,
      coding_score: 82842,
      title: "Engineer",
      companyId: 5
    },
    {
      candidate_id: 936,
      communication_score: 154939,
      coding_score: 173657,
      title: "Engineer",
      companyId: 5
    },
    {
      candidate_id: 937,
      communication_score: 95392,
      coding_score: 127356,
      title: "Engineer",
      companyId: 5
    },
    {
      candidate_id: 938,
      communication_score: 67987,
      coding_score: 100751,
      title: "Engineer",
      companyId: 5
    },
    {
      candidate_id: 939,
      communication_score: 111975,
      coding_score: 149992,
      title: "Engineer",
      companyId: 5
    },
  ]
}

database
  .sync({ force:true })
  .then(() => console.log('Database FORCE TRUE completed'))
  .then(() => Company.sync({ force: true }))
  .then(() => {
    return Promise.all(data.companyData.map(company => Company.create(company)))
  })
  .then(() => console.log('completed Company sync'))
  .then(() => User.sync({ force: true }))
  .then(() => {
    return Promise.all(data.userData.map(user => User.create(user)))
  })
  .then(() => console.log('completed User sync'))
  .catch(err => console.error('There was totally a problem', err, err.stack))
  .finally(() => {
    database.close();
    console.log('connection closed');
    return null;
  });
