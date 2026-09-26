import { NextResponse } from 'next/server';

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || '8315f99d-63fc-422b-99e6-55a2c0d6f65c';

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

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
        from_name: 'Bytesool Contact Form',
        name,
        email,
        phone,
        service: service || 'Not specified',
        message: message || 'No message provided.',
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, data: result }, { status: 200 });
    } else {
      console.error('Web3Forms error:', result);
      return NextResponse.json({ error: result.message || 'Failed to send email' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
