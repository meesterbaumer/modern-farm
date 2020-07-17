export const plantSeeds = (planArr) => {
  const seedsToPlant = []
  
  for (const arr of planArr) {
    for (const crop of arr) {
      seedsToPlant.push(crop)
    }
  }
  return seedsToPlant
}