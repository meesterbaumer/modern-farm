const allThePlants = []

export const addPlant = (seedObj) => {
  if (Array.isArray(seedObj)) {
    for (const seed of seedObj) {
      allThePlants.push(seed)      
    }
  }
  else 
  allThePlants.push(seedObj)

}

export const usePlants = () => {
  return allThePlants.slice()
}