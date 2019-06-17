const enhancer = require('./enhancer.js');
const {repair} = require('./enhancer.js');

// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
      it('restores durability to 100', () => {
        expect(repair({ durability: 89 }).durability).toBe(100);
        expect(repair({ durability: -89 }).durability).toBe(100);
        expect(repair({ durability: 100 }).durability).toBe(100);
        expect(repair({ durability: 0 })).toEqual({ durability: 100 });
      });
    });
  
describe('succeed()', () => {
it('should have newItem increment by 1', () => {
     const item = {enhancement: 18};
     const actual = enhancer.succeed(item);
     expect(actual.enhancement).toBe(19)
    })
  });
});