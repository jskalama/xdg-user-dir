const fs = require('fs');

const readFile = file => {
    return new Promise((ok, fail) =>
        fs.readFile(file, (err, content) => {
            if (err) {
                fail(err);
                return;
            }
            ok(content.toString('utf8'));
        })
    );
};

module.exports = readFile;
