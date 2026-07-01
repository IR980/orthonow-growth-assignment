// ==============================
// DOM Elements
// ==============================

const form = document.getElementById("consultationForm");
const thankYou = document.getElementById("thankYou");
const submitButton = form.querySelector(".cta-btn");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const name = nameInput.value.trim();

const phone = phoneInput.value.trim();
// ==============================
// Initialize dataLayer
// ==============================

window.dataLayer = window.dataLayer || [];

// ==============================
// Form Submit
// ==============================

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if(name.length < 3){

        alert("Please enter your full name.");
        return;

    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if(!phoneRegex.test(phone)){

        alert("Please enter a valid 10-digit mobile number.");
        return;

    }

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    window.dataLayer.push({

        event: "consultation_form_submitted",

        form_name: "consultation_booking",

        patient_name: name,

        phone_number: phone,

        lead_source: "Google Ads - Consultation Landing Page",

        page_name: document.title,

        submission_time: new Date().toISOString()

    });

    console.log("dataLayer:", window.dataLayer);

    setTimeout(()=>{

        form.style.display="none";
        thankYou.hidden=false;

    },1000);

}