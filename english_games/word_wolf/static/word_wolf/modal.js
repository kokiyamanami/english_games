const GenreLink = document.getElementById("GenreLink");
const GenreInput = document.getElementById("GenreInput");
const LoveBtn = document.getElementById("LoveBtn");
const HobbiesBtn = document.getElementById("HobbiesBtn");
const FoodBtn = document.getElementById("FoodBtn");
const DreamsBtn = document.getElementById("DreamsBtn");
const WorkBtn = document.getElementById("WorkBtn");
const MoviesBtn = document.getElementById("MoviesBtn");
const EighteenBtn = document.getElementById("EighteenBtn");

LoveBtn.addEventListener("click", function () {
  GenreLink.textContent = "Love";
  GenreInput.value = "Love";
});

HobbiesBtn.addEventListener("click", function () {
  GenreLink.textContent = "Hobbies";
  GenreInput.value = "Hobbies";
});

FoodBtn.addEventListener("click", function () {
  GenreLink.textContent = "Food";
  GenreInput.value = "Food";
});

DreamsBtn.addEventListener("click", function () {
  GenreLink.textContent = "Dreams";
  GenreInput.value = "Dreams";
});

WorkBtn.addEventListener("click", function () {
  GenreLink.textContent = "Work";
  GenreInput.value = "Work";
});

MoviesBtn.addEventListener("click", function () {
  GenreLink.textContent = "Movies";
  GenreInput.value = "Movies";
});

EighteenBtn.addEventListener("click", function () {
  GenreLink.textContent = "18+";
  GenreInput.value = "18+";
});
