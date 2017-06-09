var debian  = require('electron-installer-debian')
var redhat  = require('electron-installer-redhat')
let c       = require('colors')

let options = {
  src:         'builds/gmail-linux-x64',
  dest:        'builds/installers',
  arch:        'amd64',
  version:     '0.0.4',
  name:        'Gmail',
  genericName: 'Email Client',
  description: 'A free, open, cross-platform, offline, multilingual, themable, gmail desktop app',
  section:     'mail',
  maintainer:  'Hélio Oliveira <gmaildesktop@helio.me>',
  homepage:    'http://gmaildesk.top',
  bin:         'gmail',
  icon:        'src/icon.png',
  categories:  ['Network', 'Office']
}

module.exports = {
  pack:        (ops) => {
    if (typeof ops === 'object') Object.assign(options, ops)

    debian(options, function (err) {
      if (err) {
        console.error('Error:'.bold.red, err, err.stack)
        process.exit(1)
      }

      console.log('Debian installer: '.yellow, options.name, options.arch)
    })
  },
  packRedHat:  (ops) => {
    if (typeof ops === 'object') Object.assign(options, ops)

    redhat(options, function (err) {
      if (err) {
        console.error('Error:'.bold.red, err, err.stack)
        process.exit(1)
      }

      console.log('RedHat installer: '.yellow, options.name, options.arch)
    })
  }
}