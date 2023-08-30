// window.onload = function () {
//   setupCounter("players");
//   setupCounter("minority");
// };

// function setupCounter(field) {
//   let value = 0;
//   const inputElement = document.getElementById(`${field}input`);
//   const increaseBtn = document.getElementById(`increase${field}`);
//   const decreaseBtn = document.getElementById(`decrease${field}`);

//   function updateInput() {
//     inputElement.value = value;
//   }

//   increaseBtn.addEventListener("click", function () {
//     value++;
//     updateInput();
//   });

//   decreaseBtn.addEventListener("click", function () {
//     value = Math.max(0, value - 1);
//     updateInput();
//   });

//   updateInput();
// }


// const inputElement = document.getElementById("playersinputField");
// const increaseBtn = document.getElementById("playersincreaseBtn");
// const decreaseBtn = document.getElementById("playersdecreaseBtn");
// // const inputValue = inputElement.value;
// // console.log("inputElement")
// // console.log(inputValue)
// // console.log("increaseBtn")
// // console.log(increaseBtn)
// // console.log("decreaseBtn")
// // console.log(decreaseBtn)

// increaseBtn.addEventListener("click", function () {
//   const inputValue = inputElement.value;
//   console.log("inputValue")
//   console.log(inputValue)
// });

// increaseBtn.addEventListener("click", function () {
//   const currentValue = inputElement.value;
//   inputElement.value = currentValue + 1;
// });

// decreaseBtn.addEventListener("click", function () {
//   const currentValue = inputElement.value;
//   inputElement.value = Math.max(0, currentValue - 1);
// });

const playersinputField = document.getElementById("playersinputField");
const playersincreaseBtn = document.getElementById("playersincreaseBtn");
const playersdecreaseBtn = document.getElementById("playersdecreaseBtn");

playersincreaseBtn.addEventListener("click", function () {
  const currentValue = parseInt(playersinputField.value);
  playersinputField.value = currentValue + 1;
});

playersdecreaseBtn.addEventListener("click", function () {
  const currentValue = parseInt(playersinputField.value);
  playersinputField.value = Math.max(2, currentValue - 1);
});

const minorityinputElement = document.getElementById("minorityinputField");
const minorityincreaseBtn = document.getElementById("minorityincreaseBtn");
const minoritydecreaseBtn = document.getElementById("minoritydecreaseBtn");

minorityincreaseBtn.addEventListener("click", function () {
  const currentValue = parseInt(minorityinputElement.value);
  minorityinputElement.value = Math.min(playersinputField.value - 1, currentValue + 1);
});

minoritydecreaseBtn.addEventListener("click", function () {
  const currentValue = parseInt(minorityinputElement.value);
  minorityinputElement.value = Math.max(1, currentValue - 1);
});
