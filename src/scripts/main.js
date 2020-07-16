import { createPlan } from './plan.js'
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"

const soybeanSeed = createSoybean()
const cornSeed = createCorn()


addPlant(cornSeed)
addPlant(soybeanSeed)
const allThePlantsInTheField = usePlants()
console.log(allThePlantsInTheField)

console.log("Welcome to the main module")

createPlan()

const yearlyPlan = createPlan()

console.log(yearlyPlan)