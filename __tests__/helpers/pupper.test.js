const {
    determineDailyFood
} = require("../../helpers/pupper");

describe("Testing the pupper helpers", () => {
    it("The determineDailyFood function works for small dogs", () => {
        const smallPupperOne = {
            age: 3,
            weight: 2
        };
        const smallPupperTwo = {
            age: 3,
            weight: 5
        };
        const smallPupperThree = {
            age: 3,

        }
        expect(determineDailyFood(smallPupperOne)).toBe(100);
        expect(determineDailyFood(smallPupperTwo)).toBe(100);
        expect(determineDailyFood(smallPupperThree)).toBe(100);
    });
    // it("The determineDailyFood function works for medium dogs", () => {
    //     const dummyPupperInfo = {
    //         age: 3,
    //         weight: 75
    //     };
    //     expect(determineDailyFood(dummyPupperInfo)).toBe(100);
    // });
    // it("The determineDailyFood function works for large dogs", () => {
    //     const dummyPupperInfo = {
    //         age: 3,
    //         weight: 75
    //     };
    //     expect(determineDailyFood(dummyPupperInfo)).toBe(100);
    // });
});