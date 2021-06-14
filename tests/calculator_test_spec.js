// here describe explains its a test suite
describe('calculator test suite', function(){

    // here it explains its a test case
    it('addition test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('50');
        element(by.model('second')).sendKeys('20');
        element(by.css('button[ng-click="doAddition()"]')).click();
     //   let result = element(by.cssContainingText('.ng-binding','10'));
     //   expect(result.getText()).toEqual('10');

        // code print message in console
        element(by.cssContainingText('.ng-binding','70')).getText().then(function(text) {
            console.log('result is : ' + text);
          });
        
        // direct way to print message in console  
        element(by.cssContainingText('.ng-binding','70')).getText().then(console.log);
        browser.sleep(3000);
        
    });

    // it('subtraction test', function(){
        
    // });
});

// here every 'it' is one test case