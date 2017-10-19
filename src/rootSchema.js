import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import resolvers from './resolvers';
import Mutations from './mutations/mutations';
import Queries from './queries/queries';

import mocks from './mocks';


const schema = makeExecutableSchema({
  typeDefs: [
    ...Mutations,
    ...Queries,
  ], resolvers,
});

// uncommenting this file will use mocks instead of the connectors ;)
addMockFunctionsToSchema({ schema, mocks });

export default schema;
