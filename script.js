"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Sời Thạch biết mà, Thạch đẹp trai số 1 mà😄😄😄😄😄😄😄😄😄";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "không đẹp trai",
    "xem lại đi",
    "xem lại đi không ép buộc nhận đâu",
    "không phải ngại đâu",
    "bạn ngại Thạch nên không chọn đúng honnggg",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  // Nếu image là số = 0 thì đổi ảnh từ thư mục img
  // Nếu image <= 0 hoặc lặp lại vượt số lượng ảnh, giữ GIF mặc định
  const defaultGif = "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif";

  if (image = 0 && image <= 3) { // giả sử bạn có 3 ảnh trong thư mục img
    catImg.src = `img/cat-${image}.jpg`;
  } else {
    catImg.src = defaultGif;
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
