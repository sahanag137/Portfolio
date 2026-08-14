@echo off
echo Starting Sahana Portfolio Full-Stack Application...

start "Flask Backend API" cmd /k "cd backend && .venv\Scripts\activate && python app.py"
start "React Vite Frontend" cmd /k "cd frontend && npm run dev"

echo Both servers launched in separate windows!