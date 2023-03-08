
const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.backgroundColor = '#fff';
modal.style.width = '300px';
modal.style.height = '200px';
modal.style.border = '1px solid #ccc';
modal.style.display = 'flex';
modal.style.flexDirection = 'column';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
document.body.appendChild(modal);

const text = document.createElement('p');
text.textContent = 'Ви ще тут?';
text.style.color = 'black';
text.style.fontSize = '38px';
text.style.textAlign = 'center';
text.style.margin = '40px auto';
modal.appendChild(text);

const buttons = document.createElement('div');
buttons.style.display = 'flex';
buttons.style.flexDirection = 'row';
buttons.style.justifyContent = 'center';
buttons.style.alignItems = 'center';
buttons.style.gap = '30px';
modal.appendChild(buttons);

const stayButton = document.createElement('button');
stayButton.textContent = 'Так';
stayButton.style.backgroundColor = '#37806B';
stayButton.style.color = '#fff';
stayButton.style.padding = '10px 20px';
stayButton.style.border = '1px solid #37806B';
buttons.appendChild(stayButton);

const closeButton = document.createElement('button');
closeButton.textContent = 'Ні';
closeButton.style.backgroundColor = '#fff';
closeButton.style.color = '#37806B';
closeButton.style.padding = '10px 20px';
closeButton.style.border = '1px solid #37806B';
buttons.appendChild(closeButton);


stayButton.addEventListener('click', () => {
  clearTimeout(timer);
  modal.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  window.close();
});


const timer = setTimeout(() => {
  modal.style.display = 'block';
}, 6000);
