var damage = require("../src/CCFrontTask2");

describe('damage', function () {
    it('should return 2 because fe is 1, x is -1, and ai is 2', function ()  {
        var result = damage.damage('fexai');
        expect(result).toBe(2);
    })
});

describe('damage', function () {
    it('should return 5 because it finds a proper pattern and reoves unneccessary' +
        'signs, and then calculates the result and fe is 1, daine is 7, ai is 1, other signs are -1  ', function () {
        var result = damage.damage('vvvvfejisdainelsaisjdks');
        expect(result).toBe(5);
    });
});

describe('damage', function () {
    it('should return 0 because in a long spell there are more than 1 fe', function () {
        var result = damage.damage('fefefefedainexxxdjejeai');
        expect(result).toBe(0);
    });
});

describe('damage', function () {
    it('should return 0 because spell contains multiply fe', function () {
        var result = damage.damage('fefefe');
        expect(result).toBe(0);
    });
});

describe('damage', function () {
    it('should return 0 because damage function does not find a proper pattern', function () {
        var result = damage.damage('asjdhasdjjhasdjas');
        expect(result).toBe(0);
    });
});

describe('damage', function () {
    it('should return 0 because the signs between fe and ai return result less than 0 ' +
        'and in that case damage function return 0 ', function () {
        var result = damage.damage('feajshdjashdjahsdai');
        expect(result).toBe(0);
    });
});

describe('damage ', function () {
    it('should return proper results mentioned in a provided task', function() {
        expect(damage.damage('feeai')).toBe(2);
        expect(damage.damage('feaineain')).toBe(7);
        expect(damage.damage('jee')).toBe(0);
        expect(damage.damage('fefefefefeaiaiaiaiai')).toBe(0);
        expect(damage.damage('fdafafeajain')).toBe(1);
        expect(damage.damage('fexxxxxxxxxxai')).toBe(0);
    })
})