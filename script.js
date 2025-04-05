// Array of image filenames
const images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img7.jpeg'];

// Object containing the alternative text for each image
const imageAlt = {
    'img1.jpeg': 'Sunset over a tropical beach with palm trees',
    'img2.jpeg': 'Lone tree on a small island in a misty lake',
    'img3.jpeg': 'Looking up through tree canopy to blue sky',
    'img4.jpeg': 'Underwater view of rocks and coral in crystal clear water',
    'img5.jpg': 'Aerial view of rocky coastline with turquoise waters',
    'img6.jpeg': 'Misty mountain peaks with dramatic clouds',
    'img7.jpeg': 'Close-up of a red rose with water droplets'
};

// Get references to DOM elements
const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button.dark');
const overlay = document.querySelector('.overlay');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Keep track of current image index
let currentImageIndex = 0;

// Function to update displayed image
function updateImage(index) {
    currentImageIndex = index;
    displayedImg.src = images[index];
    displayedImg.alt = imageAlt[images[index]];
}

// Navigation button handlers
prevBtn.addEventListener('click', () => {
    let newIndex = currentImageIndex - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    updateImage(newIndex);
});

nextBtn.addEventListener('click', () => {
    let newIndex = currentImageIndex + 1;
    if (newIndex >= images.length) newIndex = 0;
    updateImage(newIndex);
});

// Loop through images and create thumbnails
images.forEach((image, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', imageAlt[image]);
    thumbBar.appendChild(newImage);

    // Add click handler to thumbnail
    newImage.addEventListener('click', () => {
        updateImage(index);
    });
});

// Darken/Lighten button click handler
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}); 