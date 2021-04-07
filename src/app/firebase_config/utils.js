exports.countTotalPrice = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);
};
