# 🏥 OrthoNow Healthcare Landing Page & GTM Tracking

> Developer Assignment for **Namoza Private Limited**  
> Role: **Web Developer & Martech**  
> Developed by **Irshad Alam**

---

# 📌 Project Overview

This project is a conversion-focused healthcare landing page developed for **OrthoNow**, a chain of orthopaedic clinics across Bengaluru, Hyderabad, and Chennai.

The assignment demonstrates practical skills in:

- Frontend Development
- Conversion Rate Optimization (CRO)
- Google Tag Manager (GTM)
- Google Analytics 4 (GA4)
- Google Ads Conversion Tracking
- CRM Integration Planning
- Responsive Web Design
- Core Web Vitals Optimization

The landing page is designed for users experiencing **knee pain or back pain** and encourages them to book a consultation with OrthoNow specialists.

---

# 🎯 Assignment Objectives

This submission contains all three required tasks.

## ✅ Task 1

Google Tag Manager Event Architecture

- Complete GTM Event Schema
- Booking Funnel Tracking
- dataLayer JSON Events
- Google Ads Conversion Recommendation

---

## ✅ Task 2

Responsive Landing Page

Developed using

- HTML5
- CSS3
- Vanilla JavaScript

Features include

- Hero Section
- Consultation Form
- Trust Section
- Statistics
- Testimonials
- FAQ
- Clinic Locations
- Google Maps
- Floating WhatsApp
- Mobile Sticky CTA
- Thank You State

---

## ✅ Task 3

Integration Design Documentation

Includes

- HubSpot CRM Integration
- WhatsApp Business (Karix)
- Google Ads Conversion Tracking
- Failure Handling
- Monitoring Strategy

---

# 🚀 Features

### Landing Page

- Responsive Design
- Sticky Header
- Hero Banner
- Statistics Section
- Trust Section
- Consultation Form
- Doctor Highlights
- Testimonials
- FAQ
- Clinic Locations
- Google Maps
- Thank You Page
- Footer
- Floating WhatsApp Button
- Mobile Sticky CTA

---

### Consultation Form

Fields

- Clinic Location
- Problem / Specialty
- Full Name
- Phone Number

Validation

- Required Fields
- Indian Mobile Validation
- Name Validation

After submission

- GTM Event Fires
- Thank You State
- No Page Reload

---

# 📊 GTM Events Implemented

| Event | Description |
|---------|------------|
| consultation_form_submitted | Consultation form submitted |
| hero_cta_clicked | Hero CTA clicked |
| mobile_cta_clicked | Mobile sticky CTA clicked |
| call_now_clicked | Phone button clicked |
| whatsapp_chat_clicked | WhatsApp button clicked |

---

# 📈 Booking Funnel

### Step 1

Select

- Clinic
- Problem

↓

### Step 2

Enter

- Name
- Phone Number

↓

### Step 3

Consultation Form Submitted

↓

Google Ads Conversion

---

# 🧩 Tech Stack

Frontend

- HTML5
- CSS3
- JavaScript (ES6)

Analytics

- Google Tag Manager
- Google Analytics 4

Marketing

- Google Ads

CRM

- HubSpot

Messaging

- Karix WhatsApp Business API

---

# 📂 Project Structure

```
OrthoNow-Landing-Page/

│

├── index.html

├── styles.css

├── script.js

│

├── assets/

│   ├── doctor.png

│   ├── favicon.ico

│   └── pagespeed-report.png

│

├── task1/

│   ├── gtm-event-schema.md

│   └── booking-funnel-json.md

│

├── task3/

│   └── integration-design.md

│

└── README.md
```

---

# 📋 GTM dataLayer Example

```javascript
window.dataLayer.push({

event: "consultation_form_submitted",

clinic_location: "Bengaluru - Indiranagar",

speciality: "Knee Pain",

lead_source: "Google Ads - Consultation Landing Page",

submission_status: "success"

});
```

---

# 📱 Responsive Design

Optimized for

- Desktop
- Laptop
- Tablet
- Mobile

---

# ⚡ Performance

Designed with Core Web Vitals in mind

- Lightweight HTML
- Optimized CSS
- Vanilla JavaScript
- Lazy-loaded Google Maps
- No Frameworks

Target

✅ PageSpeed Mobile Score: 90+

---

# 📌 Integration Flow

User

↓

Landing Page

↓

JavaScript Validation

↓

GTM dataLayer Event

↓

Google Tag Manager

↓

GA4

↓

Google Ads Conversion

↓

HubSpot CRM

↓

Karix WhatsApp API

↓

Patient Confirmation Message

---

# 🎥 Loom Walkthrough

The Loom video covers

- GTM Event Schema
- Booking Funnel
- Landing Page Demo
- dataLayer Event
- Integration Design

Duration

8 Minutes

---

# 💡 Future Improvements

- Backend API Integration
- Appointment Scheduling
- OTP Verification
- Email Notifications
- Online Payments
- Multi-language Support
- Live Doctor Availability
- Calendar Booking
- AI Chat Assistant
- Real CRM Integration

---

# 👨‍💻 Developer

**Irshad Alam**

B.Tech Computer Science & Engineering (AI & ML)

Noida Institute of Engineering & Technology

### Skills

- HTML
- CSS
- JavaScript
- React
- Node.js
- Express.js
- MongoDB
- GTM
- GA4

---

# 📄 License

This project was developed solely for the **Namoza Private Limited Developer Assignment** and is intended for educational and evaluation purposes.