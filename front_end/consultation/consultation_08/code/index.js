const infoContainer = document.querySelector(".BookInfo");
const button = document.querySelector("button");
const spinner = document.querySelector(".spinner");


const getInfo = () => {
  let myPromise = new Promise((resolve, reject) => {
    spinner.style.display="block";

    //удачный ответ от сервера

    setTimeout(() => {
      let response = {
        statusResponse: 200,
        bookData: {
          bookName: "Brave New World",
          price: 100,
          author: "Aldous Huxley",
        },
      };
      /*let response1 = {
        statusResponse: 500,
        error: {
          message: "Server error",
        },
      };*/
      if (response.statusResponse === 200) {
        resolve(response.bookData);
      } else {
        reject(response.error.message);
      }
    }, 5000);
  });

  myPromise
    .then((result) => {
      infoContainer.innerHTML = `<p>${result.bookName}</p><p>${result.price} </p><p>${result.author} </p>`;
    })
    .catch((result) => {
      infoContainer.innerHTML = `<p class="error">${result}</p>`;
    }).finally(()=> spinner.style.display="none");
};

button.addEventListener("click", getInfo);
