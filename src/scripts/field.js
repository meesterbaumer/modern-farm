const allThePlants = []

export const addPlant = (seedObj) => {
  if (Array.isArray(seedObj)) {
    allThePlants.push(seedObj)
  }
  else 
}

export const usePlants = () => {
  return allThePlants.slice()
}