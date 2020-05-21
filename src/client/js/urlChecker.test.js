import { checkForURL } from './urlChecker'


describe("testing for valid url", ()=> {
    const formText = {
        url : 'http://www.google.com'
    }
    test('should return valid url', ()=> {
        expect(checkForURL(formText)).toBeTruthy;
    });
})

