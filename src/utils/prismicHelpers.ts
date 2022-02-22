import Prismic from '@prismicio/client';

import { apiEndpoint } from '../../prismicConfiguration';

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export default Client;
