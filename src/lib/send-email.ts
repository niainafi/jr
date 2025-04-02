// import nodemailer from 'nodemailer'
import { Address } from 'nodemailer/lib/mailer'
import fs from 'fs'
import handlebars, { compile } from 'handlebars'
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
type MailType = {
  service: string
  host: string
  from: string
  senderName: string
  to: string
  pass: string
  port: number
  subject: string
  template: string
  context: any // dynamic data
  attachments?: any
  html: string
}

type MailTypeWithTemplate = {
    service: string;
    host: string;
    from: string;
    senderName: string;
    to: string;
    pass: string;
    port: number;
    subject: string;
    template: string; // 🔥 Le nom du template (ex: "confirmation")
    context: any; // Les variables pour Handlebars
    attachments?: any;
  }

export async function sendMailToUser(data: MailType) {
  const { service, host, from, senderName, to, pass, port, subject, template, context, attachments, html } = data
  
  try {
    if (
      !service ||
      !host ||
      !from ||
      !senderName ||
      !to ||
      !pass ||
      !port ||
      !subject ||
      !template ||
      !context ||
      !html
    ) {
      throw new Error('Missing parameters send mail')
    }
    const transporter = nodemailer.createTransport({
      service: service,
      host: host,
      auth: {
        user: from,
        pass: pass,
      },
      port: port,
      secure: port === 465 ? true : false,
    })
    // transporter.use('compile', hbs(hbsOption))
    const mailOptions = {
      from: {
        senderName: senderName as string | undefined | Address,
        adress: from,
      },
      replyTo : to,
      to: to,
      subject: subject,
      html: html,
      // context: context,
    }

    return await transporter.sendMail(mailOptions as any)
  } catch (error) {
    console.log('error send mail', error)
    throw new Error('Error in getConfigMail' + error)
  }
}

async function readTemplate(templateName: string): Promise<string> {
    const templatePath = path.join(
      process.cwd(),
      'emails/templates',
      `${templateName}.hbs`
    );
    return fs.promises.readFile(templatePath, 'utf-8');
  }

export async function sendMailWithTemplateToUser(data: MailTypeWithTemplate) {
  const { service, host, from, senderName, to, pass, port, subject, template, context, attachments } = data;

  try {
    if (!service || !host || !from || !senderName || !to || !pass || !port || !subject || !template || !context) {
      throw new Error('Missing parameters for sending mail');
    }
    
    const templatesPath = path.resolve(process.cwd(), 'emails/templates');
    // const emailTemplateSource = fs.readFileSync(path.join(templatesPath, `/${template}.hbs`), "utf8")
    // console.log(emailTemplateSource)
    console.log('templatesPath', templatesPath)
    const transporter = nodemailer.createTransport({
      service: service,
      host: host,
      auth: {
        user: from,
        pass: pass,
      },
      port: port,
      secure: port === 465,
    });

    const templateContent = await readTemplate(template);
    const compileTemplate = compile(templateContent);
    const html = compileTemplate(context);
 
    // 🔥 Configuration Handlebars
    // transporter.use(
    //   'compile',
    //   hbs({
    //     viewEngine: {
    //       extname: '.hbs',
    //       partialsDir: templatesPath,
    //     },
    //     viewPath: templatesPath,
    //     extName: '.hbs',
    //   })
    // );

    const mailOptions = {
      from: `${senderName} <${from}>`,
      replyTo: to,
      to: to,
      subject: subject,
      context: context,
      html: html,
      attachments: attachments,
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi du mail', error);
    throw new Error('Error in sendMailToUser: ' + error);
  }
}
