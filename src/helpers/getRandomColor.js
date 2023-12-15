export const generateCategoryColor = () => {
  const colors = [
    'bg-indigo-300',
    'bg-green-300',
    'bg-red-300',
    'bg-orange-300',
    'bg-yellow-300',
    'bg-pink-300',
    'bg-purple-300',
    'bg-lime-300',
    'bg-sky-300',
    'bg-blue-300',
    'bg-fuchsia-300'
  ]

  const color = colors[Math.floor(Math.random() * colors.length)]
  return color
}
