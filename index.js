// //1


// const gallery = document.querySelector('.gallery');
// const images = document.querySelectorAll('.image');

// const fullImageContainer = document.createElement('div');
// fullImageContainer.classList.add('full-image-container');
// const fullImage = document.createElement('img');
// fullImage.classList.add('full-image');
// fullImageContainer.appendChild(fullImage);
// document.body.appendChild(fullImageContainer);
// let currentIndex = -1;
// const openFullImage = (index) => {
//     currentIndex = index;
//     fullImage.src = images[currentIndex].src;
//     fullImageContainer.style.display = 'flex';
//   };

//   const closeFullImage = () => {
//     fullImageContainer.style.display = 'none';
//     currentIndex = -1;
//   };

//   const showNextImage = () => {
//     if (currentIndex === -1) return;
//     currentIndex = (currentIndex + 1) % images.length;
//     fullImage.src = images[currentIndex].src;
//   };

//   const showPrevImage = () => {
//     if (currentIndex === -1) return;
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     fullImage.src = images[currentIndex].src;
//   };

//   images.forEach((image, index) => {
//     image.addEventListener('click', () => openFullImage(index));
//   });

//   document.addEventListener('keydown', (event) => {
//     if (currentIndex !== -1) {
//       if (event.key === 'ArrowRight') {
//         showNextImage();
//       } else if (event.key === 'ArrowLeft') {
//         showPrevImage();
//       } else if (event.key === 'Escape') {
//         closeFullImage();
//       }
//     }
//   });

//2
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const renderButton = controls.querySelector('[data-action="render"]');
const destroyButton = controls.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
    const boxes = [];
    let size = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomColor();
      box.textContent = i + 1; // Для візуалізації номеру
      boxes.push(box);
      size += 10; // Збільшення розміру кожного наступного div
    }
  
    boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  renderButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (!isNaN(amount) && amount > 0) {
      createBoxes(amount);
    } else {
      alert('Будь ласка, введіть коректну кількість елементів.');
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);