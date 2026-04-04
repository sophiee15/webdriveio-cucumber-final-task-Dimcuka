import { Given, When, Then } from '@cucumber/cucumber';
import orderTest from '../test-objects/order.test';

Given("Sort products by Price - Descending", async() => {
    await orderTest.sortProductsByDesc();
});
When("Select a product", async() => {
    await orderTest.selectProduct();
});
Then("Add product to cart", async () => {
    await orderTest.addToCart();
});
Then("Validate total item count and Price", async() => {
    await orderTest.navigateToCartPage();
    await orderTest.validateTotalItemCountAndPrice();
});
When("Proceed to checkout", async() => {
    await orderTest.proceedToCheckout();
});
Then("Fill out login information", async() => {
    await orderTest.fillOutLoginInformation();
});
Then("Fill out Shipping address and continue", async() => {
    await orderTest.fillOutInformation();
});
Then("Fill out Card information and continue", async() => {
    await orderTest.fillOutCardInformation();
});
Then("Place order and verify checkout is complete", async() => {
    await orderTest.placeOrderCheckout();
    await orderTest.verifyCheckoutComplete();
});
    