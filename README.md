# xdg-user-dir

Get a list of known shell folders indexed by `XDG_*_DIR` constants.

Usage example:

```javascript
const getXdgUserDirs = require('xdg-user-dir');

getXdgUserDirs().then(folders => {
    console.log(folders);
});
```

Output will look like:

```
{ XDG_DESKTOP_DIR: '/home/user/Рабочий стол',
  XDG_DOWNLOAD_DIR: '/home/user/Загрузки',
  XDG_TEMPLATES_DIR: '/home/user/Шаблоны',
  XDG_PUBLICSHARE_DIR: '/home/user/Общедоступные',
  XDG_DOCUMENTS_DIR: '/home/user/Документы',
  XDG_MUSIC_DIR: '/home/user/Музыка',
  XDG_PICTURES_DIR: '/home/user/Изображения',
  XDG_VIDEOS_DIR: '/home/user/Видео' }
```
