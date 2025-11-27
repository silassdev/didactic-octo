import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';



function validatePayload(body: any) {
  if (!body) return 'Missing request body.';
  const { name, email, message } = body;
  if (!name || typeof name !== 'string' || name.trim().length < 2) return 'Name is required.';
  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) return 'Valid email is required.';
  if (!message || typeof message !== 'string' || message.trim().length < 10) return 'Message must be at least 10 characters.';
  return null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const invalid = validatePayload(body);
    if (invalid) {
      return NextResponse.json({ error: invalid }, { status: 400 });
    }

    const { name, email, subject, message } = body;

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.TO_EMAIL;

    if (!host || !port || !user || !pass || !to) {
      console.error('Missing SMTP environment variables');
      return NextResponse.json({ error: 'Server misconfigured. Contact admin.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      to,
      replyTo: email,
      subject: subject && subject.trim() ? `${subject} — contact form` : 'New contact form message',
      text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject || '(none)'}
Message:
${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || '(none)'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}
