const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const dateSameDay = (date1, date2) => {
  return date1.getDay() === date2.getDay()
}

export const dateSameMonth = (date1, date2) => {
  return date1.getMonth() === date2.getMonth()
}

export const dateSameYear = (date1, date2) => {
  return date1.getFullYear() === date2.getFullYear()
}

export const isSameDate = (date1, date2) => {
  const day = dateSameDay(date1, date2)
  const month = dateSameDay(date1, date2)
  const year = dateSameDay(date1, date2)

  return day && month && year
}

export const dayDifference = (a, b) => {
  if (isSameDate(a,b)) { return 0 }
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}