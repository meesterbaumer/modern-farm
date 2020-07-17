export const harvestPlants = (plantsArrFromField) => {
  let harvesterArray = []
  for (const crop of plantsArrFromField) {
    if (crop.type === "Corn") {
      const halfCorn = crop.output/2
      for (let i = 0; i < halfCorn; i++) {
        harvesterArray.push(crop)
      }
    } else {
      for (let c = 0; c < crop.output; c++) {
        harvesterArray.push(crop)
      }
    }
  }
  return harvesterArray
}