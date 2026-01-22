const textArea = document.getElementById("text");
const countText = document.getElementById("count");
const limit = 50;

textArea.addEventListener("input", () => {
  const remaining = limit - textArea.value.length;
  countText.innerText = remaining + " characters remaining";

  if (remaining === 0) {
    countText.style.color = "red";
  } else {
    countText.style.color = "black";
  }
});
