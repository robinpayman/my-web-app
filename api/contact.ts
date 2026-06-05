import { Resend } from 'resend';
interface ContactRequest {
  method?: string;
  body?: unknown;
}

interface ContactResponse {
  setHeader(name: string, value: string): void;
  status(code: number): {
    json(payload: unknown): void;
  };
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

interface ValidationResult {
  name: string;
  email: string;
  message: string;
}

const DEFAULT_FROM_EMAIL = 'My Web App <onboarding@resend.dev>';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validatePayload(payload: ContactPayload): ValidationResult {
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (name.length < 2) {
    throw new Error('Name must be at least 2 characters.');
  }

  if (!isValidEmail(email)) {
    throw new Error('Please enter a valid email address.');
  }

  if (message.length < 10) {
    throw new Error('Message must be at least 10 characters.');
  }

  return { name, email, message };
}

export default async function handler(req: ContactRequest, res: ContactResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM_EMAIL;

    if (!apiKey || !toEmail) {
      return res.status(500).json({
        error: 'Contact form is not configured yet. Please try again later.',
      });
    }

    const { name, email, message } = validatePayload(req.body ?? {});
    const resend = new Resend(apiKey);

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
      `,
      text: [
        'New contact form submission',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    if (error) {
      return res.status(502).json({
        error: 'Unable to send your message right now. Please try again later.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid request.';
    return res.status(400).json({ error: message });
  }
}
