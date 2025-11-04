export function dateAsString(date: Date, offset: number = 0) {
  var localDate = new Date(date);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  });

  localDate.setDate(localDate.getDate() + offset);
  const [month, day, year] = formatter.format(localDate).split("/");
  return `${year}${month}${day}`;
}