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
      });

      it('should have newItem increment by 1', () => {
        const item = {enhancement: 20};
        const actual = enhancer.succeed(item);
        expect(actual.enhancement).toBe(20)
      })

    });

    describe('fail()', () => {
    it('should change durability', () => {
        const item = {enhancement:14, durability: 50};
        const actual = enhancer.fail(item);
        expect(actual.durability).toBe(45)
    });

    it('should change durability', () => {
        const item = {enhancement:16, durability: 50};
        const actual = enhancer.fail(item);
        expect(actual.durability).toBe(40)
    });

    it('should change durability', () => {
        const item = {enhancement:17};
        const actual = enhancer.fail(item);
        expect(actual.enhancement).toBe(16);
    });

    })
});