export const numberFormatterUtility = (value: number): string => {
  if (value < 1000) {
    return value.toString();
  } else if (value < 10000) {
    const [wholeNum, decimal] = (value / 1000).toString().split('.');
    return `${wholeNum},${decimal}`;
  } else if (value < 1000000) {
    const [wholeNum, decimal] = (value / 1000).toString().split('.');
    return `${wholeNum}${decimal ? '.' + decimal : ''}K`;
  } else {
    const [wholeNum, decimal] = (value / 1000000).toString().split('.');
    return `${wholeNum}${decimal ? '.' + decimal : ''}M`;
  }
};
