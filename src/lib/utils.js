export function cleanEmptyFilter(filter) {
  const cleanFilter = Object.entries(filter).filter(([, value]) => {
    if (typeof value === "string") {
      return value.length > 0;
    }

    if (typeof value === "number") {
      return value > 0;
    }

    if (Array.isArray(value)) {
      const arrayFiltered = value.filter((v) => typeof v === "number");
      return arrayFiltered.length === value.length && arrayFiltered.length > 0;
    }
  });

  return Object.fromEntries(cleanFilter);
}
