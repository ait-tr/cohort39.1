const pricesContainer = document.querySelector(".prices-container");
const filterButton = document.querySelector(".filter-button");

const prices = [100, 400, 900, 300, 500];

// Вариант 1
// prices.forEach((price) => {
//   const priceBlock = document.createElement("div");
//   priceBlock.textContent = price;
//   pricesContainer.append(priceBlock);
// });

// const filterPrices = () => {
//   pricesContainer.innerHTML = ``;

//   const filterPrices = prices.filter((price) => price > 450);

//   filterPrices.forEach((price) => {
//     const priceBlock = document.createElement("div");
//     priceBlock.textContent = price;
//     pricesContainer.append(priceBlock);
//   });
// };

// filterButton.addEventListener("click", filterPrices);

// Вариант 2
const renderPrices = (pricesArray) => {
  pricesArray.forEach((price) => {
    const priceBlock = document.createElement("div");
    priceBlock.textContent = price;
    pricesContainer.append(priceBlock);
  });
};

renderPrices(prices);

const filterPrices = () => {
  pricesContainer.innerHTML = ``;

  const filterPrices = prices.filter((price) => price > 450);

  renderPrices(filterPrices);
};

filterButton.addEventListener("click", filterPrices);
