const assert = require('assert');
const { join } = require('path');
const processEnvVars = require('./processEnvVars');
const readFile = require('./readFile');
const parseConfig = require('./parseConfig');

const getXdgUserDirs = () => {
    const configHome =
        process.env.XDG_CONFIG_HOME || join(process.env.HOME, '.config');
    return readFile(join(configHome, 'user-dirs.dirs')).then(text => {
        const config = parseConfig(text);
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
    });
};

module.exports = getXdgUserDirs;
