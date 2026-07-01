

// Configuration

const CONFIG = {
  FORM_NAME: "consultation_booking",
  LEAD_SOURCE: "Google Ads - Consultation Landing Page",
  SUCCESS_DELAY: 1000,
};

// DOM Elements


const form = document.getElementById("consultationForm");
const thankYouSection = document.getElementById("thankYou");

const submitButton = document.querySelector(".cta-btn");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

// Initialize Google Tag Manager Data Layer

window.dataLayer = window.dataLayer || [];

// Event Listeners

form.addEventListener("submit", handleFormSubmit);

// Main Submit Function

function handleFormSubmit(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!validateForm(name, phone)) {
    return;
  }

  setLoadingState(true);

  try {
    pushConsultationEvent();

    console.log("GTM Event Fired Successfully");

    console.table(window.dataLayer);

    setTimeout(() => {
      showSuccessState();
    }, CONFIG.SUCCESS_DELAY);
  } catch (error) {
    console.error("Submission Error:", error);

    alert("Something went wrong. Please try again.");

    setLoadingState(false);
  }
}

// Form Validation

function validateForm(name, phone) {
  if (name.length < 3) {
    alert("Please enter your full name.");

    nameInput.focus();

    return false;
  }

  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");

    phoneInput.focus();

    return false;
  }

  return true;
}

// GTM Event

function pushConsultationEvent() {
  window.dataLayer.push({
    event: "consultation_form_submitted",

    form_name: CONFIG.FORM_NAME,

    lead_source: CONFIG.LEAD_SOURCE,

    page_name: document.title,

    page_url: window.location.href,

    submission_time: new Date().toISOString(),
  });
}

// Loading State

function setLoadingState(isLoading) {
  submitButton.disabled = isLoading;

  nameInput.disabled = isLoading;

  phoneInput.disabled = isLoading;

  submitButton.setAttribute("aria-busy", isLoading);

  submitButton.textContent = isLoading ? "Submitting..." : "Book Consultation";
}

// Success State

function showSuccessState() {

    form.reset();

    form.style.display = "none";

    thankYou.classList.remove("hidden");

    thankYou.scrollIntoView({
        behavior: "smooth"
    });

}

// Utility (For Testing)

function viewDataLayer() {
  console.table(window.dataLayer);
}
