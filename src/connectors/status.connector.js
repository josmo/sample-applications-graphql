import config from 'config';

import grpc from 'grpc';
import grpcPromise from 'grpc-promise';
const PROTO_PATH = `${__dirname}/../proto/internal_application.proto`;
const service = grpc.load(PROTO_PATH).com.samples;
const client = new service.InternalApplicationService(config.get('endpoints.grpc'), grpc.credentials.createInsecure());
grpcPromise.promisifyAll(client);

const Status = {
  getApplicationStatus(id) {
    console.log(id);
    return client.getApplicationStatus()
      .sendMessage({ applicationId: id });
  },

};

export { Status };
