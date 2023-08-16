const includesAll = <T>(arr1: T[], arr2: T[]): boolean =>
  arr2.every((element: T) => arr1.includes(element));

export { includesAll };
