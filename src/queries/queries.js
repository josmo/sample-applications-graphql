import Types from '../types/types';

const Queries = `
type Query {
  hello: String
  applications: [Application]
}
`;

export default [Queries, Types];
