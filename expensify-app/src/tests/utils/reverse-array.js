// a little helper method
// since js array.reverse is destructive and changes the real array
// https://stackoverflow.com/questions/14450201/non-destructively-reversing-an-array-in-javascript
const reverseArray = (array) => {
  return array.reduce((ary, ele) => {
    ary.unshift(ele);
    return ary
  }, []);
};

export default reverseArray;
