// List of images
const images = ["./images/1.webp", "./images/2.webp", "./images/3.webp"]; 
let currentImageIndex = 0;

// Function to update the image and disable buttons if needed
function updateImage() {
    document.getElementById("mainImage").src = images[currentImageIndex];
    
    // Update thumbnail opacities
    const thumbnails = document.querySelectorAll('.md\\:w-1\\/5 img');
    thumbnails.forEach((thumb, index) => {
        thumb.style.opacity = index === currentImageIndex ? '1' : '0.6';
    });

    // Get buttons
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Disable "Prev" button if at the first image
    prevBtn.disabled = currentImageIndex === 0;
    prevBtn.style.opacity = currentImageIndex === 0 ? '0.5' : '1';

    // Disable "Next" button if at the last image
    nextBtn.disabled = currentImageIndex === images.length - 1;
    nextBtn.style.opacity = currentImageIndex === images.length - 1 ? '0.5' : '1';
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        const mainImage = document.getElementById('mainImage');
        mainImage.style.opacity = '0';
        
        setTimeout(() => {
            currentImageIndex++;
            updateImage();
            mainImage.style.opacity = '1';
        }, 300);
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        const mainImage = document.getElementById('mainImage');
        mainImage.style.opacity = '0';
        
        setTimeout(() => {
            currentImageIndex--;
            updateImage();
            mainImage.style.opacity = '1';
        }, 300);
    }
}

// Function to switch image when clicking thumbnails
function switchImage(index) {
    if (index !== currentImageIndex) {
        const mainImage = document.getElementById('mainImage');
        mainImage.style.opacity = '0';
        
        setTimeout(() => {
            currentImageIndex = index;
            updateImage();
            mainImage.style.opacity = '1';
        }, 300);
    }
}

// Add click event listeners to thumbnails
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.md\\:w-1\\/5 img');
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => switchImage(index));
    });
    
    // Initialize button states on page load
    updateImage();
});

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

// Function to hide success modal
function hideSuccessModal() {
    const modal = document.getElementById('bottlemodal');
    modal.style.display = 'none';
    modal.style.opacity = '0';
}

function hideErrorModal() {
    const modal = document.getElementById('errorModal');
    modal.style.display = 'none';
    modal.style.opacity = '0';
}

function showFinalStep() {
    // Show preloader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';
    preloader.style.opacity = '1';
    
    // After 3 seconds, hide preloader and switch sections
    setTimeout(() => {
        // Hide preloader
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.getElementById('second-section').style.display = 'none';

            preloader.style.display = 'none';
            
            // Hide first section
            document.getElementById('first-section').style.display = 'none';
            
            // Show second section
            document.getElementById('second-section').style.display = 'block';
            
            // After 5 seconds, hide second section and show third section with try modal
            setTimeout(() => {
                // Hide second section
                document.getElementById('second-section').style.display = 'none';
                
                // Show third section
                document.getElementById('third-section').style.display = 'block';
                
                // Show try modal
                document.getElementById('trymodal').style.display = 'flex';
            }, 5000);
        }, 500);
    }, 3000);
}

function hidetryModal() {
    const modal = document.getElementById('trymodal');
    modal.style.display = 'none';
}

// ... existing code ...

// time out function
// ... existing code ...

