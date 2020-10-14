export default (date: string): string => {
  const splittedDate = date.split('T')[0];
  const [year, month, day] = splittedDate.split('-');

  return `${month}/${day}/${year}`;
};
