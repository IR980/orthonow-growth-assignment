/**
 * ==========================================================
 * OrthoNow Healthcare Landing Page
 * ==========================================================
 * Developer : Irshad Alam
 * Description:
 * - Consultation Form Validation
 * - GTM dataLayer Integration
 * - UI State Management
 * - Conversion Tracking
 * ==========================================================
 */

// Configuration

const CONFIG = {
  FORM_NAME: "consultation_booking",

  LEAD_SOURCE: "Google Ads - Consultation Landing Page",

  SUCCESS_DELAY: 1200,
};

// DOM Elements

const form = document.getElementById("consultationForm");

const consultationSection = document.getElementById("consultation");

const thankYouSection = document.getElementById("thankYou");

const submitButton = document.querySelector(".cta-btn");

const nameInput = document.getElementById("name");

const phoneInput = document.getElementById("phone");

const locationInput = document.getElementById("location");

const problemInput = document.getElementById("problem");

// Initialize dataLayer

window.dataLayer = window.dataLayer || [];

// Page Initialization

document.addEventListener("DOMContentLoaded", initializePage);

function initializePage() {
  thankYouSection.classList.add("hidden");

  consultationSection.style.display = "block";

  form.reset();

  setLoadingState(false);

  console.log("OrthoNow Landing Page Loaded");
}

// Event Listeners

form.addEventListener("submit", handleFormSubmit);

// Consultation Form Submit

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = {
    location: locationInput.value.trim(),

    problem: problemInput.value.trim(),

    name: nameInput.value.trim(),

    phone: phoneInput.value.trim(),
  };

  if (!validateForm(formData)) {
    return;
  }

  setLoadingState(true);

  fireConsultationEvent(formData);
}

// Form Validation

function validateForm(data) {
  if (!data.location) {
    alert("Please choose a clinic location.");

    locationInput.focus();

    return false;
  }

  if (!data.problem) {
    alert("Please select your problem.");

    problemInput.focus();

    return false;
  }

  if (data.name.length < 3) {
    alert("Please enter your full name.");

    nameInput.focus();

    return false;
  }

  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(data.phone)) {
    alert("Please enter a valid 10-digit mobile number.");

    phoneInput.focus();

    return false;
  }

  return true;
}

// Loading State

function setLoadingState(isLoading) {
  submitButton.disabled = isLoading;

  locationInput.disabled = isLoading;

  problemInput.disabled = isLoading;

  nameInput.disabled = isLoading;

  phoneInput.disabled = isLoading;

  submitButton.textContent = isLoading ? "Submitting..." : "Book Consultation";
}

// GTM Event

function fireConsultationEvent(data) {
  window.dataLayer.push({
    event: "consultation_form_submitted",

    clinic_location: data.location,

    speciality: data.problem,

    form_name: CONFIG.FORM_NAME,

    lead_source: CONFIG.LEAD_SOURCE,

    page_name: document.title,

    page_url: window.location.href,

    submission_time: new Date().toISOString(),
  });

  console.log("Consultation GTM Event Fired");

  console.table(window.dataLayer);
}

// Consultation Submission

function fireConsultationEvent(data) {
  // Push GTM Event
  window.dataLayer.push({
    event: "consultation_form_submitted",

    clinic_location: data.location,

    speciality: data.problem,

    form_name: CONFIG.FORM_NAME,

    lead_source: CONFIG.LEAD_SOURCE,

    page_name: document.title,

    page_url: window.location.href,

    submission_time: new Date().toISOString(),
  });

  console.log("Consultation GTM Event Fired");

  console.table(window.dataLayer);

  // Simulate Backend API

  setTimeout(() => {
    showThankYouState();
  }, CONFIG.SUCCESS_DELAY);
}

// Thank You State

function showThankYouState() {
  form.reset();

  consultationSection.style.display = "none";

  thankYouSection.classList.remove("hidden");

  setLoadingState(false);

  thankYouSection.scrollIntoView({
    behavior: "smooth",

    block: "start",
  });
}

// Hero CTA Tracking

const heroCTA = document.querySelector(".hero-btn");

if (heroCTA) {
  heroCTA.addEventListener("click", () => {
    window.dataLayer.push({
      event: "hero_cta_clicked",

      button_name: "Book Consultation",

      button_location: "hero_section",

      page_name: document.title,

      click_time: new Date().toISOString(),
    });

    console.log("Hero CTA Clicked");
  });
}

// Mobile CTA Tracking

const mobileCTA = document.querySelector(".mobile-cta-btn");

if (mobileCTA) {
  mobileCTA.addEventListener("click", () => {
    window.dataLayer.push({
      event: "mobile_cta_clicked",

      button_name: "Book Consultation",

      button_location: "mobile_footer",

      page_name: document.title,

      click_time: new Date().toISOString(),
    });

    console.log("Mobile CTA Clicked");
  });
}

// Call Button Tracking

const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.dataLayer.push({
      event: "call_now_clicked",

      button_location: "header_or_thankyou",

      phone_number: "+91 99999 99999",

      page_name: document.title,

      click_time: new Date().toISOString(),
    });

    console.log("Call Button Clicked");
  });
});

// WhatsApp Tracking

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
  whatsappButton.addEventListener("click", () => {
    window.dataLayer.push({
      event: "whatsapp_chat_clicked",

      button_location: "floating_whatsapp",

      page_name: document.title,

      page_url: window.location.href,

      click_time: new Date().toISOString(),
    });

    console.log("WhatsApp Clicked");
  });
}

// Smooth Scroll Navigation

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (!href || href === "#") {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Utility Functions

function resetForm() {
  form.reset();

  consultationSection.style.display = "block";

  thankYouSection.classList.add("hidden");

  setLoadingState(false);
}

function viewDataLayer() {
  console.table(window.dataLayer);
}

function getCurrentTimestamp() {
  return new Date().toISOString();
}

function scrollToForm() {
  consultationSection.scrollIntoView({
    behavior: "smooth",
  });
}

console.log("OrthoNow Script Loaded Successfully");
