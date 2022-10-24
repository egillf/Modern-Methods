
// Some Jest tasting
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false


// We import the function we want to test
const validateEmail = require('./main');

// Test to see if a correct mail is ok
test('Properly e-mail checking', () =>{
    const mail = 'iosif@seb.se';
    const pass = 'iosif123';
    expect(validateEmail(mail, pass)).toBeTruthy(); 
});


test('NOT properly e-mail checking', () =>{
    const mail = 'sifis@seb.se';
    const pass = 'iosif123';
    expect(validateEmail(mail, pass)).not.toBeTruthy(); 
});
// not.toBeTruthy = toBeFalsy

// For this test we need to interact with the DOM
// So we will need the jsdom environment to test it.

/**
 * @jest-environment jsdom
 */

// Test to see if a wrong mail or pass is wrong
// test('NOT properly e-mail checking', () =>{
//     const mail = 'sifis@seb.se';
//     const pass = 'iosif123';
//     window.alert = jest.fn();
//     expect(window.alert).toBe('Email not found'); 
// });

