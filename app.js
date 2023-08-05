const clickNumber = document.querySelectorAll(".click-numbers");
const submitBtn = document.querySelector("#submit-btn");
const rating = document.querySelector("#rating");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

clickNumber.forEach((num) => {
  num.addEventListener("click", function () {
    const value = num.getAttribute("data-value");

    // Reset styles of all number elements
    clickNumber.forEach((n) => {
      n.style.backgroundColor = "hsla(213, 14%, 25%, 0.723)";
      n.style.color = "var(--color_inside_circles)";
    });

    // Highlight the clicked number
    num.style.backgroundColor = "hsl(25, 97%, 53%)";
    num.style.color = "white";

    // Show the thank you message box and hide the rating box
    submitBtn.addEventListener("click", function () {
      box2.style.display = "block";
      box1.style.display = "none";
      rating.textContent = `You selected ${value} out of 5`;
    });
  });
});
