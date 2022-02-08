const path = require('path');

module.exports = {
  paths: [
    {
      path: '/tokenize',
      toEncrypt: [
        {
          element: 'cardInfo.encryptedData',
          obj: 'cardInfo',
        },
        {
          element: 'fundingAccountInfo.encryptedPayload.encryptedData',
          obj: 'fundingAccountInfo.encryptedPayload',
        },
      ],
      toDecrypt: [
        {
          element: 'tokenDetail',
          obj: 'tokenDetail.encryptedData',
        },
      ],
    },
    {
      path: '/searchTokens',
      toEncrypt: [
        {
          element: 'cardInfo.encryptedData',
          obj: 'cardInfo',
        },
        {
          element: 'fundingAccountInfo.encryptedPayload.encryptedData',
          obj: 'fundingAccountInfo.encryptedPayload',
        },
      ],
      toDecrypt: [],
    },
    {
      path: '/getToken',
      toEncrypt: [],
      toDecrypt: [
        {
          element: 'tokenDetail',
          obj: 'tokenDetail.encryptedData',
        },
      ],
    },
    {
      path: '/transact',
      toEncrypt: [],
      toDecrypt: [
        {
          element: 'encryptedPayload',
          obj: 'encryptedPayload.encryptedData',
        },
      ],
    },
    {
      path: '/notifyTokenUpdated',
      toEncrypt: [
        {
          element: 'encryptedPayload.encryptedData',
          obj: 'encryptedPayload',
        },
      ],
      toDecrypt: [],
    },
  ],
  oaepPaddingDigestAlgorithm: 'SHA-256',
  ivFieldName: 'iv',
  encryptedKeyFieldName: 'encryptedKey',
  encryptedValueFieldName: 'encryptedData',
  oaepHashingAlgorithmFieldName: 'oaepHashingAlgorithm',
  publicKeyFingerprintFieldName: 'publicKeyFingerprint',
  publicKeyFingerprintType: 'certificate',
  dataEncoding: 'hex',
  encryptionCertificate: path.resolve(
    'test/resources',
    'digital-enablement-sandbox-encryption-key.crt'
  ),
  privateKey: path.resolve(
    'test/resources',
    'digital-enablement-sandbox-decryption-key.key'
  ),
};
