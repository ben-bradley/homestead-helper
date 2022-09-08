const padZero = (value) => (value < 10) ? `0${value}` : `${value}`;

const formatDate = (date) => {
  if (typeof date === "string")
    date = new Date(date);

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());

  return `${year}-${month}-${day}`;
}

export {
  formatDate
}
