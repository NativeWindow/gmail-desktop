let appdmg = require('appdmg');
let c      = require('colors')
var fs     = require('fs');

let target = 'builds/Gmail-Desktop-Installer.dmg'

try {
  fs.unlinkSync(target)
} catch (x) {}


let ee = appdmg({
  target:        target,
  basepath:      __dirname,
  specification: {
    title:      "Gmail Desktop Installer",
    icon:       '../src/icon.icns',
    background: '../src/bg.jpg',
    contents:   [
      {x: 450, y: 230, type: "link", path: "/Applications"},
      {x: 200, y: 230, type: "file", path: "../builds/Gmail Desktop-darwin-x64/Gmail Desktop.app"}
    ]
  }
});

ee.on('finish', function () {
  console.log('Made!')
});

ee.on('error', function (err) {
  console.log('Fail: ', err)
});