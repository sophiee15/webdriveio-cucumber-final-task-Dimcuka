class LoginPage {

    get inputUsername() { 
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/nameET']"); 
    }

    get inputPassword() {
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/passwordET']");
    }

    get loginButton(){
        return $("~Tap to login with given credentials");
    }
}

export default new LoginPage();