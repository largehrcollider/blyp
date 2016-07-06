const normalizePrice = (current, previous, allCurrent, allPrevious) => {
  if (!current) {
    return current;
  }
  var numbers = current.replace(/[^\d]/g, '').replace(/^0+/, '');
  return ''
    + (numbers.slice(0, -2) ? numbers.slice(0, -2) : 0) // units and greater
    + '.'
    + (numbers.slice(-2, -1) ? numbers.slice(-2, -1) : 0) // tenths
    + (numbers.slice(-1) ? numbers.slice(-1) : 0) // hundredths
};

export default normalizePrice;
