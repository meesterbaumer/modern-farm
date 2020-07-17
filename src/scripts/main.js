import { createPlan } from './plan.js'
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan()
const plantingTheSeeds = plantSeeds(yearlyPlan)
const allThePlantsInTheField =usePlants()

console.log("Welcome to the main module")

// console.log(yearlyPlan)

console.log(allThePlantsInTheField)

console.log(plantingTheSeeds)



