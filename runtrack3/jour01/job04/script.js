function bisextile(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
  // return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(bisextile(2000));
