// List of images
const images = ["./images/1.webp", "./images/2.webp", "./images/3.webp"]; 
let currentImageIndex = 0;

// Function to update the image and disable buttons if needed
function updateImage() {
    document.getElementById("mainImage").src = images[currentImageIndex];

    // Get buttons
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Disable "Prev" button if at the first image
    if (currentImageIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    // Disable "Next" button if at the last image
    if (currentImageIndex === images.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// Function for next image
function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updateImage();
    }
}

// Function for previous image
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage();
    }
}

// Initialize button states on page load
updateImage();
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function nextQuestion(current, next) {
    // Hide current question
    document.getElementById(`question-${current}`).classList.add('hidden');
    // Show next question
    document.getElementById(`question-${next}`).classList.remove('hidden');
}
function formatDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

const today = new Date();
const futureDate = new Date();
futureDate.setDate(today.getDate() + 2); // Adjust the days as needed

document.getElementById("delivery-date").innerText = `Delivery ${formatDate(futureDate)}`;

// Function to handle final step (after last question)
function showFinalStep() {
    // You can add functionality here for what happens after the last question
    alert("Thank you for completing the questions!");
}