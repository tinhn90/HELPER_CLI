//random 1-5 seconds
let randomTime = Math.floor(Math.random() * 5 + 1) * 2000;
//get all buttons
let buttons = Array.from(document.querySelectorAll("button"));
let followButtons = buttons.filter((button) => button.textContent === "Follow");

followButtons.forEach((button, index) => {
  setTimeout(() => {
    button.click();
  }, index * randomTime);
});

//scroll down 100px every 1-5 seconds
let scrollDown = () => {
  window.scrollBy(0, 200);
};
setInterval(scrollDown, Math.floor(Math.random() * 5 + 1) * 2000);
