"use strict";

let os         = require('os')
let nativefier = require('nativefier').default
let c          = require('colors')

let items = [
  {platform: 'darwin', arch: 'x64'},
  {platform: 'linux', arch: 'x64'},
  {platform: 'linux', arch: 'ia32'},
  {platform: 'win32', arch: 'x64'},
  {platform: 'win32', arch: 'ia32'}
]


let icon = './src/icon.png'

let options = {
  name:            'Gmail',
  targetUrl:       'https://mail.google.com/mail/mu/?mui=ca',
  version:         '0.0.4',
  electronVersion: '1.7.4',
  disableDevTools: true,
  out:             './builds/',
  overwrite:       true,
  icon:            icon,
  counter:         true,
  minWidth:        800,
  minHeight:       600,
  singleInstance:  true,
  showMenuBar:     false,
  // maximize:        true,
  // crashReporter:   'https://electron-crash-reporter.appspot.com/5086233617235968/create/',
  inject:          [
    './src/gmail.js',
    './src/gmail.css',
  ]
}

let go = (ops) => {
  return new Promise((resolve, reject) => {

    process.nextTick(() => {
      console.log('\nBuilding: '.yellow.bold, ops)
      Object.assign(options, ops)

      let platform = options.platform !== undefined ? options.platform : os.platform()

      if (platform === 'darwin' || platform === 'osx' || platform === 'mac') {
        icon = './src/icon.icns'
      } else if (platform === 'win32' || platform === 'windows') {
        icon = './src/icon.ico'
      }

      nativefier(options, (error, appPath) => {
        if (error) {
          console.error(error.red)
          reject()
        }
        console.log('Built:'.blue.bold, appPath)

        resolve()
      })
    })
  })
}

let forEachPromise = (options) => {
  return items.reduce(function (promise, item) {
    return promise.then(function () {
      Object.assign(item, options)
      return go(item);
    });
  }, Promise.resolve());
}

module.exports = {
  go:       go,
  buildAll: forEachPromise,
}
