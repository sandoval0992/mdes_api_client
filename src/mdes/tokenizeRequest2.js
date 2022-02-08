module.exports = {
  consumerLanguage: 'en',
  fundingAccountInfo: {
    encryptedPayload: {
      encryptedData: {
        accountHolderData: {
          accountHolderAddress: {
            city: 'St. Louis',
            country: 'USA',
            countrySubdivision: 'MO',
            line1: '100 1st Street',
            line2: 'Apt. 4B',
            postalCode: '61000',
          },
          accountHolderName: 'John Doe',
        },
        cardAccountData: {
          accountNumber: '5123456789012345',
          expiryMonth: '09',
          expiryYear: '25',
          securityCode: '123',
        },
        source: 'ACCOUNT_ON_FILE',
      },
    },
  },
  requestId: '123456',
  responseHost: 'site1.your-server.com',
  taskId: '123456',
  tokenRequestorId: '98765432101',
  tokenType: 'CLOUD',
  tokenizationAuthenticationValue:
    'RHVtbXkgYmFzZSA2NCBkYXRhIC0gdGhpcyBpcyBub3QgYSByZWFsIFRBViBleGFtcGxl',
};
