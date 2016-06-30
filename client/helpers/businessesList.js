export default (businesses) => {
  var businessesList = [];
  for (var b in businesses) {
    businessesList.push(b);
  }
  return businessesList;
}
