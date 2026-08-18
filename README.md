# WebdriverIO + Cucumber Mobile Automation Project

Automated end-to-end testing project for the **Sauce Labs My Demo App** Android application using **WebdriverIO, Appium, Cucumber and JavaScript**.

The project demonstrates a BDD-based mobile automation framework using the **Page Object Model (POM)**, reusable step definitions, dynamically generated test data and Allure test reporting.

## Project Overview

The project automates an end-to-end product purchase flow in the Sauce Labs My Demo App.

The main automated scenario covers:

1. Sorting products by price in descending order
2. Selecting a product
3. Adding the product to the shopping cart
4. Verifying the total item count and price
5. Proceeding to checkout
6. Entering login credentials
7. Filling in shipping information
8. Entering payment information
9. Placing the order
10. Verifying that the checkout process was completed successfully

## Technologies & Tools

* **JavaScript**
* **WebdriverIO**
* **Appium**
* **Cucumber / BDD**
* **Node.js / npm**
* **Android Emulator / Android device**
* **UiAutomator2**
* **Faker.js**
* **Allure Report**
* **Git / GitHub**

## Project Structure

```text
webdriveio-cucumber-final-task-Dimcuka/
│
├── apps/
│   └── mda-2.2.0-25.apk
│
├── features/
│   │
│   ├── page-objects/
│   │   ├── checkout.page.js
│   │   ├── form.page.js
│   │   ├── login.page.js
│   │   ├── navigation.page.js
│   │   └── products.page.js
│   │
│   ├── step-definitions/
│   │   └── order.steps.js
│   │
│   ├── support/
│   │   └── data/
│   │       └── shippingAdress-data.js
│   │
│   └── test-objects/
│       ├── order.feature
│       └── order.test.js
│
├── allure-results/
│
├── package.json
├── package-lock.json
├── wdio.conf.js
└── README.md
```

## Dynamic Test Data

The project uses **Faker.js** to generate dynamic shipping and payment-related test data.

Example data includes:

* Full name
* Address
* City
* State
* ZIP code
* Country
* Card number
* Expiration date
* Security code

```javascript
import { faker } from "@faker-js/faker";
```

## Mobile Automation Configuration

The tests are configured to run against an Android application using:

* **Appium**
* **UiAutomator2**
* Android device/emulator
* WebdriverIO

## Test Reporting

The project uses **Allure Reporter** to generate test execution results.

Allure results are stored in:

```text
allure-results/
```

The configuration enables Cucumber step reporting within Allure.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/sophiee15/webdriveio-cucumber-final-task-Dimcuka.git
```

### 2. Navigate to the project

```bash
cd webdriveio-cucumber-final-task-Dimcuka
```

### 3. Install dependencies

```bash
npm install
```

### 4. Prepare the Android environment

Make sure you have:

* Android Studio / Android SDK
* An Android emulator or connected Android device
* Appium
* UiAutomator2 driver

The Android device/emulator should be available through ADB before starting the tests.

## Running the Tests

Run the WebdriverIO test suite with:

```bash
npx wdio run wdio.conf.js
```

The configuration automatically discovers Cucumber feature files from:

```text
features/**/*.feature
```

## Allure Report

After executing the tests, Allure results are generated in:

```text
allure-results/
```

If Allure CLI is installed, the report can be generated and opened with:

```bash
allure generate allure-results --clean
allure open
```

## Key Automation Practices Demonstrated

This project demonstrates practical experience with:

* Mobile UI automation
* WebdriverIO
* Appium
* Cucumber / BDD
* Gherkin
* Page Object Model
* Reusable step definitions
* Dynamic test data generation
* Android UI element identification
* Resource ID and accessibility selector usage
* Explicit element waits
* End-to-end test automation
* Test reporting with Allure
* Git/GitHub-based project management

## Known Application Issue

During test development, an application-level issue was observed when sorting products in descending order and selecting a specific product (the turquoise T-shirt).

This behavior appears to originate from the application rather than the automation framework and may cause the test to fail independently of the test implementation.

## Project Purpose

This project was developed as a practical mobile test automation exercise to demonstrate the ability to design and implement an automated end-to-end testing solution using modern QA automation tools and practices.

It demonstrates the transition from manual QA testing toward automated testing with **JavaScript, WebdriverIO, Appium and Cucumber**.
