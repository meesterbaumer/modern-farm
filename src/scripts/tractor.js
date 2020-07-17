import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (planArr) => {
  
    for (const arr of planArr) {
      for (const crop of arr) {
        if (crop === "Asparagus") {
          addPlant(createAsparagus())
        } else if (crop === "Corn") { 
          addPlant(createCorn())
        } else if (crop === "Potato") { 
          addPlant(createPotato())
        } else if (crop === "Soybean") { 
          addPlant(createSoybean())
        } else if (crop === "Sunflower") { 
          addPlant(createSunflower())
        } else if (crop === "Wheat") { 
          addPlant(createWheat())
      }
    }
  }
}