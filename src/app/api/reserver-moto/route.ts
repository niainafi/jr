import { checkEmailVariable } from '@/lib/check-email-variable'
import { sendMailWithTemplateToUser } from '@/lib/send-email'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const bodyData = z.object({
  telephone: z.string(),
  motos: z.string(),
  subject: z.string(),
  dateDebut: z.string(), 
  dateFin: z.string(), 
  duree: z.string(),
  email: z.string().email(),
  nom: z.string(),
  prenom: z.string(),
  passeport: z.string().optional(), 
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validateData = bodyData.parse(body)
    const {nom,prenom,motos,dateDebut,dateFin,duree,subject,email,telephone,passeport} = validateData;
    console.log('body', validateData)
    checkEmailVariable()
    
      const mail = await sendMailWithTemplateToUser({
        service: process.env.NEXT_EMAIL_SERVICE!,
        host: process.env.NEXT_EMAIL_HOST!,
        from: process.env.NEXT_EMAIL_USER! ,
        to: process.env.NEXT_EMAIL_USER!,
        senderName: validateData.email.split('@')[0],
        pass: process.env.NEXT_EMAIL_PASS!,
        port: 587,
        subject: validateData.subject,
        template: 'reservation-moto',
        context: {
          nom: nom,
          prenom: prenom,
          telephone: telephone,
          motos: motos,
          dateDebut: dateDebut,
          dateFin: dateFin,
          duree: duree,
          email: email,
          passeport: passeport,
        },
               
      })
      if (!mail) {
        return NextResponse.json({ error: 'Error send mail' }, { status: 500 })
      }
    
      return NextResponse.json('test', { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
        return NextResponse.json(
          {
            error: error.message,
          },
          { status: 400 }
        );
      }
    console.error('Error:', error) 
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
