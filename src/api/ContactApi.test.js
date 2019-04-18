import ContactApi from './ContactApi';


describe('ContactApi', () => {
    beforeEach(()=> {
        fetch.resetMocks();
    });

    describe('loadContacts', () => {
        it('should return a valid contact object', async () => {

            const expectedResult = {
                first: 'Tom',
                last: 'Meier',
                phone: '+496251459663'
            };
            let result;

            fetch.mockResponseOnce(JSON.stringify(expectedResult));

           await ContactApi.loadContacts()
                .then((data) => {
                    result = data;
                    expect(result).toEqual(expectedResult);
                });

        });


    });



});