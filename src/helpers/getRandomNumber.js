const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min)

export const getTwoNumbers = () => {
  const num1 = getRandomNumber(0, 21)
  let num2 = getRandomNumber(0, 21)

  while (num2 === num1) {
    num2 = getRandomNumber(0, 21)
  }

  return [num1, num2]
}

// Ejemplo de uso
const [num1, num2] = getTwoNumbers()
console.log(num1, num2)
