import { Applications } from './connectors/applications_connector';

const resolvers = {
  Query: {
    applications(root, args, context) {
      return Applications.getApplications();
    },
  },
};

export default resolvers;
