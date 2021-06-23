describe('demo mouse actions', function() {
    
    it('handling mouse over', function() {
        
        browser.waitForAngularEnabled(false);
        browser.get('https://opensource-demo.orangehrmlive.com/');

        element(by.id('txtUsername')).sendKeys('Admin');
        element(by.id('txtPassword')).sendKeys('admin123');
        element(by.id('btnLogin')).click();

        browser.sleep(3000);

        let admin = element(by.id('menu_admin_viewAdminModule'));
        let userManagement = element(by.id('menu_admin_UserManagement'));
        let users = element(by.id('menu_admin_viewSystemUsers'));

        // handling mouse over
        browser.actions().mouseMove(admin).mouseMove(userManagement).mouseMove(users).click().perform();

        browser.sleep(2000);
    });
        
});
    