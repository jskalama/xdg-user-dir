const processEnvVars = str =>
    str.replace(/\$\{(\w+)\}|\$(\w+)/g, (match, p1, p2) => {
        const p = p1 || p2;
        return process.env[p] ? process.env[p] : '';
    });

module.exports = processEnvVars;