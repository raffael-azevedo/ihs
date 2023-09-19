class LoginScreen {
    codeTextField = '//android.widget.EditText[@text="Insira o código"]'
    validateButton = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.Button'
    usernameTextField = '//android.widget.EditText[@text="Login"]'
    passwordTextField = '//android.widget.EditText[@text="Senha"]'

    async goToLogin(code){
        await $(this.codeTextField).waitForExist({timeout: 5000})
        await $(this.codeTextField).setValue(code)
    }

    async validate(){
        await $(this.validateButton).click()
    }

    async login(user, senha){
      await $(this.usernameTextField).setValue(user)
      await $(this.passwordTextField).setValue(senha)
    }
}

module.exports = new LoginScreen()
