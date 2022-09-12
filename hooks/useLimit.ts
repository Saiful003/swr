export const useLimit = (limit: number, currentLength: number) => {
  if (limit === currentLength) {
    return `0 word left`;
  }
  if (limit > currentLength) {
    return `${limit - currentLength} words left`;
  }
  if (limit < currentLength) {
    return `${currentLength - limit} words exceeded`;
  }
};
