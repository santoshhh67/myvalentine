const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay! I love you so much my babyy and thank you for loving me as well.  Happy Valentine's Day ❤";
  gif.src =
    "https://media.giphy.com/media/l7LBZEIL5kh6TzRXE6/giphy.gif";
const yesBtn=document.querySelector(".yes-btn");
const noBtn =document.querySelector(".no-btn");
noBtn.remove();
yesBtn.remove();
});
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});