function dayWork(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const daysOff2020 = ["1-1", "13-4", "1-5", "8-5", "21-5", "1-6", "14-7", "15-8", "1-11", "11-11", "25-12"];
  const dayMonth = day + "-" + month;
  const dayWeek = date.getDay();

  if (daysOff2020.includes(dayMonth)) {
    console.log("Le " + day + "/" + month + "/" + year + " est un jour férié.");
  } else if (dayWeek === 0 || dayWeek === 6) {
    console.log("Non, le " + day + "/" + month + "/" + year + " est un week-end.");
  } else {
    console.log("Oui, le " + day + "/" + month + "/" + year + " est un jour travaillé.");
  }
}

dayWork(new Date(2020, 4, 13));