import { include } from "./conditions/include.js";
import { exclude } from "./conditions/exclude.js";
import { sortBy } from "./conditions/sortBy.js";

// Функція для фільтрації та сортування даних за заданою умовою

function filterAndSort(data, condition) {
  if ("include" in condition) {
    data = include(data, condition);
    if (data.length === 0) {
      return "No matches found.";
    }
  }
  if ("exclude" in condition) {
    data = exclude(data, condition);
    if (data.length === 0) {
      return "All data excluded.";
    }
  }
  if ("sortBy" in condition) {
    data = sortBy(data, condition);
  }
  return data;
}

// Вхідні дані

const inputData = {
  data: [
    { user: "mike@mail.com", rating: 20, disabled: false },
    { user: "greg@mail.com", rating: 14, disabled: false },
    { user: "john@mail.com", rating: 25, disabled: true },
  ],
  condition: { exclude: [{ disabled: true }], sortBy: ["rating"] },
};

// Приклад використання

const result = filterAndSort(inputData.data, inputData.condition);

console.log(result);
