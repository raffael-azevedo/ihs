const loginScreen = require("../pageobjects/login.screen");

describe('Teste', () => {
    it('Teste', async () => {
        await loginScreen.goToLogin('dev')
        await loginScreen.validate()
        //loginScreen.Login('user', 'senha123')
    });
});