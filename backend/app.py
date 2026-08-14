import os
from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from routes.contact import contact_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Configure CORS for frontend Vite dev server & production origins
    allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://portfolio1-kq8bv9pv8-aiet4.vercel.app"
]
    
    CORS(app, resources={
        r"/api/*": {
            "origins": allowed_origins,
            "methods": ["POST", "GET", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    })

    # Register blueprints
    app.register_blueprint(contact_bp)

    @app.route('/', methods=['GET'])
    def health_check():
        return jsonify({
            "status": "online",
            "app": "Sahana G Portfolio Backend API",
            "version": "1.0.0"
        })

    return app

app = create_app()

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    print(f"✏️ Starting Sahana Portfolio Backend Server on http://127.0.0.1:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)