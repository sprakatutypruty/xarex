// Get the form elements
const name = document.getElementById('contactName');
const subject = document.getElementById('contactSubject');
const email = document.getElementById('contactEmail');
const message = document.getElementById('contactMessage');
const sendEmail = document.getElementById('send-email');
const siteOwner='reynalenreynalda@gmail.com';
// Add an event listener to the form submit button
sendEmail.addEventListener('click', (event) => {
  event.preventDefault();
  
  // Validate the form inputs
  if (!email.checkValidity()) {
    alert('Please enter a valid email address.');
    return;
  }
  if (message.value.length < 10 || message.value.length > 1000) {
    alert('Message must be between 10 and 1000 characters.');
    return;
  }
  // Create the mailto link with the form data
  const mailtoLink = `mailto:${siteOwner.value}?subject=${subject.value}&body=${message.value+email.value}`;

  // Set the href attribute of the send email button to the mailto link
  sendEmail.setAttribute('href', mailtoLink);

  // Open the email client
  window.location.href = mailtoLink;
});
