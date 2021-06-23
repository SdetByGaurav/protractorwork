let homepage = require('../elementRepo/homepage');

describe('calculator test suite', function(){

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.manage().window().maximize();
    });

    it('addition test', function(){

        homepage.enterFirstNum('4');

        homepage.enterSecondNum('8');

        homepage.clickOnGOBtn();

        homepage.verifyResult('12');

        browser.sleep(3000);
        
    });

    
    it('addition test', function(){

        homepage.enterFirstNum('5');

        homepage.enterSecondNum('8');

        homepage.clickOnGOBtn();

        homepage.verifyResult('13');

        browser.sleep(3000);
        
    });
    
    it('addition test', function(){

        homepage.enterFirstNum('40');

        homepage.enterSecondNum('10');

        homepage.clickOnGOBtn();

        homepage.verifyResult('50');

        browser.sleep(3000);
        
    });

});
