const { addContinent, getTheLongestString, sum } = require('./main');

describe('Positive cases', () => {
  test('Should return new array with new object property', () => {
    expect(
      addContinent(
        [
          { city: 'Tokyo', country: 'Japan' },
          { city: 'Bangkok', country: 'Thailand' },
        ],
        'Asia'
      )
    ).toEqual([
      { city: 'Tokyo', country: 'Japan', continent: 'Asia' },
      { city: 'Bangkok', country: 'Thailand', continent: 'Asia' },
    ]);
  });
  test('Should return the longest string', () => {
    expect(getTheLongestString(['I', 'need', 'candy'])).toEqual('candy');
    expect(getTheLongestString(['I', 'need', 'candy', 'fancy'])).toEqual(
      'candy, fancy'
    );
  });
  test('Should return the sum of values that more than number', () => {
    expect(sum([1, 2, 3, 4, 5, 6, 7], 2)).toEqual(25);
    expect(sum([78, 99, 100, 101, 401], 99)).toEqual(602);
  });
});
