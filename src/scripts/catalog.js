export const catalog = (harvestArray) => {
  const targetElement = document.querySelector(".container")
  
  for (const crop of harvestArray) {
    targetElement.innerHTML += `<section class="plant">${crop.type}</section>`
  }
}