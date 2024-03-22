//#region Date related stuff
export function getMonthName(month: number) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[month];
}

export function stringifyDate(date: Date) {
  const year = date.getFullYear(),
    month = getMonthName(date.getMonth()),
    day = date.getDate();
  return `${month} ${day}, ${year}`;
}
//#endregion

export function isInteger(value: string) {
  return /^\d+$/.test(value);
}

export function validatePage(page: string) {
  return isInteger(page) && parseInt(page) > 0;
}
