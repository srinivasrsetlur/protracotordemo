exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
/*    capabilities: {
        'browserName': 'chrome'
    },*/
    framework: 'jasmine',
    specs: ['FirstSpec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    }
};