Feature: Make an order

    @order
    Scenario: Make an order
        Given Sort products by Price - Descending
        When Select a product
        Then Add product to cart
        Then Validate total item count and Price
        When Proceed to checkout
        Then Fill out login information
        Then Fill out Shipping address and continue
        Then Fill out Card information and continue
        Then Place order and verify checkout is complete

