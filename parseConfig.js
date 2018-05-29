const processEnvVars = require('./processEnvVars');

const parseLine = line => {
    const matches = line.match(/^\s*(XDG_\w+_DIR)\s*=\s*(.+)\s*$/);
    if (!matches) {
        return null;
    }
    const key = matches[1];
    try {
        const value = processEnvVars(JSON.parse(matches[2]));
        return { key, value };
    } catch (e) {
        return null;
    }
};

const foldToObject = (output, item) => {
    output[item.key] = item.value;
    return output;
};

const parseConfig = text =>
    text
        .split('\n')
        .map(parseLine)
        .filter(it => it !== null)
        .reduce(foldToObject, {});

module.exports = parseConfig;
