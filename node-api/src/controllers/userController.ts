import { Request, Response } from 'express';
import { User } from '../models/User';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import validator from 'validator';

const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST || 'sandbox.smtp.mailtrap.io',
    port: parseInt(process.env.MAILTRAP_PORT || '2525'),
    auth: {
        user: process.env.MAILTRAP_USER || 'seu_user',
        pass: process.env.MAILTRAP_PASS || 'seu_pass',
    },
});

const generateRandomPassword = (): string => {
    return Math.random().toString(36).slice(-8);
};

export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email || !validator.isEmail(email)) {
        return res.status(400).json({ error: 'E-mail inválido ou não fornecido.' });
    }

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        const randomPassword = generateRandomPassword();
        console.log('Senha gerada:', randomPassword);

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(randomPassword, saltRounds);

        user.password = hashedPassword;
        await user.save();

        const mailOptions = {
            from: 'no-reply@seu-dominio.com',
            to: email,
            subject: 'Recuperação de senha',
            text: `Sua nova senha é: ${randomPassword}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar o e-mail:', error);
                return res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
            } else {
                console.log('E-mail enviado:', info.response);
                return res.status(200).json({ message: 'Senha enviada por e-mail com sucesso.' });
            }
        });

    } catch (error) {
        console.error('Erro ao processar a recuperação de senha:', error);
        return res.status(500).json({ error: 'Erro interno ao processar a solicitação.' });
    }
};