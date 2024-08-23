import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 587, // Use port 465 for SSL
    secure: false, // Set to true if using port 465
    auth: {
      user: 'phyanalytica@yahoo.com', // Your Yahoo email
      pass: 'zY83p_q?h5UMk&h', // Your Yahoo password or app password
    },
  });

  const mailOptions = {
    from: 'phyanalytica@yahoo.com', // Should match the email used for authentication
    to: 'erlisrizqiyani@gmail.com',
    subject: 'New Contact Request',
    text: `Name: ${name}\nEmail: ${email}\nPhone/Skype: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), {
      status: 500,
    });
  }
}
