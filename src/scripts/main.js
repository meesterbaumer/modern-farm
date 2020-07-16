import { createPlan } from './plan.js'
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"

const soybeanSeed = createSoybean()
const cornSeed = createCorn()

console.log(soybeanSeed)
console.log(cornSeed)

console.log("Welcome to the main module")

createPlan()

const yearlyPlan = createPlan()

console.log(yearlyPlan)