let all     = require('./all')
let appdmg  = require('appdmg');
let osx     = require('./installers/osx')
let linux   = require('./installers/linux')
let windows = require('./installers/windows')

let items = [
  // {platform: 'darwin', arch: 'x64'},
  // {platform: 'linux', arch: 'x64'},
  // {platform: 'linux', arch: 'ia32'},
  // {platform: 'win32', arch: 'x64'},
  // {platform: 'win32', arch: 'ia32'}
]

console.log('➜ Starting building'.green.bold)

all.buildAll(items).then(() => {
  console.log('\n➜ Completed build process!'.green.bold)

  console.log('\n➜ Packing now...'.cyan.bold)
  osx.pack()
  linux.pack()
  linux.pack({src: 'builds/gmail-linux-ia32', arch: 'i386'})
  // linux.packRedHat({group: 'Applications/Communications'})
  // linux.packRedHat({src: 'builds/gmail-desktop-linux-ia32', arch: 'i386', group: 'Applications/Communications'})
  windows.pack()
  windows.pack({appDirectory: 'builds/Gmail-win32-ia32', setupExe: 'Gmail-Desktop-Setup-x86.exe',})
});

