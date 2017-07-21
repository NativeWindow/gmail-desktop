"use strict";
7
let all     = require('./all')
// let appdmg  = require('appdmg');
// let osx     = require('./installers/osx')
// let linux   = require('./installers/linux')
// let windows = require('./installers/windows')

console.log('➜ Starting building'.green.bold)

all.buildAll({}).then(() => {
  console.log('\n➜ Completed build process!'.green.bold)

  console.log('\n➜ Packing now...'.cyan.bold)
  // osx.pack()
  // linux.pack()
  // linux.pack({src: 'builds/gmail-linux-ia32', arch: 'i386'})
  // linux.packRedHat({group: 'Applications/Communications'})
  // linux.packRedHat({src: 'builds/gmail-desktop-linux-ia32', arch: 'i386', group: 'Applications/Communications'})
  // windows.pack()
  // windows.pack({appDirectory: 'builds/Gmail-win32-ia32', setupExe: 'Gmail-Desktop-Setup-x86.exe',})
});

