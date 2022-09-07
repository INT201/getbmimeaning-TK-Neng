const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return weight / (height * height)
}
function getBMIMeaning(weight, height) {
  //code here
  const bmi = calculateBMI(weight, height)
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight'
  } else {
    return 'Overweight'
  }
}
module.exports = getBMIMeaning
