export default function formatDate(date: string): string {
  const [splittedDate, splittedHour] = date.split('T');
  const [year, month, day] = splittedDate.split('-');
  const [hour, minutes] = splittedHour.split(':');

  return `${month}/${day}/${year} - ${hour}:${minutes}`;
}
