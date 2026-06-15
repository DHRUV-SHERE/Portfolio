require("dotenv").config();
const express = require("express");
const cors    = require("cors");
const { Resend } = require("resend");

const app    = express();
const resend = new Resend(process.env.RESEND_API_KEY);

/* ── Middleware ── */
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ["POST", "GET"],
}));
app.use(express.json());

/* ── Health check ── */
app.get("/", (_req, res) => res.json({ status: "ok", service: "Portfolio Contact API" }));

/* ── Contact endpoint ── */
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required." });
  }

  try {
    const { error } = await resend.emails.send({
      from:     "Portfolio Contact <onboarding@resend.dev>",
      to:       ["workwithdhruv05@gmail.com"],
      reply_to: email,
      subject:  subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:32px;border-radius:12px;">
          <h2 style="color:#111827;margin:0 0 24px;">New message from your portfolio</h2>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;width:100px;color:#6b7280;font-size:14px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:14px;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;">
                <a href="mailto:${email}" style="color:#6366f1;">${email}</a>
              </td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:14px;">Subject</td>
              <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${subject}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top:24px;">
            <p style="color:#6b7280;font-size:13px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.05em;">Message</p>
            <div style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:16px;color:#374151;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</div>
          </div>

          <p style="margin-top:32px;font-size:12px;color:#9ca3af;text-align:center;">
            Sent via Dhruv Shere's portfolio contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email. Try again later." });
    }

    return res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

/* ── Start ── */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅  Contact API running on port ${PORT}`);
});
