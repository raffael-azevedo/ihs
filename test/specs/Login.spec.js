const loginScreen = require("../pageobjects/login.screen");

describe('Teste', () => {
    it('Teste', () => {
        loginScreen.goToLogin('DEV')
        loginScreen.ButtonValidar()
        loginScreen.Login('user', 'senha123')
    });
});