const adsContainer = document.createElement('div');

adsContainer.style.position = 'fixed';
adsContainer.style.right = '10px';
adsContainer.style.top = '70%';
adsContainer.style.transform = 'translateY(-50%)';
adsContainer.style.zIndex = '1000';

const img = document.createElement('img');

img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Q31acqIO46OSK_QzNb-1ZhDOeL74_Rc8lw&s';

img.style.cursor = 'pointer';
img.style.width = '100px'

img.addEventListener('click', () => {
  window.open('https://s.shopee.vn/4AfcdjRnTh', '_blank');
});
const closeButton = document.createElement('button');
closeButton.style.position = 'fixed';
closeButton.style.top = '-20px';
closeButton.style.right = '0';
closeButton.innerText = 'X';
closeButton.style.background = 'red';
closeButton.style.color = 'white';
closeButton.style.border = 'none';
closeButton.style.padding = '5px';

closeButton.addEventListener('click', () => {
  document.body.removeChild(adsContainer);
});

adsContainer.appendChild(img);
adsContainer.appendChild(closeButton);
document.body.appendChild(adsContainer);

