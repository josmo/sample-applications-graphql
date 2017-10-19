import fetch from 'node-fetch';
import config from 'config';


const Applications = {
  getApplications() {
    return fetch(`${config.get('endpoints.rest')}/applications/`, {
      headers: { Authorization: 'Bearer: stuff' },
    }).then(res => res.json());
  },
};

export { Applications };
