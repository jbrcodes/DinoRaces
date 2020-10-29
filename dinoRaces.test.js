// dinoRaces.test.js

const { dinoRace3, dinoRaceN } = require('./dinoRaces');


test('dinoRace3', () => {
    expect( dinoRace3(0, 1, 6, 5) ).toBe('Dinosaur3');
    expect( dinoRace3(0, 4, 6, 5) ).toBe('Human');
    expect( dinoRace3(1, 5, 30, -5) ).toBe('Dinosaur1');
    expect( dinoRace3(-10, -5, 2, -3) ).toBe('Dinosaur2');
    expect( dinoRace3(2, 4, 4, 50) ).toBe('Human');
});


xtest('dinoRaceN', () => {
    expect( dinoRaceN([0, 1, 6], 5) ).toBe('Dinosaur3');
    expect( dinoRaceN([0, 4, 6], 5) ).toBe('Human');
    expect( dinoRaceN([1, 5, 30], -5) ).toBe('Dinosaur1');
    expect( dinoRaceN([1, 2, 3, 4, 5, 6], 4) ).toBe('Dinosaur4');
    expect( dinoRaceN([1, 1, 1, 5, 1, 5, 1, 1, 5, 1], -10) ).toBe('Human');
});