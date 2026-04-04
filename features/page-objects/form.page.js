class FormPage{

/// Shipping address inputs
    get fullNameInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/fullNameET']");
    }

    get addressInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/address1ET']");
    }

    get cityInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/cityET']");
    }

    get stateInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/stateET']");
    }

    get zipCodeInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/zipET']");
    }

    get countryInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/countryET']");
    }

/// Card information inputs
    get fullNameCardInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/nameET']");
    }

    get cardNumberInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/cardNumberET']");
    }

    get expirationDateInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/expirationDateET']");
    }

    get securityCodeInput(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/securityCodeET']");
    }

}

export default new FormPage();