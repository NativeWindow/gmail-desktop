let electronInstaller = require('electron-winstaller');
let c                 = require('colors')

let options = {
  appDirectory:    'builds/Gmail-win32-x64',
  outputDirectory: __dirname + '/../../builds/installers',
  authors:         'Hélio Oliveira',
  exe:             'Gmail.exe',
  setupExe:        'Gmail-Desktop-Setup-x64.exe',
  noDelta:         true,
  name:            'Gmail',
  title:           'Gmail Desktop',
  description:     'A free, open, cross-platform, offline, multilingual, themable, gmail desktop app',
  iconUrl:         __dirname + '/../../src/icon.ico',
  // setupIcon:       __dirname + '/../../src/icon.ico',
}

module.exports = {
  pack: (ops) => {
    if (typeof ops === 'object') Object.assign(options, ops)

    resultPromise = electronInstaller.createWindowsInstaller(options);

    resultPromise.then(() => {
          console.log('Windows installer: '.yellow, options.setupExe)
        },
        (e) => {
          console.log('Windows installer Fail: '.bold.red, e.message)
        }
    );
  }
}