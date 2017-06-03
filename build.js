var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
  name:              'Gmail Desktop',
  targetUrl:         'https://mail.google.com/mail/mu/?mui=ca',
  // platform:          'darwin', // defaults to the current system
  // arch:              'x64', // defaults to the current system
  version:           '0.0.2',
  out:               './builds/',
  overwrite:         true,
  asar:              false, // see conceal
  icon:              './src/icon.png',
  counter:           false,
  width:             1280,
  height:            800,
  showMenuBar:       false,
  fastQuit:          false,
  userAgent:         'Mozilla ...', // will infer a default for your current system
  ignoreCertificate: false,
  insecure:          false,
  honest:            false,
  zoom:              1.0,
  singleInstance:    false
};

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});