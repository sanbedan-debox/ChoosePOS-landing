import { generateWaitlistEmail } from "@/emailTemplate/emailTemplates";
import User from "@/models/UserSchema";
import dbConnect from "@/utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, website, software, phoneNumber } = req.body;

      if (!name || !email || !phoneNumber) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      await dbConnect();

      const newUser = new User({
        name,
        email,
        website,
        software,
        phoneNumber,
      });

      await newUser.save();

      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS,
        },
      });

      await transporter.sendMail({
        from: "sanebdan9989@gmail.com",
        to: email,
        subject: "Welcome to Our Waitlist!",
        html: generateWaitlistEmail({ name, email, website, phoneNumber }),
      });

      res
        .status(200)
        .json({ message: "User registered and email sent successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to register user or send email" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
