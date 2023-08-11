import nodemailer from "nodemailer";
import { resolve } from 'path';
import fs from "fs";
import Handlebars from 'handlebars';

class EmailManager
{
    constructor()
    {
        this.smtp_config = {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false
        };
    }

    async send(templateFile)
    {
        const transporter = nodemailer.createTransport(this.smtp_config);

        const templatePath = resolve(`src/presentation/templates/${templateFile}`);
        const source = fs.readFileSync(templatePath).toString();
        const template = Handlebars.compile(source);
        const html = template({
            userName: 'John Doe'
        });

        const mailOptions = {
            from: '"From" <from@node.com>',
            to:  'to@node.com',
            subject: 'Subject',
            html
        };

        await transporter.sendMail(mailOptions);
    }
}

export default EmailManager;
