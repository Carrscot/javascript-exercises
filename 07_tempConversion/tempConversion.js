const ftoc = function(far) {
  let celsius = ((far) - 32) * 5/9;
  let roundedC = Math.round(celsius*10)/10;
  return roundedC
};

const ctof = function(cel) {
  let farenheit = (cel) * 9/5 +32;
  let roundedF = Math.round(farenheit*10)/10;
  return roundedF
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
