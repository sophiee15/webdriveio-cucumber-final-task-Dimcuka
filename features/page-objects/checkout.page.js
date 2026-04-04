class CheckoutPage {

    get checkoutMessage(){
        return $("//android.widget.TextView[@text='Your new swag is on its way']");
    }
}
export default new CheckoutPage()