const assert = require('assert');
const processEnvVars = require('./processEnvVars');
const getXdgUserDirs = require('./index');

process.env.FOO = 'bar';
assert.equal(processEnvVars('$FOO-becue $FOO'), 'bar-becue bar');
assert.equal(processEnvVars('${FOO}becue ${FOO}'), 'barbecue bar');

getXdgUserDirs();