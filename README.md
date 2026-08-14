# Sahana G — Personal Developer Portfolio (Sketchbook Edition)

A complete full-stack developer portfolio for **Sahana G**, designed as a living, hand-drawn graphite pencil sketchbook brought to life on the web.

![Portfolio Visual Style](https://raw.githubusercontent.com/sahanag137/sahanag137/main/preview.png) *(Sketchbook Aesthetic)*

---

## 📌 Project Overview

This website represents Sahana's journey as a Data Science student, developer, and DSA enthusiast. Designed with an authentic **black-and-white graphite pencil sketchbook aesthetic**, it features:
- White & off-white paper texture tones
- Hand-drawn sketch arrows, cross-hatch shading, and handwritten annotations
- Custom interactive SVG diagrams (Library Management borrow/return flow & RetailFlow ETL architecture)
- Interactive hand-drawn skill mind map
- Full contact form backed by a Python Flask REST API with secure email dispatching

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, Custom Graphite CSS variables, SVG filter patterns
- **Icons**: Lucide React
- **Typography**: Space Grotesk (Modern Sans), Caveat (Handwritten), Fira Code (Mono)

### Backend
- **Framework**: Python 3.x, Flask
- **Middleware**: Flask-CORS
- **Environment**: python-dotenv
- **Security & Mail**: Standard SMTP with TLS, robust server-side input validators

---

## 📂 Project Structure

```
sahana-portfolio/
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.example
│   │
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css
│       │
│       ├── data/
│       │   └── portfolioData.ts       # Centralized personal & project data
│       │
│       ├── components/
│       │   ├── Navbar.tsx             # Minimal sticky navigation & mobile drawer
│       │   ├── Hero.tsx               # Graphite hero with hand-drawn laptop illustration
│       │   ├── About.tsx              # Notebook page layout & persona badges
│       │   ├── SkillsMindMap.tsx      # Pencil-drawn mind map ("ME + CODE")
│       │   ├── ProjectSection.tsx     # Asymmetric project pages with architectural diagrams
│       │   ├── Learning.tsx           # Hand-drawn sticky notes & progress arrows
│       │   ├── GitHubSection.tsx      # Sketched laptop & repository highlights
│       │   ├── Contact.tsx            # Hand-drawn notebook paper contact form
│       │   ├── Footer.tsx             # Minimal sketchbook footer
│       │   └── SketchDoodles.tsx      # Reusable SVG graphite doodles & cross-hatching
│       │
│       └── services/
│           └── contactService.ts      # API fetch client wrapper for Flask contact API
│
├── backend/
│   ├── app.py                         # Flask app entrypoint & CORS configuration
│   ├── requirements.txt               # Python package dependencies
│   ├── .env                           # Local backend environment variables (gitignored)
│   ├── .env.example                   # Environment variable template
│   ├── .gitignore
│   │
│   ├── config.py                      # App configuration loader
│   │
│   ├── routes/
│   │   ├── __init__.py
│   │   └── contact.py                 # POST /api/contact route controller
│   │
│   └── utils/
│       ├── __init__.py
│       ├── email_service.py           # Secure SMTP mailer with TLS & dev logger
│       └── validators.py              # Server-side validation helpers
│
├── README.md
└── .gitignore
```

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
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
   *By default, `VITE_API_URL` is set to `http://127.0.0.1:5000`.*

4. Run the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will run at `http://localhost:5173`.

---

### 2. Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   - **Windows**:
     ```cmd
     python -m venv .venv
     .venv\Scripts\activate
     ```
   - **macOS/Linux**:
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate
     ```

3. Install requirements:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

   Edit `backend/.env`:
   ```env
   SECRET_KEY=your-super-secret-key-change-this
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USE_TLS=true
   MAIL_USERNAME=your_email@gmail.com
   MAIL_PASSWORD=your_app_password
   MAIL_RECEIVER=sahana.gcsds@gmail.com
   FLASK_ENV=development
   PORT=5000
   ```
   > 💡 **Note**: If `MAIL_USERNAME` and `MAIL_PASSWORD` are not set, the backend runs in **Development Mode** and prints incoming messages cleanly to the server logs without failing.

5. Start the Flask backend:
   ```bash
   python app.py
   ```
   The backend API will run at `http://127.0.0.1:5000`.

---

## 📡 API Endpoints

### `POST /api/contact`
Receives contact form submissions and dispatches emails.

**Request Payload:**
```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello Sahana, I saw your portfolio!"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response (400 Bad Request / 500 Server Error):**
```json
{
  "success": false,
  "message": "Please enter a valid email address."
}
```

---

## 🔒 Security Best Practices

1. **No Credentials in Frontend**: All mail dispatch operations occur strictly on the Python Flask backend.
2. **Environment Isolation**: `.env` files are gitignored. Always commit `.env.example` templates instead.
3. **CORS Policy**: Configured to restrict requests in production.
4. **App Passwords**: When using Gmail SMTP, generate an **App Password** from Google Account Security.

---

## 📜 Projects Featured

1. **Library Management System**
   - Full-stack web application for managing books, members, authentication, borrowing, returning, transactions, and library operations.
   - [Repository](https://github.com/sahanag137/Library-Management-system-Flask-)

2. **RetailFlow**
   - End-to-end retail data engineering pipeline covering synthetic data generation, ETL processing, database integration, SQL analytics, and Power BI dashboards.
   - [Repository](https://github.com/sahanag137/RetailFlow-Data-Engineering-Pipeline)

---

## 📄 License & Credits

Designed and coded by **Sahana G** © 2026.
*"Designed, coded & probably debugged several times."*
