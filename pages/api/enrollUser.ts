import {
  generateWaitlistEmail,
  WaitlistEmailData,
} from "@/emailTemplate/emailTemplates";
import EmailLog from "@/models/EmailLog";
import dbConnect from "@/utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, name }: WaitlistEmailData = req.body;

      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "5212e2aa954cb3",
          pass: "4e996bc82d80bb",
        },
      });

      await transporter.sendMail({
        from: "sanebdan9989@gmail.com",
        to: email,
        subject: "Welcome to Our Waitlist!",
        html: generateWaitlistEmail({ name, email }),
      });

      await dbConnect();
      const emailLog = new EmailLog({ email });
      await emailLog.save();
      console.log("Email Recived!!!");

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
