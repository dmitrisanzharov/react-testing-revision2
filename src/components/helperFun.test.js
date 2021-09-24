import {multiply, makeLowerCase} from './helperFun';

test('test to see if the imported function is successful', () => {
    expect(multiply(2,2)).toBeDefined();
    expect(makeLowerCase('HELL')).toBeDefined();
    expect(multiply(2,2)).toEqual(4);
    expect(multiply(3,2)).toEqual(6);
    expect(makeLowerCase('HELLo')).toEqual('hello');
});

