describe('demosuite', function() {
    
    beforeAll(function() {
        console.log('launch app...');
    })

    beforeEach(function() {
        console.log('login to app...');
    });
        
    xit('first test', function() {
        console.log('first test running...');
    });
         
    it('second test', function() {
        console.log('second test running...');
    });

    afterEach(function(){
        console.log('logout from app...');
    });
        
    afterAll(function() {
        console.log('close app...');
    });
});
    