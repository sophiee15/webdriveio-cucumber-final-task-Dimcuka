// This page contains various elements and methods related to making an order

class ProductsPage {
    
    get sortingButton(){
        return $("~Shows current sorting order and displays available sorting options");
    }

    get priceDescendingOption(){
        return $(`//android.view.ViewGroup[@content-desc="Descending order by name"]`);
    }

    // using $$ to get the list of products and then selecting a random product
    get selectProduct(){
        return $$(`//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]/android.view.ViewGroup`);
    }

    get addToCartButton(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/cartBt']");
    }

    get totalItemCount(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/itemsTV']");
    }

    get totalItemPrice(){
        return $("//*[@resource-id='com.saucelabs.mydemoapp.android:id/totalPriceTV']");
    }

}

export default new ProductsPage();