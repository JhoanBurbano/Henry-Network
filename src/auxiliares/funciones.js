export const sortByAz = (a, b) => {
  if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
  if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
  return 0;
};

export const sortByZa = (a, b) => {
  if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return 1;
  if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return -1;
  return 0;
};
