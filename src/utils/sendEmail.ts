import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: "sandbox5e3256b424ad45069f121c5e45a1d406.mailgun.org"
});
