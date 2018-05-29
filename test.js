const assert = require('assert');
const processEnvVars = require('./processEnvVars');
const getXdgUserDirs = require('./index');

process.env.FOO = 'bar';
assert.equal(processEnvVars('$FOO-becue $FOO'), 'bar-becue bar');
assert.equal(processEnvVars('${FOO}becue ${FOO}'), 'barbecue bar');

getXdgUserDirs()
    .then(config => {
        console.log(config);

        assert(config.XDG_DESKTOP_DIR, 'XDG_DESKTOP_DIR missing');
        assert(config.XDG_DOCUMENTS_DIR, 'XDG_DOCUMENTS_DIR missing');
        assert(config.XDG_DOWNLOAD_DIR, 'XDG_DOWNLOAD_DIR missing');
        assert(config.XDG_MUSIC_DIR, 'XDG_MUSIC_DIR missing');
        assert(config.XDG_PICTURES_DIR, 'XDG_PICTURES_DIR missing');
        assert(config.XDG_PUBLICSHARE_DIR, 'XDG_PUBLICSHARE_DIR missing');
        assert(config.XDG_TEMPLATES_DIR, 'XDG_TEMPLATES_DIR missing');
        assert(config.XDG_VIDEOS_DIR, 'XDG_VIDEOS_DIR missing');

        assert(
            config.XDG_DESKTOP_DIR === process.env.HOME + '/Desktop' ||
                config.XDG_DESKTOP_DIR === process.env.HOME + '/Рабочий стол'
        );
    })
    .catch(e => {
        console.error(e.stack);
        process.exit(1);
    });
