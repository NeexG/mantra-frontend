let currentStep = 1;
const totalSteps = 6;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
    setupServiceCards();
    setupAppointmentTypeCards();
});

// Next Step
function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        updateProgressBar();
    }
}

// Previous Step
function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        updateProgressBar();
    }
}

// Show specific step
function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.booking-step').forEach(stepEl => {
        stepEl.classList.remove('active');
    });

    // Show current step
    const currentStepEl = document.getElementById(`step-${step}`);
    if (currentStepEl) {
        currentStepEl.classList.add('active');
    }

    // Update back button state
    const backButtons = document.querySelectorAll('.btn-back');
    backButtons.forEach(btn => {
        if (step === 1) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    });
}

// Update Progress Bar
function updateProgressBar() {
    const steps = document.querySelectorAll('.progress-step');
    
    steps.forEach((stepEl, index) => {
        const stepNumber = index + 1;
        stepEl.classList.remove('completed', 'active');

        if (stepNumber < currentStep) {
            stepEl.classList.add('completed');
        } else if (stepNumber === currentStep) {
            stepEl.classList.add('active');
        }
    });

    // Update progress line
    updateProgressLine();
}

// Update Progress Line
function updateProgressLine() {
    const progressBar = document.querySelector('.progress-bar');
    const completedSteps = currentStep - 1;
    const totalSteps = 6;
    const progressPercentage = (completedSteps / (totalSteps - 1)) * 100;

    // Remove existing progress line if any
    const existingLine = progressBar.querySelector('.progress-line');
    if (existingLine) {
        existingLine.remove();
    }

    // Create progress line
    if (completedSteps > 0) {
        const progressLine = document.createElement('div');
        progressLine.className = 'progress-line';
        progressLine.style.cssText = `
            position: absolute;
            top: 20px;
            left: 60px;
            width: ${progressPercentage}%;
            height: 2px;
            background: #29aadf;
            z-index: 0;
            transition: width 0.3s ease;
        `;
        progressBar.appendChild(progressLine);
    }
}

// Setup Service Cards
function setupServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected from all cards
            serviceCards.forEach(c => c.classList.remove('selected'));
            // Add selected to clicked card
            this.classList.add('selected');
        });
    });
}

// Setup Appointment Type Cards
function setupAppointmentTypeCards() {
    const appointmentCards = document.querySelectorAll('.appointment-type-card');
    appointmentCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected from all cards
            appointmentCards.forEach(c => c.classList.remove('selected'));
            // Add selected to clicked card
            this.classList.add('selected');
        });
    });
}

