// Функція для перевірки записів на відповідність

export function include(data, condition) {
  return data.filter((item) => {
    return condition.include.some((cond) => {
      return Object.keys(cond).every((key) => item[key] === cond[key]);
    });
  });
}
