import { createPlan } from './plan.js'
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js";

const soybeanSeed = createSoybean()
const cornSeed = createCorn()
const yearlyPlan = createPlan()
const plantingTheSeeds = plantSeeds(yearlyPlan)


addPlant(cornSeed)
addPlant(soybeanSeed)

const allThePlantsInTheField = usePlants()
console.log(allThePlantsInTheField)

console.log(plantingTheSeeds)

console.log("Welcome to the main module")

createPlan()


console.log(yearlyPlan)