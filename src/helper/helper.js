export const spaceBetweenDigits = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
};

export const fromStrToNum = (str) => {
  const arr = str.split(" ");
  const price = arr[0] + arr[1];
  return +price;
};
