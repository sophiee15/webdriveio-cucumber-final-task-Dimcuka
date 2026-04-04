import productsPage from "../page-objects/products.page";
import { generateShippingAddress } from "../support/data/shippingAdress-data.js";
import formPage from "../page-objects/form.page";
import navigationPage from "../page-objects/navigation.page.js";
import checkoutPage from "../page-objects/checkout.page.js";
import loginPage from "../page-objects/login.page.js";

class OrderTest{

    async sortProductsByDesc(){
        await productsPage.sortingButton.click();
        await productsPage.priceDescendingOption.waitForDisplayed();
        await productsPage.priceDescendingOption.click();
    }

    async selectProduct(){
        const products = await productsPage.selectProduct;
        const randomIndex = Math.floor(Math.random() * products.length);
        await products[randomIndex].click();
    }

    async addToCart(){
        await productsPage.addToCartButton.waitForDisplayed();
        await productsPage.addToCartButton.click();
    }

    async navigateToCartPage(){
        await navigationPage.cartIcon.waitForDisplayed();
        await navigationPage.cartIcon.click();
    }

    async validateTotalItemCountAndPrice(){
        const itemCount = await productsPage.totalItemCount.getText();
        const itemPrice = await productsPage.totalItemPrice.getText();
        console.log(`Total Item Count: ${itemCount}`);
        console.log(`Total Item Price: ${itemPrice}`);
    }

    async proceedToCheckout(){
        await navigationPage.proceedToCheckoutButton.waitForDisplayed();
        await navigationPage.proceedToCheckoutButton.click();
    }

    async fillOutLoginInformation(){
        await loginPage.inputUsername.waitForDisplayed();
        await loginPage.inputUsername.setValue("bod@example.com");
        await loginPage.inputPassword.setValue("10203040");
        await loginPage.loginButton.click();
    }

    async fillOutInformation(){
        await formPage.fullNameInput.setValue(generateShippingAddress.fullName);
        await formPage.addressInput.setValue(generateShippingAddress.address);
        await formPage.cityInput.setValue(generateShippingAddress.city);
        await formPage.stateInput.setValue(generateShippingAddress.state);
        await formPage.zipCodeInput.setValue(generateShippingAddress.zipCode);
        await formPage.countryInput.setValue(generateShippingAddress.country);

        await navigationPage.toPaymentButton.click();
    }

    async fillOutCardInformation(){
        await formPage.fullNameCardInput.setValue(generateShippingAddress.fullName);
        await formPage.cardNumberInput.setValue(generateShippingAddress.cardNumber);
        await formPage.expirationDateInput.setValue(generateShippingAddress.expirationDate);
        console.log(`Expiration Date: ${generateShippingAddress.expirationDate}`);
        await formPage.securityCodeInput.setValue(generateShippingAddress.securityCode);

        await navigationPage.reviewOrderButton.click();
    }

    async placeOrderCheckout(){
        await navigationPage.placeOrderButton.waitForDisplayed();
        await navigationPage.placeOrderButton.click();
    }

    async verifyCheckoutComplete(){
        await checkoutPage.checkoutMessage.waitForDisplayed();
        const messageText = await checkoutPage.checkoutMessage.getText();
        console.log(`Checkout Message: ${messageText}`);
    }

}

export default new OrderTest();