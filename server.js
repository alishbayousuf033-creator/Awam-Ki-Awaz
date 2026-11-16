
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

/* =========================================================
   TESTING TOGGLE
   Set IS_TESTING_MODE = false for real official department delivery.
   Set IS_TESTING_MODE = true to send all emails to your test inbox.
========================================================= */
const IS_TESTING_MODE = false;
const MY_TEST_EMAIL = 'alishbayousuf033@gmail.com';

// Official Production Department Email Addresses for all 8 categories
const OFFICIAL_EMAILS = {
    electricity: { department: 'K-Electric Complaint Cell', email: 'complaints@ke.com.pk' },
    gas: { department: 'Sui Southern Gas Company (SSGC)', email: 'complaints@ssgc.com.pk' },
    water: { department: 'Karachi Water & Sewerage Corporation (KWSC)', email: 'info@kwsc.gos.pk' },
    roads: { department: 'Karachi Metropolitan Corporation - Roads', email: 'info@kmc.gos.pk' },
    garbage: { department: 'Sindh Solid Waste Management Board (SSWMB)', email: 'info@sswmb.gos.pk' },
    'street-lights': { department: 'Karachi Metropolitan Corporation - Street Lights', email: 'info@kmc.gos.pk' },
    wapda: { department: 'WAPDA Regional Office', email: 'complaints@wapda.gov.pk' },
    sewerage: { department: 'Karachi Water & Sewerage Corporation - Sewerage', email: 'info@kwsc.gos.pk' }
};

function resolveDepartmentRoute(category, issueText = '') {
    const key = String(category || '').toLowerCase().trim();
    if (OFFICIAL_EMAILS[key]) {
        const entry = OFFICIAL_EMAILS[key];
        return {
            department: entry.department,
            email: IS_TESTING_MODE ? MY_TEST_EMAIL : entry.email
        };
    }

    const text = issueText.toLowerCase();
    if (text.includes('لائٹ') || text.includes('کرنٹ') || text.includes('k-electric') || text.includes('bijli') || text.includes('light')) {
        return { department: 'K-Electric Complaint Cell', email: IS_TESTING_MODE ? MY_TEST_EMAIL : OFFICIAL_EMAILS.electricity.email };
    } else if (text.includes('گیس') || text.includes('gas') || text.includes('ssgc')) {
        return { department: 'Sui Southern Gas Company (SSGC)', email: IS_TESTING_MODE ? MY_TEST_EMAIL : OFFICIAL_EMAILS.gas.email };
    } else if (text.includes('پانی') || text.includes('سیوریج') || text.includes('گٹر') || text.includes('water')) {
        return { department: 'Karachi Water & Sewerage Corporation (KWSC)', email: IS_TESTING_MODE ? MY_TEST_EMAIL : OFFICIAL_EMAILS.water.email };
    }

    return { department: 'Karachi Metropolitan Corporation (KMC)', email: IS_TESTING_MODE ? MY_TEST_EMAIL : OFFICIAL_EMAILS.roads.email };
}

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'alishbayousuf033@gmail.com',
        pass: 'slkzsifwfkwejpro'
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.post('/api/submit-complaint', async (req, res) => {
    const { ticketId, category, name, phone, location, issueText, summary } = req.body;

    if (!name || !location || !issueText) {
        return res.status(400).json({ success: false, message: 'All fields are required!' });
    }

    const route = resolveDepartmentRoute(category, issueText);

    const mailOptions = {
        from: `"Awam Ki Awaz Portal" <alishbayousuf033@gmail.com>`,
        to: route.email,
        subject: `[Complaint ${ticketId || ''}] ${route.department} - ${location}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #0d6efd;">Awam Ki Awaz - Official Citizen Complaint</h2>
                <p><strong>Ticket ID:</strong> ${ticketId || 'N/A'}</p>
                <p><strong>Complainant Name:</strong> ${name}</p>
                <p><strong>Phone Number:</strong> ${phone || 'Not Provided'}</p>
                <p><strong>Location / Area:</strong> ${location}</p>
                <p><strong>Target Department:</strong> ${route.department}</p>
                <p><strong>Original Message:</strong></p>
                <blockquote style="background: #f8f9fa; padding: 10px; border-left: 4px solid #0d6efd;">
                    ${issueText}
                </blockquote>
                ${summary ? `<p><strong>Formal English Summary:</strong></p><p>${summary}</p>` : ''}
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            success: true,
            message: 'Complaint submitted and email sent successfully!',
            department: route.department,
            sentTo: route.email
        });
    } catch (error) {
        console.error('DETAILED MAIL ERROR:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
