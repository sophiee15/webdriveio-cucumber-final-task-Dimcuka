I have two points to say about this project and the app itself:

1) Sometimes the test fails straight away because there’s a bug in the app itself, specifically when the user selects the ‘Descending order’
option and tries to click on the second product (T-Shirt turqoise color). I don’t think you should take this into account in the test.

2)In config file in capabilities area I've added new capabilities, like appPackage, appActivity, autoGrantPermission and noReset, because previously I had an error
and I couldn't run the test. But then I've tried to use 'app' as a capability and it worked. However, just in case I've left those capabilities.
