import { checkEmailVariable } from '@/lib/check-email-variable'
import { sendMailToUser } from '@/lib/send-email'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const bodyData = z.object({
  from_email: z.string().email(),
  subject: z.string(),
  message: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validateData = bodyData.parse(body)
    console.log('body', validateData)
    checkEmailVariable()
    
      const mail = await sendMailToUser({
        service: process.env.NEXT_EMAIL_SERVICE!,
        host: process.env.NEXT_EMAIL_HOST!,
        from: process.env.NEXT_EMAIL_USER! ,
        to: process.env.NEXT_EMAIL_USER!,
        senderName: validateData.from_email.split('@')[0],
        pass: process.env.NEXT_EMAIL_PASS!,
        port: 587,
        subject: validateData.subject,
        template: 'welcome',
        context: {
            message : validateData.message,
        //   firstName: user.firstName,
        //   lastName: user.lastName,
        //   link: link,
        },
        html: `
        <p>Bonjour Just Ride</p>
        <p>Email:  ${validateData.from_email}</p>
        <p>Message:  ${validateData.message}</p>

        `        
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
