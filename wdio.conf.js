         const {join} = require ('path')

        exports.config = {
            hostname: '127.0.0.1',
            port: 4723,
            // a partir do Appium 2.0 o path padrão agora é só /
            path: '/', 
            specs: [
                './test/specs/**/*spec.js'
            ],
            framework: 'mocha',
            capabilities:[{
                // Todas as capabilities precisam do prefix do Appium
                "appium:platformName": "Android",
                "appium:platformVersion": "10.0",
                "appium:deviceName": "Pixel 6",
                'appium:automationName': 'UiAutomator2',
                "appium:app": join(process.cwd(), './app/android/build-1695131068450.apk'),
                "appium:appPackage": "com.desenvolvimentoatlante.atlanteti",
                "appium:appWaitActivity": '.MainActivity',
            }],
              mochaOpts: {
                timeout: 80000 
            }
            
        }