describe('Javabuzz', function(){
    var javabuzz;

    beforeEach(function() {
        javabuzz = new Javabuzz();
    });

    describe('when playing, says', function() {

        it('"Java" when divisible by 3', function() {
            expect(javabuzz.says(3)).toEqual('Java');
        });
        
        it('"Java" when divisible by 6', function() {
            expect(javabuzz.says(6)).toEqual('Java');
        });

        it('"Buzz" when divisble by 5', function(){
            expect(javabuzz.says(5)).toEqual('Buzz');
        });

        it('"Buzz" when divisble by 10', function(){
            expect(javabuzz.says(10)).toEqual('Buzz');
        });

        it('"JavaBuzz" when divisible by 15', function() {
            expect(javabuzz.says(15)).toEqual('JavaBuzz');
        });
    });



});