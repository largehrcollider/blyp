const centsNumberToString = (cents) => {
  if (typeof cents !==  'number' && typeof cents !== 'string') {
    return '0.00';
  } else {
    var text = String(cents);
    if (text.indexOf('.') !== -1) {
      console.error('Invalid price quantities being used. Number of cents: ', cents);
    } else {
      var numbers = text.replace(/[^\d]/g, '').replace(/^0+/, '');
      return ('' +
        + (numbers.slice(0, -2) ? numbers.slice(0, -2) : 0) // units and greater
        + '.'
        + (numbers.slice(-2, -1) ? numbers.slice(-2, -1) : 0) // tenths
        + (numbers.slice(-1) ? numbers.slice(-1) : 0) // hundredths
      );
    }
  }
}

export default centsNumberToString;
