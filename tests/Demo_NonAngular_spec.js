const { hasUncaughtExceptionCaptureCallback } = require("process");

describe('Flipkart Demo', function() {
    
    it('search product in flipkart', function() {
        
      //  browser.waitForAngularEnabled(false);

        browser.ignoreSynchronization=true;

        browser.get('https://www.flipkart.com/');

        element(by.buttonText('✕')).click();

        element(by.name('q')).sendKeys('Iphone x' , protractor.Key.ENTER);

        browser.sleep(3000);

        // print inventary via normal approach
        element(by.xpath("//span[contains(text(),'Showing')]")).getText().then(function (inventary) {
            console.log('Inventary result is : ' + inventary);
        });
        
        // Reusable method for providing text
        this.getElementText = function(element) {
            return element.getText();
        };
        
        // print inventary via reusable method
        this.getElementText(element(by.xpath("//span[contains(text(),'Showing')]"))).then(function (inventary) {
            console.log('Inventary result is : ' + inventary);
        });

        // validate inventary
        expect(element(by.xpath("//span[contains(text(),'Showing')]")).getText()).toContain('Showing');
    });
        
});
    