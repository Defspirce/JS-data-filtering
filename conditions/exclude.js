// Функція для видалення елементів

export function exclude(data, condition) {
  return data.filter((item) => {
    return !condition.exclude.some((cond) => {
      return Object.keys(cond).every((key) => item[key] === cond[key]);
    });
  });
}
