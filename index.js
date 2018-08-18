import express from 'express'
import graphqlHTTP from'express-graphql'

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

treeUrls.map(tree => {
  return {
    name: `Cian's Tree`,
    circumference: 1,

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

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

var MyGraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'worlds';
        }
      },
      cianSucks: {
        type: GraphQLString,
        resolve() {
          return 'this is definatly true!';
        }
      }
    }
  })
});

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/graphql', graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}));

app.listen(8080, () => console.log('Example app listening on port 3000!'))

