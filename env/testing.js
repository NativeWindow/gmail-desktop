"use strict";

var createMsi = require('msi-packager')
console.log(__dirname)

var options = {

  // required
  source:       '../builds/Gmail-win32-x64/',
  output:       '../builds/Gmail-windows-x64.msi',
  name:         'Gmail',
  upgradeCode:  'YOUR-GUID-HERE',
  version:      '0.0.4',
  manufacturer: 'gmaildesk.top',
  iconPath:     '../src/gmail.ico',
  executable:   'Gmail.exe',

  // optional
  description:  "Some description",
  arch:         'x64',
  localInstall: true

}

createMsi(options, (err) => {
  if (err) throw err
  console.log('Outputed to ' + options.output)
})
