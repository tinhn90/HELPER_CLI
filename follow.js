let buttons = Array.from(document.querySelectorAll('button'));
let followButtons = buttons.filter(button => button.textContent === 'Follow');

followButtons.forEach((button, index) => {
    setTimeout(() => {
        button.click();
    }, index * 2000);
});
