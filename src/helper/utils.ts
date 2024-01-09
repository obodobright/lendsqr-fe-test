export function isLastOrSecondToLast(arr: any, number: number) {
  if (arr.length >= 2) {
    return arr[arr.length - 1] === number || arr[arr.length - 2] === number;
  } else if (arr.length === 1) {
    return arr[0] === number;
  }

  return false;
}

// on the mock api, status can't be determine, autogenreated status

export const determineStatus = (index: number) => {
  const num = index + 1;
  let type = "";

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      type = "active";
      break;
    }
  }

  if (type === "") {
    type = "blacklisted";
  }

  const sqrt = Math.sqrt(num);
  if (sqrt === Math.floor(sqrt)) {
    type = "pending";
  }

  const cube = Math.cbrt(num);
  if (cube === Math.floor(cube)) {
    type = "inactive";
  }

  return type;
};

export function formatDate(dateString: Date | string) {
  const options: any = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
