import "./styles/index.css";

console.log("Hello webpack!\n");

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(number => number * 2);

console.log(doubleNumbers);

const plantImage = new URL('./plant.jpg', import.meta.url);

const images = [
  { name: "Plant", link: plantImage }
];
images.forEach(image => {
  const imageElement = document.createElement("img");
  imageElement.src = image.link;
  imageElement.width = 640;
  document.body.appendChild(imageElement);
});
