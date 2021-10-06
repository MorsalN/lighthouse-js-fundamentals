const whichSchool = function (age) {
  if (age < 13 && age >= 1) {
    return 'Elementary School'
    //console.log('Elementary School');
  } else if (age < 18 && age >= 13) {
    return 'Secondary School'
    //console.log('Secondary School');
  } else {
    return 'Lighthouse Labs'
    //console.log('Lighthouse Labs');
  }
}
console.log(whichSchool(10));

//SUCCESS!!