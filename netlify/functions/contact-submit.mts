import { sendEmail } from "@netlify/emails";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
  }

  const { name, email, subject, message } = payload;
  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
  }

  // Set these in Netlify's site environment variables once your sending domain is verified
  // under Site configuration > Email (Netlify Emails is powered by Mailgun).
  const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL || "contact@pashtun.org.au";
  const TO_ADDRESS = process.env.CONTACT_TO_EMAIL || "info@pashtun.org.au";

  try {
    // Notify the APA team of the new submission
    await sendEmail({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      subject: `New contact form message: ${subject}`,
      template: "contact-notification",
      parameters: { name, email, subject, message },
    });

    // Send the submitter a confirmation that their message was received
    await sendEmail({
      from: FROM_ADDRESS,
      to: email,
      subject: "We received your message - Australian Pashtun Association",
      template: "contact-confirmation",
      parameters: { name, email, subject, message },
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("contact-submit: failed to send email", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
};
