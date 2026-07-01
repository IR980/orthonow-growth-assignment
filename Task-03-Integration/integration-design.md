# Include a simple architecture diagram.                   
                   
                    Google Ads Campaign
                           │
                           ▼
              OrthoNow Landing Page
                           │
                           ▼
             User fills Consultation Form
                           │
                           ▼
              Client-side Validation
                           │
                           ▼
        GTM dataLayer.push() Event Fired
                           │
                           ▼
          POST Request to Backend API
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
      HubSpot CRM      Karix API    Google Ads
      Create/Update     WhatsApp     Conversion
          Contact       Confirmation   Tracking
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                  Success Response
                           │
                           ▼
               Thank You Message Shown


# Task 03 – Integration Design

## End-to-End Integration Architecture

The landing page will submit the consultation form to a secure **Node.js + Express backend API** over HTTPS.
 I recommend using the **HubSpot CRM API** instead of embedded HubSpot forms or automation tools like Zapier/Make 
 because it provides greater control over validation, logging, retries, and future scalability.

When the backend receives the request, it first validates the submitted data and searches HubSpot for an existing 
contact using the patient's **phone number**. Since HubSpot deduplicates contacts by email by default, the backend 
must explicitly perform a phone-based lookup using the HubSpot Search API or a custom unique phone property.
 If a matching contact exists, it is updated; otherwise, a new contact is created with the following properties:

* Name
* Phone
* Clinic Preference
* Source = "Google Ads - Consultation Landing Page"
* Lead Status = "New Enquiry"

After the CRM operation succeeds, the backend immediately triggers the **Karix WhatsApp Business API** to send a confirmation message to the patient. At the same time, the frontend pushes the `consultation_form_submitted` event to the `dataLayer`, which is captured by Google Tag Manager and forwarded to GA4. The same event is imported into Google Ads as the primary conversion action to optimize campaign performance.

## Biggest Failure Point and Fallback Strategy

The biggest failure point is the CRM integration. If the HubSpot API is unavailable, valuable patient enquiries could be
 lost. To avoid this, the backend should temporarily store failed submissions in a retry queue or database table with timestamps and retry them automatically using exponential backoff. All failures should be logged, and repeated
  failures should trigger alerts for the operations team. This ensures no lead is permanently lost even if HubSpot experiences temporary downtime.

## WhatsApp SLA Monitoring

The WhatsApp confirmation must be delivered within two minutes. Delays may occur due to API timeouts, network issues,
 invalid phone numbers, or provider outages. To maintain the SLA, the backend should invoke the Karix API immediately after the HubSpot request completes, monitor response times, log delivery status, and automatically retry transient failures. A monitoring dashboard with alerts for failed or delayed messages will help ensure consistent delivery and allow the team to respond quickly if the SLA is at risk.

