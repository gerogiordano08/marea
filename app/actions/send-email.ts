"use server"

import { Resend } from 'resend';
import { ContactEmail } from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const mail = process.env.MAIL_TO as string;

export async function sendEmail(payload: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Marea Engineering <marea@resend.dev>',
      to: [mail],
      subject: `⚡ [NEW_INQUIRY] ${payload.common.name}`,
      react: ContactEmail({
        name: payload.common.name,
        email: payload.common.email,
        budget: payload.common.budget,
        serviceType: payload.serviceType,
        serviceLabel: payload.serviceLabel,
        serviceData: payload.serviceData,
        brief: payload.common.brief,
        submissionId: Math.random().toString(36).substring(7).toUpperCase(),
      }),
    });

    if (error) return { success: false, error };
    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}