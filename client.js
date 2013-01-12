var client = require('webdriverjs').remote({
    desiredCapabilities: {
        browserName: 'phantomjs'
    },
    logLevel: 'silent'
});

exports.client = client;
