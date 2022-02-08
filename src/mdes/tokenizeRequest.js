module.exports = {
  responseHost: 'site1.your-server.com',
  requestId: '123456',
  tokenType: 'CLOUD',
  tokenRequestorId: '98765432101',
  taskId: '123456',
  fundingAccountInfo: {
    encryptedPayload: {
      publicKeyFingerprint: '4c4ead5927f0df8117f178eea9308daa58e27c2b',
      encryptedKey: 'A1B2C3D4E5F6112233445566',
      oaepHashingAlgorithm: 'SHA512',
      iv: 'NA',
      encryptedData: {
        cardAccountData: {
          accountNumber: '5123456789012345',
          expiryMonth: '09',
          expiryYear: '21',
          securityCode: '123',
        },
        accountHolderData: {
          accountHolderAddress: {
            line1: '100 1st Street',
            line2: 'Apt. 4B',
            city: 'St. Louis',
            countrySubdivision: 'MO',
            postalCode: '61000',
            country: 'USA',
          },
          accountHolderMobilePhoneNumber: {
            countryDialInCode: '44',
            phoneNumber: '07777 777 777',
          },
        },
        source: 'ACCOUNT_ON_FILE',
      },
    },
  },
  consumerLanguage: 'en',
  tokenizationAuthenticationValue:
    'RHVtbXkgYmFzZSA2NCBkYXRhIC0gdGhpcyBpcyBub3QgYSByZWFsIFRBViBleGFtcGxl',
  decisioningData: {
    recommendation: 'APPROVED',
    recommendationAlgorithmVersion: '01',
    deviceScore: '1',
    accountScore: '1',
    recommendationReasons: ['LONG_ACCOUNT_TENURE'],
    deviceCurrentLocation: '38.63,-90.25',
    deviceIpAddress: '127.0.0.1',
    mobileNumberSuffix: 3456,
  },
};
