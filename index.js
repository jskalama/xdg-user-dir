const assert = require('assert');
const { join } = require('path');
const processEnvVars = require('./processEnvVars');
const readFile = require('./readFile');
const parseConfig = require('./parseConfig');

const getXdgUserDirs = () => {
    const configHome =
        process.env.XDG_CONFIG_HOME || join(process.env.HOME, '.config');
    return readFile(join(configHome, 'user-dirs.dirs')).then(parseConfig);
};

module.exports = getXdgUserDirs;
