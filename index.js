import express from 'express'
import faker from 'faker'

var cors = require('cors')

const state = {
  trees: [],
}

const treeUrls = [
  'https://i.imgur.com/4yTHQi6.jpg',
  'https://i.imgur.com/620AWSA.jpg',
  'https://i.imgur.com/ngDOaMH.jpg',
  'https://i.imgur.com/Wv0GSwI.jpg',
  'https://i.imgur.com/57C3cEf.jpg',
  'https://i.imgur.com/phE7NyP.jpg',
  'https://i.imgur.com/ZH6F2mE.jpg',
  'https://i.imgur.com/CeTv2iR.jpg',
]

state.trees = treeUrls.map(treeUrl => {
  return {
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    circumference: faker.random.number(1000),
    height:faker.random.number(200),
    type: 'soft',
    age: faker.random.number(100),
    weight: faker.random.number(500),
    preferedType: 'hard',
    picture: treeUrl,
  }
})

// const state = {
//   trees: [
//     {
//       age: 21,
//       circumference: 180,     // in CM
//       height: 12,             // in ft
//       name: 'sausage tree',
//       type: 'soft',           // ENUM(hard | soft | fern | other)
//       weight: 784,            // in stone
//       preferedType: 'fern',    // same ENUM as type
//       picture: 'https://i.imgur.com/MQcuk3n.jpg',
//     },
//   ],
// }

const app = express()

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/trees', (req, res) => res.json(state.trees))

app.listen(8080, () => console.log('Example app listening on port 8080!'))

