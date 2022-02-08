const MdesDigitalEnablementApi = require('@sandoval0992/mdes_digital_enablement_api');
const mdesClientEncryption = require('mastercard-client-encryption');
const oauth = require('mastercard-oauth1-signer');
const signingKey = require('./src/mdes/signingKey');
const consumerKey = require('./src/mdes/consumerKey');
const config = require('./src/mdes/clientEncryptionConfig');
const tokenizeRequest = require('./src/mdes/tokenizeRequest2');

// const path = require('path');
// console.log(path.dirname());

const apiClient = MdesDigitalEnablementApi.ApiClient;

apiClient.instance.basePath = 'https://sandbox.api.mastercard.com/mdes';

apiClient.instance.applyAuthToRequest = function (request) {
  console.log('applyingAuthToRequest...');
  const _end = request._end;
  request._end = function () {
    console.log('gettingAuthorizationHeader...');
    const authHeader = oauth.getAuthorizationHeader(
      request.url,
      request.method,
      JSON.stringify(request._data),
      consumerKey,
      signingKey
    );
    console.log(authHeader);
    request.req.setHeader('Authorization', authHeader);
    _end.call(request);
  };
  return request;
};

const service = mdesClientEncryption.Service(MdesDigitalEnablementApi, config);
const api = new service.TokenizeApi();

const opts = {
  tokenizeRequestSchema:
    MdesDigitalEnablementApi.TokenizeRequestSchema.constructFromObject(
      tokenizeRequest,
      {}
    ),
};

api.createTokenize(opts, function (error, data, response) {
  if (error) {
    console.log(`Response error: ${error}`);
  } else {
    console.log(`Returned data: \n ${JSON.stringify(data)}`);
    console.log(`Response data: \n ${JSON.stringify(response)}`);
  }
});
