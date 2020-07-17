import { createPlan } from './plan.js'
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan()
const plantingTheSeeds = plantSeeds(yearlyPlan)
const allThePlantsInTheField = usePlants()
const plantsToHarvest = harvestPlants(allThePlantsInTheField)
const theCatalog = catalog(plantsToHarvest)

theCatalog

console.log("Welcome to the main module")

// console.log(yearlyPlan)

console.log(allThePlantsInTheField)

console.log(plantingTheSeeds)

console.log(plantsToHarvest)


