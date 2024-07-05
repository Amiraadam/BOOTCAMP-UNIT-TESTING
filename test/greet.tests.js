

describe('greetFunction', function() {
    it('should return "Hello, I am glad to see you Gubaa" when "Gubaa" is called ', function() {
       
        assert.equal("Hello, Iam glad to see you Gubaa", greet("Gubaa"));


    });

    it('should return "Hello, I am glad to see you Mahassen" when "Mahassen" is called ', function() {
        
        assert.equal("Hello, Iam glad to see you Mahassen", greet("Mahassen"));

       
    });
    
});
