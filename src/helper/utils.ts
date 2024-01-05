export function isLastOrSecondToLast(arr: any, number: number) {
  if (arr.length >= 2) {
    return arr[arr.length - 1] === number || arr[arr.length - 2] === number;
  } else if (arr.length === 1) {
    return arr[0] === number;
  }

  return false;
}
