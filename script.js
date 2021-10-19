const count = document.querySelector(".count");
const input = doument.querySelector("input");

input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length;
});