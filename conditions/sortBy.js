// Функція для сортування елементів

export function sortBy(data, condition) {
  return data.sort((a, b) => {
    for (let key of condition.sortBy) {
      if (a[key] !== b[key]) {
        return a[key] > b[key] ? 1 : -1;
      }
    }
    return 0;
  });
}
