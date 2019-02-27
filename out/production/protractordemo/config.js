exports.config = {
    seleniumAddress: 'http://localhost:4442/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    specs: ['./specs/FirstSpec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};