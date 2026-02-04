//  const express = require("express");
// const app = express();

// // HTML folder ko server se link karo
// app.use(express.static("public"));

// app.listen(3000, () => {
//   console.log("Server running at http://127.0.0.1:3000");
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/html/index.html");
// });


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // Generate fireflies
  const numberOfFireflies = 50;
  for(let i = 0; i < numberOfFireflies; i++){
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    firefly.style.left = Math.random() * 100 + 'vw';
    firefly.style.animationDuration = 5 + Math.random() * 5 + 's';
    firefly.style.width = 3 + Math.random() * 5 + 'px';
    firefly.style.height = firefly.style.width;
    document.body.appendChild(firefly);
  }


const box = document.getElementById("box");

let isDragging = false;
let offsetX, offsetY;

box.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - box.offsetLeft;
  offsetY = e.clientY - box.offsetTop;
  box.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  box.style.left = (e.clientX - offsetX) + "px";
  box.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  box.style.cursor = "grab";
});
