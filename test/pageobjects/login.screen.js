class LoginScreen {
    get #enterCód(){return $('android=new UiSelector().text("Insira o código")')}
    get #ValidarBtn() { return $('android=new UiSelector().text("Validar")') }
    get #UserLogin() { return $('android=new UiSelector().text("Login")') }
    get #UserSenha() { return $('android=new UiSelector().text("Senha")') }
    

    async goToLogin(cod){
        await this.#enterCód.setValue(cod)
    }

    async ButtonValidar(){
        await this.#ValidarBtn.click()
    }

    async Login(user, senha){
      await  this.#UserLogin.setValue(user)
      await  this.#UserSenha.setValue(senha)
    }
}

module.exports = new LoginScreen()
