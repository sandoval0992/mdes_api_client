const forge = require('node-forge');
const fs = require('fs');
const path = require('path');

const p12Content = fs.readFileSync(
  path.resolve('test/resources', 'MDES_Demo-sandbox.p12'),
  'binary'
);
const p12Asn1 = forge.asn1.fromDer(p12Content, false);
p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, 'keystorepassword');

const keyObj = p12.getBags({
  friendlyName: 'keyalias',
  bagType: forge.pki.oids.pkcs8ShroudedKeyBag,
}).friendlyName[0];

module.exports = forge.pki.privateKeyToPem(keyObj.key);
