var nconf = require('nconf');
var path = require('path');

nconf.argv().env().file({ file: path.resolve(__dirname, '../keys/index.json') });

if (nconf.get('NODE_ENV') === 'production') {
  // server
  nconf.get('PORT') || nconf.set('PORT', 80);

  // database
  nconf.get('mongoURI') || nconf.set('mongoURI', 'mongodb://'
    + nconf.get('mongoUser')
    + ':'
    + nconf.get('mongoPass')
    + '@'
    + nconf.get('mongoHost')
    + ':'
    + nconf.get('mongoPort')
    + '/'
    + nconf.get('mongoDatabase')
  );
} else if (nconf.get('NODE_ENV') === 'development') {
  // server
  nconf.get('PORT') || nconf.set('PORT', 3210);

  // database
  nconf.get('mongoURI') || nconf.set('mongoURI', 'mongodb://localhost/blyp');
}

module.exports = nconf;
