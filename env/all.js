let os         = require('os')
let nativefier = require('nativefier').default


let icon = './src/icon.png'

if (os.platform() === 'darwin') {
  icon = './src/icon.icns'
}

let options = {
  name:           'Gmail Desktop',
  targetUrl:      'https://mail.google.com/mail/mu/?mui=ca',
  version:        '0.0.2',
  out:            './builds/',
  overwrite:      true,
  icon:           icon,
  counter:        true,
  minWidth:       800,
  minHeight:      600,
  singleInstance: true,
  showMenuBar:    false,
  // maximize:        true,
  // crashReporter:   'https://electron-crash-reporter.appspot.com/5086233617235968/create/',
  inject:         [
    './src/gmail.js',
    './src/gmail.css',
  ]
}

module.exports = {
  build: (ops) => {
    Object.assign(options, ops)
    nativefier(options, (error, appPath) => {
      if (error) {
        console.error(error)
        return
      }
      console.log('App has been nativefied to', appPath)
    })
  }
}