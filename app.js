import express from 'express'
import config from './config'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './gql/schema'

const app = express()
app.set('port', config.PORT)

app.use('/gql', graphqlHTTP({
    schema,
    graphiql: true
}))
export { app }