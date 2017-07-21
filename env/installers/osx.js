let appdmg = require('appdmg');
let c      = require('colors')
var fs     = require('fs');

module.exports = {
  pack: () => {
    let target = 'builds/installers/Gmail-Desktop-Installer.dmg'

    try {
      fs.unlinkSync(target)
    } catch (x) {}


    let ee = appdmg({
      target:        target,
      basepath:      __dirname,
      specification: {
        title:      "Gmail Desktop Installer",
        icon:       '../../src/icon.icns',
        background: '../../src/bg-dmg.jpg',
        format:     'UDBZ',
        contents:   [
          {x: 450, y: 230, type: "link", path: "/Applications"},
          {x: 200, y: 230, type: "file", path: "../../builds/Gmail-darwin-x64/Gmail.app"}
        ]
      }
    });

    ee.on('finish', function () {
      console.log('OSX installer: '.yellow, target)
    });

    ee.on('error', function (err) {
      console.log('OSX installer Fail: '.bold.red, err)
    });
  }
}