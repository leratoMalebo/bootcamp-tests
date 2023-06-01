describe('This is a test for the function isFromBellville' , function(){
    it("The function should return" , function()
    {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});