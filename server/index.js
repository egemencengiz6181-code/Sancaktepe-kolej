import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP transporter configuration
const transporter = nodemailer.createTransport({
  host: 'mail.kurumsaleposta.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER || 'info@kolejsancaktepe.com',
    pass: process.env.EMAIL_PASS // .env dosyasından alınacak
  }
});

// Email gönderimi için yardımcı fonksiyon
async function sendEmail(subject, htmlContent, textContent) {
  try {
    const info = await transporter.sendMail({
      from: '"Kolej Sancaktepe Web Sitesi" <info@kolejsancaktepe.com>',
      to: 'info@kolejsancaktepe.com',
      subject: subject,
      text: textContent,
      html: htmlContent
    });

    console.log('Email gönderildi:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return { success: false, error: error.message };
  }
}

// İletişim formu endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Ad, email ve mesaj alanları zorunludur.' 
    });
  }

  const htmlContent = `
    <h2>Yeni İletişim Formu Mesajı</h2>
    <p><strong>Ad Soyad:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
    ${subject ? `<p><strong>Konu:</strong> ${subject}</p>` : ''}
    <hr>
    <h3>Mesaj:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p style="color: #666; font-size: 0.9em;">
      Bu mesaj Kolej Sancaktepe web sitesi iletişim formundan gönderilmiştir.
    </p>
  `;

  const textContent = `
Yeni İletişim Formu Mesajı

Ad Soyad: ${name}
Email: ${email}
${phone ? `Telefon: ${phone}` : ''}
${subject ? `Konu: ${subject}` : ''}

Mesaj:
${message}

---
Bu mesaj Kolej Sancaktepe web sitesi iletişim formundan gönderilmiştir.
  `;

  const result = await sendEmail(
    `İletişim Formu: ${subject || name}`,
    htmlContent,
    textContent
  );

  if (result.success) {
    res.json({ success: true, message: 'Mesajınız başarıyla gönderildi!' });
  } else {
    res.status(500).json({ 
      success: false, 
      message: 'Email gönderilemedi. Lütfen tekrar deneyin.' 
    });
  }
});

// Başvuru formu endpoint
app.post('/api/application', async (req, res) => {
  const {
    parentName,
    parentEmail,
    parentPhone,
    studentName,
    studentAge,
    gradeLevel,
    previousSchool,
    interests,
    specialNeeds,
    hearAboutUs,
    message
  } = req.body;

  if (!parentName || !parentEmail || !parentPhone || !studentName) {
    return res.status(400).json({ 
      success: false, 
      message: 'Zorunlu alanları doldurun.' 
    });
  }

  const htmlContent = `
    <h2>Yeni Başvuru Formu</h2>
    
    <h3>Veli Bilgileri</h3>
    <p><strong>Ad Soyad:</strong> ${parentName}</p>
    <p><strong>Email:</strong> ${parentEmail}</p>
    <p><strong>Telefon:</strong> ${parentPhone}</p>
    
    <h3>Öğrenci Bilgileri</h3>
    <p><strong>Ad Soyad:</strong> ${studentName}</p>
    ${studentAge ? `<p><strong>Yaş:</strong> ${studentAge}</p>` : ''}
    ${gradeLevel ? `<p><strong>Sınıf Seviyesi:</strong> ${gradeLevel}</p>` : ''}
    ${previousSchool ? `<p><strong>Önceki Okul:</strong> ${previousSchool}</p>` : ''}
    ${interests ? `<p><strong>İlgi Alanları:</strong> ${interests}</p>` : ''}
    ${specialNeeds ? `<p><strong>Özel İhtiyaçlar:</strong> ${specialNeeds}</p>` : ''}
    ${hearAboutUs ? `<p><strong>Bizi Nereden Duydunuz:</strong> ${hearAboutUs}</p>` : ''}
    
    ${message ? `
      <hr>
      <h3>Ek Mesaj:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    ` : ''}
    
    <hr>
    <p style="color: #666; font-size: 0.9em;">
      Bu başvuru Kolej Sancaktepe web sitesi başvuru formundan gönderilmiştir.
    </p>
  `;

  const textContent = `
Yeni Başvuru Formu

VELİ BİLGİLERİ
Ad Soyad: ${parentName}
Email: ${parentEmail}
Telefon: ${parentPhone}

ÖĞRENCİ BİLGİLERİ
Ad Soyad: ${studentName}
${studentAge ? `Yaş: ${studentAge}` : ''}
${gradeLevel ? `Sınıf Seviyesi: ${gradeLevel}` : ''}
${previousSchool ? `Önceki Okul: ${previousSchool}` : ''}
${interests ? `İlgi Alanları: ${interests}` : ''}
${specialNeeds ? `Özel İhtiyaçlar: ${specialNeeds}` : ''}
${hearAboutUs ? `Bizi Nereden Duydunuz: ${hearAboutUs}` : ''}

${message ? `Ek Mesaj:\n${message}` : ''}

---
Bu başvuru Kolej Sancaktepe web sitesi başvuru formundan gönderilmiştir.
  `;

  const result = await sendEmail(
    `Yeni Başvuru: ${studentName} - ${gradeLevel || 'Belirtilmemiş'}`,
    htmlContent,
    textContent
  );

  if (result.success) {
    res.json({ success: true, message: 'Başvurunuz başarıyla alındı!' });
  } else {
    res.status(500).json({ 
      success: false, 
      message: 'Başvuru gönderilemedi. Lütfen tekrar deneyin.' 
    });
  }
});

// Hızlı iletişim (modal) endpoint
app.post('/api/quick-contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ 
      success: false, 
      message: 'Tüm alanları doldurun.' 
    });
  }

  const htmlContent = `
    <h2>Hızlı İletişim Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    ${message ? `
      <hr>
      <h3>Mesaj:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    ` : ''}
    <hr>
    <p style="color: #666; font-size: 0.9em;">
      Bu talep Kolej Sancaktepe web sitesi hızlı iletişim formundan gönderilmiştir.
    </p>
  `;

  const textContent = `
Hızlı İletişim Talebi

Ad Soyad: ${name}
Email: ${email}
Telefon: ${phone}
${message ? `\nMesaj:\n${message}` : ''}

---
Bu talep Kolej Sancaktepe web sitesi hızlı iletişim formundan gönderilmiştir.
  `;

  const result = await sendEmail(
    `Hızlı İletişim Talebi: ${name}`,
    htmlContent,
    textContent
  );

  if (result.success) {
    res.json({ success: true, message: 'Talebiniz alındı, en kısa sürede dönüş yapılacaktır!' });
  } else {
    res.status(500).json({ 
      success: false, 
      message: 'Talep gönderilemedi. Lütfen tekrar deneyin.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email server is running' });
});

// Server başlat
app.listen(PORT, () => {
  console.log(`📧 Email server http://localhost:${PORT} adresinde çalışıyor`);
  console.log(`✅ SMTP: mail.kurumsaleposta.com:465`);
  console.log(`📮 Hedef: info@kolejsancaktepe.com`);
});
