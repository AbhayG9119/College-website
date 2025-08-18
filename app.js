function doPost(e) {
  var data = e.parameter; 

  // Gmail पर mail भेजना
  var email = "abhaygupta9696@gmail.com"; 
  var subject = "New Contact Form Submission";
  var message = "Name: " + data.name + "\nEmail: " + data.email + "\nSubject: " + data.subject + "\nMessage: " + data.message;
  MailApp.sendEmail(email, subject, message);

  // Google Sheet में data save करना
  var sheet = SpreadsheetApp.openById("1sFD2glOjulTDDksiqQq5rUQLzBqyGFv7FBRTcUFYFV0").getSheetByName("ContactUs");
  sheet.appendRow([new Date(), data.name, data.email, data.subject, data.message]);

  // response वापस भेजना
  return ContentService.createTextOutput("Success");
}
