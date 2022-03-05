import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

interface RequestParams {
  text: string;
  sender_email: string;
  sender_name: string;
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;
  const { text, sender_email, sender_name } = request.body as RequestParams;

  if (method === 'POST') {
    const transporter = createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });
    try {
      await transporter.sendMail({
        text,
        subject: `${sender_name} - ${sender_email}`,
        from: process.env.NODEMAILER_USER,
        to: process.env.NODEMAILER_USER,
      });

      return response.status(200).json({ ok: true });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
};
