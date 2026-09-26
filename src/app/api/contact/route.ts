import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_1234567890');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Bytesool Contact Form <info@bytesool.com>', // Change to your verified domain (e.g., hello@bytesool.com)
      to: ['info@bytesool.com'],
      subject: `New Lead: ${name} - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service of Interest:</strong> ${service || 'Not specified'}</p>
        <br/>
        <p><strong>Message/Project Details:</strong></p>
        <p>${message || 'No message provided.'}</p>
      `,
    });

    if (error) {
      console.error('Resend error sending to admin:', error);
      return NextResponse.json({ error: error.message || 'Unknown Resend error' }, { status: 400 });
    }

    // Send confirmation email to the user
    try {
      await resend.emails.send({
        from: 'Bytesool <info@bytesool.com>',
        to: [email],
        subject: 'Thank you for contacting Bytesool!',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 12px;">
            <h2 style="color: #6366f1;">We received your message!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to us. We have successfully received your message regarding <strong>${service || 'our services'}</strong>.</p>
            <p>Our team will review your inquiry and get back to you shortly.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>Bytesool Team</strong></p>
            <hr style="border: 0; border-top: 1px solid #f0f0f0; margin-top: 30px;"/>
            <p style="font-size: 11px; color: #999; text-align: center;">This is an automated confirmation that your message has been received.</p>
          </div>
        `,
      });
    } catch (userEmailErr) {
      console.warn("Failed to send user confirmation email", userEmailErr);
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
