let homepage = require('../elementRepo/homepage');

describe('calculator test suite', function(){

    it('addition test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNum('4');

        homepage.enterSecondNum('8');

        homepage.clickOnGOBtn();

        homepage.verifyResult('12');

        browser.sleep(3000);
        
    });

});
