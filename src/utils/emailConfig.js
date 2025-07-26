// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID', // e.g., 'service_abc123'
  templateId: 'YOUR_TEMPLATE_ID', // e.g., 'template_xyz789'
  publicKey: 'YOUR_PUBLIC_KEY' // e.g., 'user_def456'
};

// Email template variables that you should include in your EmailJS template:
// {{from_name}} - The sender name
// {{to_name}} - Your business name
// {{location}} - Customer's location
// {{service}} - Selected service
// {{date}} - Preferred date
// {{timestamp}} - When the form was submitted
// {{message}} - Complete booking details

/* 
SETUP INSTRUCTIONS:

1. Go to https://www.emailjs.com/ and create a free account

2. Add an Email Service:
   - Go to Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. Create an Email Template:
   - Go to Email Templates
   - Click "Create New Template"
   - Use this sample template:

   Subject: New Booking Inquiry - Pravi Beauty Parlour

   Hello {{to_name}},

   You have received a new booking inquiry from your website.

   Booking Details:
   - Location: {{location}}
   - Service: {{service}}
   - Preferred Date: {{date}}
   - Submitted: {{timestamp}}

   Additional Details:
   {{message}}

   Please contact the customer to confirm the appointment.

   Best regards,
   {{from_name}}

4. Get your credentials:
   - Service ID: Found in Email Services section
   - Template ID: Found in Email Templates section
   - Public Key: Found in Account > API Keys

5. Replace the placeholder values in emailConfig.js with your actual credentials

6. Test the form to ensure emails are working properly
*/