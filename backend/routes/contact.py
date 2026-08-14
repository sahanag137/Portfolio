from flask import Blueprint, request, jsonify
from utils.validators import validate_contact_input
from utils.email_service import send_contact_email

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/api/contact', methods=['POST'])
def handle_contact():
    """
    POST /api/contact
    Accepts JSON with name, email, message.
    Validates payload and dispatches email notification.
    """
    try:
        data = request.get_json(silent=True)
        if not data:
            return jsonify({
                "success": False,
                "message": "Invalid JSON format or empty request body."
            }), 400

        # Input validation
        is_valid, validation_err = validate_contact_input(data)
        if not is_valid:
            return jsonify({
                "success": False,
                "message": validation_err
            }), 400

        name = data['name'].strip()
        email = data['email'].strip()
        message = data['message'].strip()

        # Send email
        success, detail = send_contact_email(name, email, message)
        
        if success:
            return jsonify({
                "success": True,
                "message": "Message sent successfully."
            }), 200
        else:
            return jsonify({
                "success": False,
                "message": "Unable to send message."
            }), 500

    except Exception as e:
        # Prevent stack trace leaks in API responses
        return jsonify({
            "success": False,
            "message": "An unexpected error occurred while processing your message."
        }), 500
