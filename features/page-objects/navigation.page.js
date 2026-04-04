// This page contains elements related to navigation, like buttons, cart icon

class NavigationPage {

    get cartIcon(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/cartIV']");
    }

    get proceedToCheckoutButton(){
        return $("~Confirms products for checkout");
    }

    get toPaymentButton(){
        return $("~Saves user info for checkout");
    }

    get reviewOrderButton(){
        return $("~Saves payment info and launches screen to review checkout data");
    }

    get placeOrderButton(){
        return $("~Completes the process of checkout");
    }

}
export default new NavigationPage();