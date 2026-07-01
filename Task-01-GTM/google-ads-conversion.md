# Google Ads Conversion Recommendation

## Recommended Conversion Action

**Conversion Event:** `consultation_form_submitted`

---

## Why This Event?

The `consultation_form_submitted` event is the most valuable conversion action because it directly represents the primary business objective of the OrthoNow campaign: generating qualified consultation enquiries.

Unlike engagement events such as button clicks or page views, a successful form submission indicates that a potential patient has completed the lead generation process by providing their contact information and expressing intent to book a consultation.

Using this event as the primary Google Ads conversion allows the bidding algorithm to optimize campaigns toward users who are more likely to become actual patients, rather than optimizing for lower-value interactions.

---

## Why Not Other Events?

### call_now_click

Although clicking the phone button shows user interest, it does not confirm that the call was connected or that the user booked an appointment. Many users may accidentally tap the button or abandon the call before speaking with the clinic.

### whatsapp_click

Opening WhatsApp is an engagement action, but it does not guarantee that the user sends a message or completes the enquiry. It is useful for reporting but not ideal as the primary optimization goal.

### patient_guide_download

Downloading the patient guide is a lead-generation activity that reflects interest in educational content. However, these users are typically at an earlier stage of the customer journey and may not be ready to book a consultation immediately.

### booking_step_complete

Tracking each booking step is essential for identifying funnel drop-offs and optimizing the user experience. However, completing an intermediate step does not represent a completed business outcome, so it should not be used as the main Google Ads conversion.

---

## Recommended Google Ads Setup

| Setting | Value |
|---------|-------|
| Conversion Name | Consultation Form Submitted |
| GA4 Event | consultation_form_submitted |
| Count | One |
| Conversion Category | Submit Lead Form |
| Include in "Conversions" | Yes |
| Attribution Model | Data-Driven Attribution (Preferred) |
| Primary Conversion | Yes |

---

## Supporting (Secondary) Conversions

The following events can be imported into Google Ads as **Secondary Conversions** for reporting and audience analysis, but they should not be used for campaign bidding:

- call_now_click
- whatsapp_click
- patient_guide_download

Keeping these as secondary conversions provides additional insights into user engagement without influencing automated bidding strategies.

---

## Final Recommendation

Use **`consultation_form_submitted`** as the **Primary Google Ads Conversion** because it most accurately represents a qualified patient enquiry and aligns directly with OrthoNow's business objective of increasing consultation bookings. Other interaction events should be retained for analysis, remarketing, and campaign reporting, but they should remain secondary conversion actions.