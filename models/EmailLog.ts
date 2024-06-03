import mongoose from "mongoose";

const EmailLogSchema = new mongoose.Schema({
  email: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

const EmailLog =
  mongoose.models.EmailLog || mongoose.model("EmailLog", EmailLogSchema);

export default EmailLog;
