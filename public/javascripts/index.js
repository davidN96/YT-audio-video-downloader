const urlForm = document.getElementById("videoForm");
const videoUrlInput = document.querySelector(".urlInput");
const errorInfo = document.querySelector(".errorInfo");

urlForm.addEventListener("submit", (e) => {
  const isEmpty = !videoUrlInput.value;
  const isTooShort = videoUrlInput.value.length < 20;
  const noHttps = !videoUrlInput.value.includes("https");
  const noYoutube =
    !videoUrlInput.value.includes("youtube") &&
    !videoUrlInput.value.includes("youtu.be");

  if (isEmpty || isTooShort || noHttps || noYoutube) {
    e.preventDefault();
    errorInfo.textContent = "Invalid URL address.";
  }
});
