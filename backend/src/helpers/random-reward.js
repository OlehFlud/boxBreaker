export const randomReward = async (values, probabilities) => {
  // Генеруємо випадкове число від 0 до 100
  const random = Math.random() * 100;

  // Накопичувальна сума для ймовірностей
  let cumulative = 0;

  for (let i = 0; i < values.length; i++) {
    cumulative += probabilities[i];

    // Перевіряємо, чи потрапляє випадкове число у відповідний інтервал
    if (random < cumulative) {
      return values[i]; // Повертаємо значення, яке відповідає інтервалу
    }
  }

  return null; // Якщо нічого не знайдено (не має бути в коректному сценарії)
}