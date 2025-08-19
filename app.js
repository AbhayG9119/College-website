function doPost(e) {
  var data = e.parameter;

  // Email Subject
  var subject = "📩 New Contact Form Submission";

  // Email Body
  var message =
    "Name: " + data.name + "\n" +
    "Email: " + data.email + "\n" +
    "Phone: " + data.phone + "\n" +
    "Location: " + data.location + "\n" +
    "Subject: " + data.subject + "\n" +
    "Message: " + data.message;

  // Send email to your Gmail
  MailApp.sendEmail("abhaygupta9696@gmail.com", subject, message);

  return ContentService.createTextOutput("Success");
}
