import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: "sandbox5e3256b424ad45069f121c5e45a1d406.mailgun.org"
});

const sendEmail = (subject: string, html: string, /*to: string*/) => {
  const emailData = {
    from: "blackxub@naver.com",
    to: "blackxub@naver.com",
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://.com/verification/${key}/">here</a>`;

  return sendEmail(emailSubject, emailBody);
}