// dinoRaces.test.js

const { dinoRace3, dinoRaceN } = require('./dinoRaces');


test('dinoRace3', () => {
    expect( dinoRace3(0, 1, 6, 5) ).toBe('Dinosaur3');
    expect( dinoRace3(0, 4, 6, 5) ).toBe('Human');
    expect( dinoRace3(3, 5, 30, 1) ).toBe('Dinosaur1');
    expect( dinoRace3(4, 20, 34, 15) ).toBe('Dinosaur2');
    expect( dinoRace3(7, 4, 7, 20) ).toBe('Human');
});


xtest('dinoRaceN', () => {
    expect( dinoRaceN([0, 1, 6], 5) ).toBe('Dinosaur3');
    expect( dinoRaceN([0, 4, 6], 5) ).toBe('Human');
    expect( dinoRaceN([3, 5, 30], 1) ).toBe('Dinosaur1');
    expect( dinoRaceN([1, 2, 3, 4, 5, 6], 4) ).toBe('Dinosaur4');
    expect( dinoRaceN([50, 40, 30, 20, 10], 15) ).toBe('Human');
});