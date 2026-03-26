// --- Image Slider Logic ---
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove("active"));
    
    // Increment index, reset if at the end
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show current slide (arrays are 0-indexed, so we subtract 1)
    if(slides.length > 0) {
        slides[slideIndex - 1].classList.add("active");
    }
    
    // Change image every 3 seconds
    setTimeout(showSlides, 3000); 
}

// Initialize slider if images exist
if (slides.length > 0) {
    showSlides();
}


// --- WhatsApp Form Submission Logic ---
document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent standard page reload

    // Gather input values
    const parentName = document.getElementById('parentName').value;
    const childName = document.getElementById('childName').value;
    const childAge = document.getElementById('childAge').value;
    const mobileNo = document.getElementById('mobileNo').value;

    // School's WhatsApp Number (Include country code without '+' or '00')
    const whatsappNumber = "918519854024";

    // Format the message
    const message = `*New Admission Inquiry!* 🌈%0A%0A` +
                    `*Parent Name:* ${parentName}%0A` +
                    `*Child Name:* ${childName}%0A` +
                    `*Child Age:* ${childAge} years%0A` +
                    `*Contact Number:* ${mobileNo}%0A%0A` +
                    `Please let me know the admission process!`;

    // Create the WhatsApp API URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappURL, '_blank');
    
    // Optional: clear the form after submission
    this.reset();
});
