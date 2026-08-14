Sahana G — Personal Developer Portfolio (Sketchbook Edition)

A complete full-stack developer portfolio for Sahana G, designed as a living, hand-drawn graphite pencil sketchbook brought to life on the web.

 (Sketchbook Aesthetic)

📌 Project Overview

This website represents Sahana's journey as a Data Science student, developer, and DSA enthusiast. Designed with an authentic black-and-white graphite pencil sketchbook aesthetic, it features:

White & off-white paper texture tones

Hand-drawn sketch arrows, cross-hatch shading, and handwritten annotations

Custom interactive SVG diagrams (Library Management borrow/return flow & RetailFlow ETL architecture)

Interactive hand-drawn skill mind map

Full contact form backed by a Python Flask REST API with secure email dispatching

🛠️ Tech Stack

Frontend

Framework: React 18 (TypeScript)

Build Tool: Vite

Styling: Tailwind CSS, Custom Graphite CSS variables, SVG filter patterns

Icons: Lucide React

Typography: Space Grotesk (Modern Sans), Caveat (Handwritten), Fira Code (Mono)

Backend

Framework: Python 3.x, Flask

Middleware: Flask-CORS

Environment: python-dotenv

Email Service: Resend API for secure transactional email delivery

Validation: Server-side contact form input validation

📂 Project Structure

portfolio/
├── frontend/
|   |── public/
|   |     |── sahana.jpeg
│   ├── src/
|   |   |──assets/
|   |   |    |──sahana1.jpeg
│   │   ├── components/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── GitHubSection.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Learning.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProjectSection.tsx
│   │   │   ├── SketchDoodles.tsx
│   │   │   └── SkillsMindMap.tsx
│   │   ├── data/
│   │   │   └── portfolioData.ts
│   │   ├── services/
│   │   │   └── contactService.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   └── vite-env.d.ts
│   ├── node_modules/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/
│   ├── routes/
│   │   ├── __init__.py
│   │   └── contact.py
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── validators.py
│   │   └── email_service.py
│   ├── app.py
│   ├── config.py
│   └── requirements.txt
│
├── README.md
└── .gitignore
---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **Python** (v3.9+ recommended)

---

### 1. Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend

Install dependencies:

npm install

Create your .env file from .env.example:

cp .env.example .env

For production, set VITE_API_URL to the deployed Render backend URL.

Run the Vite development server:

npm run dev

The frontend will run at http://localhost:5173.

2. Backend Setup

Navigate to the backend directory:

cd backend

Create and activate a Python virtual environment:

Windows:

python -m venv .venv
.venv\Scripts\activate

macOS/Linux:

python3 -m venv .venv
source .venv/bin/activate

Install requirements:

pip install -r requirements.txt

Set up environment variables:

For local development, create backend/.env and configure:

SECRET_KEY=your-super-secret-key-change-this
MAIL_RECEIVER=your_receiving_email@example.com
RESEND_API_KEY=your_resend_api_key
FLASK_ENV=development
PORT=5000

💡 Security: Never commit .env files or API keys to GitHub. In production, add RESEND_API_KEY and MAIL_RECEIVER through your hosting provider's environment-variable settings.

Start the Flask backend:

python app.py

The backend API will run at http://127.0.0.1:5000.

🌐 Deployment

The portfolio is deployed as separate frontend and backend services:

Frontend: Vercel — https://portfolio1-kq8bv9pv8-aiet4.vercel.app

Backend: Render — https://sahana-portfolio-backend.onrender.com

Backend Health Check: https://sahana-portfolio-backend.onrender.com

The React frontend sends contact-form requests to the Flask REST API. The Flask backend uses the Resend API for email delivery, while API keys remain server-side.

📡 API Endpoints

POST /api/contact

Receives contact form submissions and dispatches emails.

Request Payload:

{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello Sahana, I saw your portfolio!"
}

Success Response (200 OK):

{
  "success": true,
  "message": "Message sent successfully!"
}

Error Response (400 Bad Request / 500 Server Error):

{
  "success": false,
  "message": "Please enter a valid email address."
}

🔒 Security Best Practices

No Credentials in Frontend: All email delivery happens on the Python Flask backend.

Environment Isolation: .env files are gitignored. Never commit API keys, passwords, or other secrets.

Resend API Key: RESEND_API_KEY is stored only as a server-side environment variable.

CORS Policy: The backend restricts API requests to approved frontend origins.

Input Validation: Contact form data is validated server-side before email delivery.

📜 Projects Featured

Library Management System

Full-stack web application for managing books, members, authentication, borrowing, returning, transactions, and library operations.

Repository

RetailFlow

End-to-end retail data engineering pipeline covering synthetic data generation, ETL processing, database integration, SQL analytics, and Power BI dashboards.

Repository

📄 License & Credits

Designed and coded by Sahana G © 2026.
"Designed, coded & probably debugged several times."