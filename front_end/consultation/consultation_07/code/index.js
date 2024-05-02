const ar = ["red", "blue", "white", "black", "jellow"];

const containerCard = document.querySelector(".color-containers");
const buttonFilter = document.querySelector("button");

const arCards = ar.map((el) => {
  const colorCard = document.createElement("div");
  colorCard.textContent = el;
  return colorCard;
  //сразу на страницу в мэп не отпрапляем
});

arCards.forEach((el) => {
  containerCard.append(el);
});

let selectColor = "white";

const filterColor = () => {
  const arSelectcolor = ar.filter((el) => {
    return el === selectColor;
  });

  console.log(arSelectcolor);

  containerCard.innerHTML = ``;

  const arCardsFilter = arSelectcolor.map((el) => {
    const colorCard = document.createElement("div");
    colorCard.textContent = el;
    return colorCard;
  });

  console.log(arCardsFilter);
  
  arCardsFilter.forEach((el) => {
    containerCard.append(el);
  });
};

buttonFilter.addEventListener("click", filterColor);
