import { rootMutations } from "./query/mutations";
import { rootQuery } from "./query/query";

const { GraphQLSchema } = require("graphql");

export const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutations
})