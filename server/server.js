const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: 'mail.kurumsaleposta.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('✅ Email server ready');
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

// Contact form endpoint
app.post('/api/send-contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@kolejsancaktepe.com',
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e61936;">Yeni İletişim Formu Mesajı</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
            <p><strong>Mesaj:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Bu mesaj Kolej Sancaktepe web sitesi iletişim formundan gönderilmiştir.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Mesajınız başarıyla gönderildi!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, message: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' });
  }
});

// Application form endpoint
app.post('/api/send-application', async (req, res) => {
  try {
    const {
      studentName,
      birthDate,
      grade,
      parentName,
      email,
      phone,
      address,
      previousSchool,
      message,
    } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@kolejsancaktepe.com',
      subject: `Yeni Başvuru Formu - ${studentName} (${grade})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
          <h2 style="color: #e61936;">Yeni Öğrenci Başvurusu</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #232e5c; margin-top: 0;">Öğrenci Bilgileri</h3>
            <p><strong>Öğrenci Adı Soyadı:</strong> ${studentName}</p>
            <p><strong>Doğum Tarihi:</strong> ${birthDate}</p>
            <p><strong>Sınıf:</strong> ${grade}</p>
            ${previousSchool ? `<p><strong>Önceki Okul:</strong> ${previousSchool}</p>` : ''}
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #232e5c; margin-top: 0;">Veli Bilgileri</h3>
            <p><strong>Veli Adı Soyadı:</strong> ${parentName}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            ${address ? `<p><strong>Adres:</strong> ${address}</p>` : ''}
          </div>

          ${message ? `
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #232e5c; margin-top: 0;">Ek Notlar</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <p style="color: #666; font-size: 12px;">Bu başvuru Kolej Sancaktepe web sitesi başvuru formundan gönderilmiştir.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Başvurunuz başarıyla alındı!' });
  } catch (error) {
    console.error('Application form error:', error);
    res.status(500).json({ success: false, message: 'Başvuru gönderilemedi. Lütfen tekrar deneyin.' });
  }
});

// Quick contact (modal) endpoint
app.post('/api/send-quick-contact', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@kolejsancaktepe.com',
      subject: `Hızlı İletişim - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e61936;">Hızlı İletişim Formu</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            ${email ? `<p><strong>E-posta:</strong> ${email}</p>` : ''}
            ${message ? `<p><strong>Mesaj:</strong></p><p style="white-space: pre-wrap;">${message}</p>` : ''}
          </div>
          <p style="color: #666; font-size: 12px;">Bu mesaj Kolej Sancaktepe web sitesi hızlı iletişim formundan (floating button) gönderilmiştir.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Mesajınız iletildi!' });
  } catch (error) {
    console.error('Quick contact error:', error);
    res.status(500).json({ success: false, message: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on http://localhost:${PORT}`);
});
