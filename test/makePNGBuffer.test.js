// @ts-nocheck
import makePNGBuffer from '../src/utils/helpers/makePNGBuffer'
import fs from 'fs'

/** 
 * Make 2dArray of gradational values. Top left is 0 (black). Bottom right is 1 (white).
 * @return {Array.<Array.<number>>} 
 * */
const genMockGradation = (numRows, numColumns) => {
  const outerArray = new Array(numRows).fill([]).map((_, rowIdx) => {
    const innerArray = new Array(numColumns).fill(0).map((_, columnIdx) => columnIdx * rowIdx / numColumns / numRows);
    return innerArray;
  });
  return outerArray
}

test('image', () => {
  const mock = genMockGradation(10,10);
  const buffer = makePNGBuffer(mock);
  fs.writeFileSync(__dirname + '/output/pngBuffer.png', buffer);
  // Check the output file by your eyes.
});