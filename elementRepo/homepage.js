let Homepage = function () {

    let firstNumberTB = element(by.model('firsttt'));
    let secondNumberTB = element(by.model('second'));
    let goBtn = element(by.css('button[ng-click="doAddition()"]'));


    this.enterFirstNum = function (firstNum) {
        firstNumberTB.sendKeys(firstNum);
    }

    this.enterSecondNum = function (secondNum) {
        secondNumberTB.sendKeys(secondNum);
    }

    this.clickOnGOBtn = function () {
        goBtn.click();
    }

    this.verifyResult = function (result) {
        let answer = element(by.cssContainingText('.ng-binding', result));
        expect(answer.getText()).toEqual(result);
    }
};

module.exports = new Homepage();