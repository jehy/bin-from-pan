function binFromPan(pan) {
  const panStr = pan.toString();
  if (panStr.length < 4) {
    throw new Error('pan too short!');
  }
  let first = panStr.substr(0, 4);
  first = parseInt(first, 10);
  if (isNaN(first)) {
    throw new Error('Pan is not numeric!');
  }
  if (first >= 2200 && first <= 2204) {
    return panStr.substr(0, 8); // MIR payment system
  }
  return panStr.substr(0, 6);
}

module.exports = binFromPan;
