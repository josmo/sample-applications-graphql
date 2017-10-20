import { Applications } from './connectors/applications_connector';
import { Status } from './connectors/status.connector';

const resolvers = {
  Query: {
    applications(root, args, context) {
      return Applications.getApplications();
    },
  },
  Application: {
    status(application) {
      return Status.getApplicationStatus(application.applicationID);
    },
  },
};

export default resolvers;
