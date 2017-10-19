import casual from 'casual';
import { MockList } from 'graphql-tools';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    applications: (root, args) => {
      return new MockList([100, 200]); // This will give between 100 and 200 applications back
    },
  }),
  Application: () => ({
    applicationID: () => casual.integer(0, 1000),
    applicationName: () => casual.name,
    applicationURL: () => casual.url,
    description: () => casual.words(10),
  }),
};

export default mocks;
